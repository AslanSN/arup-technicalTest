import React from "react";
import Filters from "../components/FiltersColumn/Filters.jsx";
import RequestList from "../components/RequestListColumn/RequestList.jsx";

import "./homeViewStyles.scss";

const HomeView = () => {

  return (
    <div className="homeView-container">
      <Filters />
      <RequestList />
      <br />
    </div>
  );
};

export default HomeView;
