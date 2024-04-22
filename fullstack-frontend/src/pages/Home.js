import React from "react";
import { Link } from "react-router-dom";
import videoBlog from "../assets/NaturalDisaster.mp4";

export const Home = () => {
  return (
    <div
      className="container-fluid p-0"
      style={{
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 1 )",
      }}
    >
      <video
        autoPlay
        loop
        muted
        className="video-bg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: "0.4",
        }}
      >
        <source src={videoBlog} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="content"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="display-3 mb-5">
                Welcome to the Natural Disaster Tracking System
              </h2>
              <p className="lead">
                Track and monitor natural disasters in real-time. Our system
                provides up-to-date information on ongoing disasters, including
                their locations, severity, and potential impact areas.
              </p>
              <p>
                Natural disasters such as earthquakes, hurricanes, floods,
                wildfires, and tsunamis can cause immense destruction and loss
                of life. It is crucial to stay informed and prepared to minimize
                the impact of these events.
              </p>
              <p>
                By staying informed, you can take timely actions to protect
                yourself and your loved ones. In addition to tracking, it's
                essential to have a plan in place for defending yourself from
                natural disasters. This includes knowing evacuation routes,
                preparing emergency kits, and understanding safety procedures.
              </p>
              <Link className="btn btn-primary btn-lg mt-1" to="login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
