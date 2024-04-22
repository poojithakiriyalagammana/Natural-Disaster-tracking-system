import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import alert from "../assets/Alert.gif";
export const AllDisaster = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    loadDisasters();
  }, []);

  const loadDisasters = async () => {
    try {
      const result = await axios.get("http://localhost:8080/allDisaster");
      setDisasters(result.data);
    } catch (error) {
      console.error("Error fetching disasters:", error);
    }
  };

  return (
    <div
      className="container"
      style={{
        padding: "30px",
        bottom: 0,
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center", padding: "20px" }}>
        <img
          src={alert}
          style={{ width: "100px", height: "100px" }}
          alt="Alert"
        />
      </div>
      <div className="mb-4">
        <h2>Disasters</h2>
      </div>

      <table className="table border shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((disaster, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{disaster.disasterType}</td>
              <td>{disaster.location}</td>
              <td>{disaster.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          padding: "40px",
          bottom: 0,
        }}
      ></div>
      <button type="button" className="btn btn-outline-danger">
        <Link to="/disasterPage" className="nav-link">
          Go Back
        </Link>
      </button>
    </div>
  );
};
