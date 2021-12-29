import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";
import Stack from "@mui/material/Stack";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  let [locs, setLocs] = React.useState([0, 0, 0, 0, 0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let entry = {
      Name: data.get("Name"),
      Latitude: data.get("Latitude"),
      Longitude: data.get("Longitude"),
    }
    let entryIndex = locs.indexOf(0)
    if (entryIndex < 5) {
      locs[entryIndex] = entry
      console.log(locs);
      setLocs([...locs])
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#72A1BF",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Button
        variant="contained"
        color="inherit"
        sx={{
          p: 1,
          m: 3,
          opacity: 1,
          ":hover": {
            opacity: 1,
          },
        }}
      >
        Home
      </Button>{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "60vw",
            height: "60vh",
            backgroundColor: "#F2FAFF",
            borderRadius: "36px",
          }}
        >
          <Box
            sx={{
              height: "12vh",
              display: "flex",
              width: "100%",
              backgroundColor: "#074770",
              borderTopLeftRadius: "36px",
              borderTopRightRadius: "36px",
            }}
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Box sx={{ width: "50%", display: "flex", alignItems: "center" ,pl:5}}>
              <Stack spacing={1} sx={{ ml: 2, mr: 10 }}>
                <Typography variant="caption" sx={{ color: "#fff" }}>
                  Location Name
                </Typography>
                <TextField
                  name="Name"
                  placeholder="Location"
                  inputProps={{
                    style: {
                      fontSize: 14,
                      height: 40,
                      width: 212,
                      padding: "0 14px",
                      borderRadius: 5,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Stack>
              <Stack spacing={1} sx={{ ml: 2 }}>
                <Typography variant="caption" sx={{ color: "#fff" }}>
                  Enter Longitude
                </Typography>
                <TextField
                  sx={{ ml: 5 }}
                  name="Longitude"
                  placeholder="Lon"
                  type="number"
                  inputProps={{
                    style: {
                      fontSize: 14,
                      height: 40,
                      width: 92,
                      padding: "0 14px",
                      borderRadius: 5,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Stack>
              <Stack spacing={1} sx={{ ml: 2 }}>
                <Typography variant="caption" sx={{ color: "#fff" }}>
                  Enter Latitude
                </Typography>
                <TextField
                  sx={{ ml: 5 }}
                  name="Latitude"
                  placeholder="Lat"
                  type="number"
                  inputProps={{
                    style: {
                      fontSize: 14,
                      height: 40,
                      width: 92,
                      padding: "0 14px",
                      borderRadius: 5,
                      backgroundColor: "#fff",
                    },
                  }}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {" "}
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  mr: 5,
                  height: "5vh",
                  width: "10vw",
                  borderRadius: 12,
                  opacity: 1,
                  ":hover": {
                    opacity: 1,
                  },
                }}
                type="submit"
              >
                Submit
              </Button>{" "}
            </Box>
          </Box>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Box sx={{ width: "87%", height: "40vh", p: 2, m: 2 }}>
                <Typography
                  variant="subtitle"
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  All Co-ordinates:
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {locs.map((item, i) => (
                    <Box key={i} sx={{ display: "block", mt: 2 }}>
                      <Box sx={{ display: "flex" }}>
                        {i + 1})
                        {item === 0 ? (
                          <span
                            style={{ marginLeft: "10px", marginRight: "5rem" }}
                          >
                            _ _ _ _ _ _ _{" "}
                          </span>
                        ) : (
                          <span
                            style={{ marginLeft: "10px", marginRight: "5rem" }}
                          >
                            {item.Name}
                          </span>
                        )}
                        <Box>
                          {item === 0 ? (
                            <span style={{ marginLeft: "30px" }}>
                              _ _ _ _ _ _ _{" "}
                            </span>
                          ) : (
                            <span style={{ marginLeft: "30px" }}>{item.Latitude}</span>
                          )}
                          {item === 0 ? (
                            <span style={{ marginLeft: "30px" }}>
                              _ _ _ _ _ _ _{" "}
                            </span>
                          ) : (
                            <span style={{ marginLeft: "30px" }}>{item.Longitude}</span>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: '#074770 0% 0% no-repeat padding-box',
                    borderRadius:5,
                    p: 1,
                    mt: 20,
                    opacity: 1,
                    ":hover": {
                      opacity: 1,
                    },
                  }}
                >
                  Show Route
                </Button>{" "}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: "100%", height: 5, height: "48vh" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDYQgSl3hTwNv6ACa0CLlrgE9x4VdPHWuY",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
