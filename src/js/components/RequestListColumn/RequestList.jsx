import React, { useContext } from "react";
import RequestItem from "./RequestItem/RequestItem.jsx";
import { Context } from "../../store/appContext.js";
import FilterBar from "./FilterBar/FilterBar.jsx";
import RequestBar from "../RequestBar/RequestBar.jsx";

import "./RequestListStyles.scss";

const RequestList = () => {
  const { store } = useContext(Context);

  const itemListing = (value, id) => <RequestItem id={id} />;

  return (
    <div className="request-list-column">
      {/* <div className="request-column filter-bar"></div> */}
      <div className="requests-container">
        <div className="request-list-and-filter">
          <FilterBar />
          <ul className="request-list-listing">
            <div className="request-sublist">{store.data.map(itemListing)}</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
