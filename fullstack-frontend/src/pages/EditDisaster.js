import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDisaster() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [disaster, setDisaster] = useState({
    location: "",
    disasterType: "",
    description: "",
  });

  const { location, disasterType, description } = disaster;

  const onInputChange = (e) => {
    setDisaster({ ...disaster, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:8080/disaster/${id}`, disaster);
      navigate("/disasterAdmin");
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const loadDisaster = async () => {
    try {
      const result = await Axios.get(`http://localhost:8080/disaster/${id}`);
      setDisaster(result.data);
    } catch (error) {
      console.error("Failed to load disaster:", error);
    }
  };

  useEffect(() => {
    loadDisaster();
  }, []);

  return (
    <div className="container mt-5 col-4">
      <div className="card shadow p-4">
        <h2 className="mb-5 text-center">Edit Disaster</h2>
        <form onSubmit={handleSubmit}>
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
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={onInputChange}
                required
                placeholder="Enter Description"
              ></textarea>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-success">
              Update Disaster
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate("/disasterAdmin")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDisaster;
