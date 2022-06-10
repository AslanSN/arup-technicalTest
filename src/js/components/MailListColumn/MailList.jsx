import React, { useContext } from "react";
import Item from "./Item/Item.jsx";
import { Context } from "../../store/appContext.js";
import FilterBar from "./FilterBar/FilterBar.jsx";
import RequestBar from "./RequestBar/RequestBar.jsx";

const MailList = () => {
  const { store, actions } = useContext(Context);

  const itemListing = (value, id) => <Item id={id} />;

  return (
    <>
			<div className="mail-column filter-bar"></div>
			<RequestBar/>
			<FilterBar/>
			<ul className="mailList-listing">
				{store.data.map(itemListing)}</ul>
    </>
  );
};

export default MailList;
