import React, { useState, useEffect, useContext } from "react";
import Filters from "../components/FiltersColumn/Filters.jsx";
import RequestDetails from "../components/RequestDetailsColumn/RequestDetails.jsx";
// import { Link } from "react-router-dom";
import RequestList from "../components/RequestListColumn/RequestList.jsx";

import "./homeViewStyles.scss";
// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

const HomeView = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div className="homeView-container">
      <Filters/>
      <RequestList />
      <RequestDetails />
      {/* <ul className="list-group">


        {/* {store.data.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}>
              <span>Link to: {item.num}</span>

              {/* {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
                  </p>
                ) : null
              } */}
      {/* <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, "orange")}>
                Change Color
              </button>
            </li>
          );
        })}
      </ul> */}
      <br />
      {/* <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link> */}
    </div>
  );
};

export default HomeView;
