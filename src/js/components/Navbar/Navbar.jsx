import React from "react";
import { Link } from "react-router-dom";

import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm p-3 mb-5 rounded bg-white mybar">
      <div className="container-fluid">
        <a className="navbar-brand  fs-1 text-danger" href="#">
          d.Hub field
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-5"
          id="navbarSupportedContent">
          <ul className="navbar-nav ms-5 fs-3 text-dark font-weight-bold me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ms-5 me-3 ">
              <a className="nav-link active" aria-current="page" href="#">
                Documents
              </a>
            </li>
            <li className="nav-item ms-3 me-3 text-red font-weight-bold">
              <Link to="/">
                <Link className="nav-link active" href="#">
                  RFI
                </Link>
              </Link>
            </li>
            <li className="nav-item ms-3 me-3 text-dark font-weight-bold">
              <Link className="nav-link active" href="#">
                Submittals
              </Link>
            </li>
            <li className="nav-item ms-3 me-3 text-dark link-dark font-weight-bold ">
              <Link className="nav-link active" href="#">
                Issues
              </Link>
            </li>
          </ul>
          <Link to="www"></Link>
          <a
            href="https://www.arup.com/offices/spain"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="d-flex arup-logo"
              src="../../../resources/Arup_Red_RGB.png"
              alt="Arup logo"
              height="24"
              width="100"
            />
          </a>
          {/* <form className="d-flex" role="search" data-np-checked="1">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" data-np-checked="1"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
