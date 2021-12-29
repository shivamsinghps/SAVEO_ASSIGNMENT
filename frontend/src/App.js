import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  let [locs, setLocs] = React.useState([0, 0, 0, 0, 0]);
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
          >
            <Box sx={{ width: "50%", display: "flex", alignItems: "center" }}>
              <TextField
                sx={{ ml: 5 }}
                inputProps={{
                  style: {
                    fontSize: 14,
                    height: 40,
                    width: 272,
                    padding: "0 14px",
                    borderRadius: 5,
                    backgroundColor: "#fff",
                  },
                }}
              />
              <TextField
                sx={{ ml: 5 }}
                inputProps={{
                  style: {
                    fontSize: 14,
                    height: 40,
                    width: 142,
                    padding: "0 14px",
                    borderRadius: 5,
                    backgroundColor: "#fff",
                  },
                }}
              />
              <TextField
                sx={{ ml: 5 }}
                inputProps={{
                  style: {
                    fontSize: 14,
                    height: 40,
                    width: 142,
                    padding: "0 14px",
                    borderRadius: 5,
                    backgroundColor: "#fff",
                  },
                }}
              />
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
                    <Box sx={{ display: "block", mt: 2 }}>
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
                            {item}
                          </span>
                        )}
                        <Box>
                          {item === 0 ? (
                            <span style={{ marginLeft: "10px" }}>
                              _ _ _ _ _ _ _{" "}
                            </span>
                          ) : (
                            <span>{item}</span>
                          )}
                          {item === 0 ? (
                            <span style={{ marginLeft: "10px" }}>
                              _ _ _ _ _ _ _{" "}
                            </span>
                          ) : (
                            <span>{item}</span>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: "100%", height: 5, height: "48vh" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyDYQgSl3hTwNv6ACa0CLlrgE9x4VdPHWuY" }}
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
    </Box >
  );
}

export default App;
