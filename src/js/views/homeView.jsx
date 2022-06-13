import React, { useContext } from "react";
import {Context} from "../store/appContext.js";
import Filters from "../components/FiltersColumn/Filters.jsx";
import RequestList from "../components/RequestListColumn/RequestList.jsx";

import "./homeViewStyles.scss";

const HomeView = () => {
  const { store, actions } = useContext(Context);
  // console.log(store.data, actions.dataReverser)
  // actions.dataReverser();
  return (
    <div className="homeView-container">
      <Filters />
      <RequestList />
      <br />
    </div>
  );
};

export default HomeView;
