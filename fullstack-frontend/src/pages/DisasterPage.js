import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoBlog from "../assets/NaturalDisaster.mp4";
import "./DisasterPage.css";
import fireMap from "../assets/fireMap.jpg";
import seaLakeIce from "../assets/SeaLakeIce.jpg";
import severeStorms from "../assets/SevereStorms.jpg";
import volcanoes from "../assets/Volcanoes.webp";

const api = {
  key: "your-api-key", // Replace with your new API key
  base: "https://api.openweathermap.org/data/2.5/",
};
export const DisasterPage = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
        setError(null);
      })
      .catch((error) => {
        setError("Please try again.");
      });
  };

  return (
    <div className="main">
      <video src={videoBlog} autoPlay loop muted />
      <h1>Prepare Before Risk</h1>
      <div className="content">
        {/* Weather */}
        <div className="Weather">
          <h4>Weather</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchPressed();
                }
              }}
            />
            <button className="btn btn-primary">Search</button>
          </div>
          {error && <p className="text-danger">{error}</p>}
          {weather.name && (
            <>
              <p className="mb-1">Location: {weather.name}</p>
              <p className="mb-1">Temperature: {weather.main.temp} °C</p>
              {weather.weather && weather.weather.length > 0 && (
                <p className="mb-1">
                  Description: {weather.weather[0].description}
                </p>
              )}
            </>
          )}
        </div>

        {/* Category */}
        <div className="category">
          <div className="row">
            <div className="col-md-6">
              <Link to="/fireMap" className="category-link">
                <img
                  src={fireMap}
                  className="category-img"
                  width="300"
                  height="225"
                  alt="Fire Map"
                />
                <b>Wildfire</b>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/severeStorms" className="category-link">
                <img
                  src={severeStorms}
                  className="category-img"
                  width="300"
                  height="225"
                  alt="Severe Storms"
                />
                <b>Severe Storms</b>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/volcanoes" className="category-link">
                <img
                  src={volcanoes}
                  className="category-img"
                  width="300"
                  height="225"
                  alt="volcanoes"
                />
                <b>volcanoes</b>
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/seaLakeIce" className="category-link">
                <img
                  src={seaLakeIce}
                  className="category-img"
                  width="300"
                  height="225"
                  alt="Sea and Lake Ice"
                />
                <b>Sea and Lake Ice</b>
              </Link>
            </div>
          </div>
          <div className="updateDisaster">
            <h6>
              Please let the community know if you have any updates on the
              disaster
            </h6>
            <Link className="btn btn-danger btn-lg mt-1" to="/updateDisaster">
              Add New Disaster
            </Link>
          </div>

          <div className="more">
            <Link className="btn btn-primary btn-lg mt-5" to="/allDisaster">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
