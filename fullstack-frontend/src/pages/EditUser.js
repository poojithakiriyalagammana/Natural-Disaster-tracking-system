import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    role: "",
  });

  const { role } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:8080/user/${id}`, user);
      navigate("/display");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const loadUser = async () => {
    try {
      const result = await Axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Failed to load user:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="container mt-5 col-4">
      <div className="card shadow p-4">
        <h2 className="mb-5 text-center">Update Role </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="role"
                name="role"
                value={role}
                onChange={onInputChange}
                required
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-outline-success">
              Edit Role
            </button>
            <button type="submit" className="btn btn-danger">
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
