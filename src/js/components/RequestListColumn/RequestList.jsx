import React, { useContext, useEffect } from "react";
import RequestItem from "./Item/Item.jsx";
import { Context } from "../../store/appContext.js";
import SorterBar from "./SorterBar/SorterBar.jsx";

import "./RequestListStyles.scss";
import RequestDetails from "../RequestDetailsColumn/RequestDetails.jsx";

/**
 * * AslanSN - 22-06-10
 * @returns
 */
const RequestList = () => {
  const { store } = useContext(Context),
    itemListing = (value, id) => <RequestItem id={id} />;

  return (
    <div className="request-list-column">
      <div className="requests-container">
        <div className="request-list-and-filter">
          <SorterBar />
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
