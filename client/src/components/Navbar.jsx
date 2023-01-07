import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartBtn from "../buttons/CartBtn";

function Navbar({ setLog, log }) {
  const user = JSON.parse(localStorage.getItem("app")) || null;
  const handlelog = () => {
    localStorage.removeItem("app");
    setLog(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div>
              <ul className="navbar-nav me-auto">
                <div>
                  <Link to="/">
                    <img
                      style={{ width: 170, height: 50, color: "white" }}
                      src="https://res.cloudinary.com/dg8egpfp8/image/upload/v1673072871/WomenChoice-Images/logo/WomenChoice-1_zzc5sw.png"
                      alt="logo"
                    />
                  </Link>
                </div>

                <li className="nav-item">
                  <Link
                    style={{ color: "#0c78e4" }}
                    className="nav-link active"
                    to="/jeans"
                  >
                    Jeans
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#0c78e4" }}
                    className="nav-link active"
                    aria-current="page"
                    to="/tops"
                  >
                    Top
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ color: "#0c78e4" }}
                    className="nav-link active"
                    aria-current="page"
                    to="/kurtis"
                  >
                    Kurtis
                  </Link>
                </li>
              </ul>
            </div>

            <div style={{ display: "flex", paddingRight: "50px" }}>
              {console.log(log)}
              {log ? (
                <button
                  className="btn btn-outline-primary ms-2"
                  onClick={() => handlelog()}
                >
                  {user.name} Logout
                </button>
              ) : (
                <Link to="/SignUp" className="btn btn-outline-primary ms-2">
                  SignUp
                </Link>
              )}

              <CartBtn></CartBtn>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
