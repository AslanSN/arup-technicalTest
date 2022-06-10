import React, { useContext } from "react";
import Item from "./Item/Item.jsx";
import { Context } from "../../store/appContext.js";

const MailList = () => {
  const { store, actions } = useContext(Context);

  const itemListing = (value, id) => <Item id={id} />;

  return (
    <>
      <div className="mail-column filter-bar"></div>
      <ul className="mailList-listing">{store.data.map(itemListing)}</ul>
    </>
  );
};

export default MailList;
