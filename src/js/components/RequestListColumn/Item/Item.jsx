import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

import "./ItemStyles.scss";
  
const ItemProptypes = {
  id: PropTypes.number.isRequired,
};

/**
 * ! Component - Item for the list from Mail List
 * * AslanSN 22-06-22
 * TODO : FIX - chanceClicked deactivate if other item is selected
 * @param {number} props - Id
 * @returns React Component - List item
 */
const RequestItem = (props) => {
  const { store, actions } = useContext(Context),
    [active, setActive] = useState(false),
    item = store.data[props.id],
    date = new Date(item.regDate),
    europeanDate = actions.europeanDateFormatter(date),
    shortenedDiscipline = actions.disciplineShortener(item.discipline),
    initialAndSurname = actions.initialsAndSurnameExtractor(item.sentTo.name),
    changeClicked = () => setActive(!active);

  return (
    <>
      <li
        key={props.id}
        className={!active ? "item-value" : "item-value activated"}
        onClick={(ev, id) => {
          changeClicked();
          actions.hooks.useCollapsible(props.id);
        }}>
        <ul className="item-ul">
          <li className="item-tag" />
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
