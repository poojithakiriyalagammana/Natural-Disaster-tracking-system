import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false); // State to manage loading

  const { name, username, email, password, confirmPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match"); // Display error message as pop-up
      setLoading(false); // Set loading to false
      return;
    }

    // Check if password has 6 or more characters
    if (password.length < 6) {
      toast.error("Password must have 6 or more characters"); // Display error message as pop-up
      setLoading(false); // Set loading to false
      return;
    }

    // If passwords match and password is long enough, proceed with form submission
    try {
      await Axios.post("http://localhost:8080/user", user);
      toast.success("Registration successful"); // Display success message as pop-up
      setLoading(false); // Set loading to false
      navigate("/disasterPage");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again."); // Display error message as pop-up
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="container mt-5 col-4">
      <div className="card shadow p-4">
        <h2 className="mb-5 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={onInputChange}
                required
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
                placeholder="Enter UserName"
              />
            </div>
          </div>
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
          <div className="mb-3 row">
            <div className="col">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onInputChange}
                required
                placeholder="Confirm Password"
              />
              {password !== confirmPassword && (
                <small className="text-danger">Passwords do not match</small>
              )}
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Loading..." : "Register"}{" "}
              {/* Show loader text when loading */}
            </button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <ToastContainer /> {/* ToastContainer for displaying toast messages */}
    </div>
  );
}

export default Register;
