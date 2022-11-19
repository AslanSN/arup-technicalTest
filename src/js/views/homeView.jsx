import React from "react";
import injectContext from "../store/appContext.js";

import Navbar from "../components/StaticComponents/Navbar/Navbar.jsx"
import RequestBar from "../components/StaticComponents/RequestBar/RequestBar.jsx"
import Filters from "../components/FiltersColumn/Filters.jsx";
import RequestList from "../components/RequestListColumn/RequestList.jsx";

import "./homeViewStyles.scss";
/**
 * * AslanSN - 22-06-07
 * Principal view
 * @returns React Component
 */
const HomeView = () => {
  return (
    <div className="homeView-container">
      <Navbar />
      <RequestBar />
      <div className="body-container">
        <Filters />
        <RequestList />
      </div>
    </div>
  );
};

export default injectContext(HomeView);
