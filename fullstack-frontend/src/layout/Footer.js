import React from "react";

export const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{
        backgroundColor: "#f1f1f1",
        padding: "10px",
        bottom: 0,
        width: "100%",
      }}
    >
      {/* Copyright */}
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-dark" href="https://www.facebook.com/">
          Poojith Kiriyalagammana
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};
