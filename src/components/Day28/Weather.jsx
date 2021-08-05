import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import "./weather.css";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";
import { useState } from "react";

function Day28() {
  const [place, setPlace] = useState("");
  const [placedata, setPlaceData] = useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=9fe6e9d7752f46be8e9192156210308&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPlaceData(data);
      });
  };
  return (
    <div>
      <h2 className="heading">WEATHER APP</h2>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input
                style={{
                  border: "1px solid whitesmoke",
                  margin: "0px 10px",
                  marginLeft: "31vw",
                  marginTop: "6vh",
                  width: "360px",
                  background: "#fff",
                  color: "$input-text-color",
                  font: "inherit",
                  boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)",
                  outline: " 0",
                  padding: "22px 18px",
                }}
                placeholder="Enter the location"
                type="text"
                value={place}
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
              />

              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ marginLeft: "-6vw" }}
                onClick={updatePlaceData}
              >
                Search
              </Button>
            </div>
            <div className="offset-md-3 col-12 col-md-4 ">
              <div
                className="card"
                style={{
                  marginTop: "3vh",
                  height: "70vh",
                  width: "40vw",
                  background: "rgba( 11, 185, 204, 0.30  )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 0.0px )",
                  WebkitBackdropFilter: "blur( 0.0px )",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )",
                }}
              >
                {placedata.location ? (
                  <div>
                    <img className= "image" src={placedata.current.condition.icon} alt=""></img>
                    <div className="text">{placedata.current.condition.text}</div>
                    <div className="temp">{placedata.current.temp_c}°</div>
                    <h1 className="place">{placedata.location.name} &nbsp;<span className=" country">({placedata.location.country})</span></h1>
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="title_">Wind Now</div>
                          <div className="data">
                            {placedata.current.wind_kph}
                            <span className="unit">KM</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="title_">Humidity</div>
                          <div className="data">
                            {placedata.current.humidity}
                            <span className="unit">%</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="title_">Precipitation</div>
                          <div className="data">
                            {placedata.current.precip_in}
                            <span className="unit">%</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="title_">Gust</div>
                          <div className="data">
                            {placedata.current.gust_kph}
                            <span className="unit">KM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Alert severity="error">
                    <AlertTitle>Error! Place Not Found</AlertTitle>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day28;
