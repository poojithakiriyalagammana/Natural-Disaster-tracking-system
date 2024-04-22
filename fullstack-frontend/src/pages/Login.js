import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State to manage loading

  const { email, password } = credentials;

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    try {
      const response = await Axios.post(
        "http://localhost:8080/login",
        credentials
      );

      const { role } = response.data;

      if (role === 0) {
        navigate("/disasterPage");
      } else if (role === 1) {
        navigate("/display");
      } else {
        toast.error("Invalid role received from server"); // Display error message
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials and try again."); // Display error message
    } finally {
      setLoading(false); // Set loading to false after navigation or error
    }
  };

  return (
    <div className="container mt-5 col-4">
      <div className="card shadow p-4">
        <h2 className="mb-5 text-center">Login</h2>
        <ToastContainer /> {/* ToastContainer for displaying toast messages */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={onInputChange}
                required
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={onInputChange}
                required
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={handleSubmit}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Logging in..." : "Login"}{" "}
              {/* Show loader text when loading */}
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
