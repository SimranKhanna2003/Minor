import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
//  import Signup from "./signup"

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img
                src="./images/logo.jpg"
                height={100}
                width={115}
                alt=""
                className="img-fluid"
              />
              
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
              <a href="/Signup" class="btn btn-style" role="button" >Sign Up</a>
              </form>
              <form class="d-flex">
              <a href="/Login" class="btn btn-style" role="button">Log In</a>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
