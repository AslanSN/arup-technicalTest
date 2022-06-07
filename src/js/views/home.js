import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5 bg-light">
    <h1>Hello Rigo!</h1>
    <p>Anything</p>
    <a href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
		</a>
		<img src="../../resources/mockup1.PNG"/>
    <Link to="/demo">
      <button className="btn btn-primary me-3">
        Check the Context in action
      </button>
    </Link>
  </div>
);
