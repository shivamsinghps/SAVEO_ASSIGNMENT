const moment = require('moment')
const redis = require('redis')

const WINDOW_DURATION = 2000;
const MAX_WINDOW_REQUEST_COUNT = 5;


module.exports = customLimiter = async (req, res, next) => {
  try {
    const redis_client = redis.createClient();
    redis_client.on('error', (err) => console.log('Redis Client Error', err));

    await redis_client.connect();
    const record = await redis_client.get(req.ip)
    console.log(record);
    const currentTime = moment();
    if (record == null) {
      let newRecord = [];
      let requestLog = {
        requestTimeStamp: currentTime.unix(),
        requestCount: 1
      };
      newRecord.push(requestLog);
      console.log(redis_client);
      redis_client.setEx(req.ip, (WINDOW_DURATION / 1000), JSON.stringify(newRecord));
      console.log('ff');
      next();
    }
    let data = JSON.parse(record);
    let totalWindowRequestsCount = data.reduce((accumulator, entry) => {
      return accumulator + entry.requestCount;
    }, 0);
    if (totalWindowRequestsCount >= MAX_WINDOW_REQUEST_COUNT) {
      res
        .status(429)
        .json({
          error:
            `You exceeded your quota of ${MAX_WINDOW_REQUEST_COUNT}  requests for this interval `
        });
    } else {
      let lastRequestLog = data[data.length - 1];
      lastRequestLog.requestCount++;
      data[data.length - 1] = lastRequestLog;
      redis_client.setEx(req.ip, (WINDOW_DURATION / 1000), JSON.stringify(data));
      next();
    }

  } catch (error) {
    next(error);
  }
};