import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export const UpdateDisaster = () => {
  const [disaster, setDisaster] = useState({
    disasterType: "",
    location: "",
    description: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const { disasterType, location, description } = disaster;

  const onInputChange = (e) => {
    setDisaster({ ...disaster, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8080/allDisaster", disaster);
      setSuccessMessage("Your disaster added successfully");
      setDisaster({ disasterType: "", location: "", description: "" }); // Reset form fields
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000); // Clear success message after 3 seconds
    } catch (error) {
      console.error("Disaster not updated:", error);
    }
  };

  return (
    <div className="container mt-5 col-4">
      <div className="card shadow p-4">
        <h2 className="mb-5 text-center">Add Disaster</h2>
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="disasterType"
                name="disasterType"
                value={disasterType}
                onChange={onInputChange}
                required
                placeholder="Enter Disaster Type"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={location}
                onChange={onInputChange}
                required
                placeholder="Enter Location"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={onInputChange}
                required
                placeholder="Description"
                rows={5}
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-primary">
              Add Disaster
            </button>
            <button type="button" className="btn btn-outline-danger">
              <Link to="/disasterPage" className="nav-link">
                Go Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
