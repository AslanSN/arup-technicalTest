import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
import MailList from "../components/MailListColumn/MailList.jsx";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

const HomeView = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <MailList/>
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
