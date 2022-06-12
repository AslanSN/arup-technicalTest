import React, { useContext, useState } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

import "./ItemStyles.scss";
import RequestDetails from "../../RequestDetailsColumn/RequestDetails.jsx";
const ItemProptypes = {
  id: PropTypes.number.isRequired,
};

/**
 * ! Component - Item for the list from Mail List
 * * AslanSN 22-06-22
 * @param {number} props - Id
 * @returns React Component - List item
 */
const RequestItem = (props) => {
  const { store, actions } = useContext(Context);

  const item = store.data[props.id];
  const date = new Date(item.regDate);

  const europeanDate = actions.europeanDateFormatter(date);
  const shortenedDiscipline = actions.disciplineShortener(item.discipline);
  const initialAndSurname = actions.initialsAndSurnameExtractor(
    item.sentTo.name
  );

  // const openPreview = (id) => {
  //   console.log(" On click is working: ", id);
  //   return <RequestDetails id={id} />;
  // };

  // const changeShowState = (event, id) => {
  //   setStore({ "isShown": (current) => !current })
  //   setStore({"selected": store.data[id]})
  // };

  return (
    <>
      <li key={props.id} className="item-value" onClick={(ev, id) => actions.hooks.useCollapsible(props.id)}>
        <ul className="item-ul">
          <li className="item-number">{item.num + 1}</li>
          <li className="item-discipline">{shortenedDiscipline}</li>
          <li className="item-regDate">{europeanDate}</li>
          <li className="item-sentTo">{initialAndSurname}</li>
          <li className="item-subject">{item.subject}</li>
          <li className="item-status">{item.status}</li>
          <li className="item-critical">{String(item.critical)}</li>
        </ul>
      </li>
    </>
  );
};

RequestItem.PropTypes = ItemProptypes;

export default RequestItem;
