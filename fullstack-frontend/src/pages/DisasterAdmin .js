import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const DisasterAdmin = () => {
  const { id } = useParams();
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

  const deleteDisaster = async (id) => {
    await axios.delete(`http://localhost:8080/disaster/${id}`);
    loadDisasters();
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h2>Disaster-Admin</h2>
      </div>

      <table className="table border shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Disaster Type</th>
            <th>Location</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {disasters.map((disaster, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{disaster.id}</td>
              <td>{disaster.disasterType}</td>
              <td>{disaster.location}</td>
              <td>{disaster.description}</td>
              <td>
                <Link
                  className="btn btn-success mx-2"
                  to={`/editDisaster/${disaster.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={() => deleteDisaster(disaster.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
