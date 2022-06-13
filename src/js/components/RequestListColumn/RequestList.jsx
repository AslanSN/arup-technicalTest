import React, { useContext, useEffect } from "react";
import RequestItem from "./Item/Item.jsx";
import { Context } from "../../store/appContext.js";
import FilterBar from "./FilterBar/FilterBar.jsx";

import "./RequestListStyles.scss";
import RequestDetails from "../RequestDetailsColumn/RequestDetails.jsx";

const RequestList = () => {
  const { store } = useContext(Context);
  // useEffect(() => {
  //   let counter = 0;
  //   counter > 0 ? (RequestList(), counter++, console.log(counter)) : null;
  // }, [store.data]);
  const itemListing = (value, id) => <RequestItem id={id} />;

  return (
    <div className="request-list-column">
      <div className="requests-container">
        <div className="request-list-and-filter">
          <FilterBar />
          <ul className="request-list-listing">
            <div className="request-sublist">{store.data.map(itemListing)}</div>
          </ul>
        </div>
      </div>
      {store.details.selected && <RequestDetails />}
    </div>
  );
};

export default RequestList;
