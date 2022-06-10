import React, {useContext} from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

import './ItemStyles.scss'
const ItemProptypes = {
  id: PropTypes.number.isRequired,
};

/**
 * ! Component - Item for the list from Mail List
 * * AslanSN 22-06-22
 * @param {number} props - Id
 * @returns React Component - List item
 */
const Item = (props) => {
  const { store, actions } = useContext(Context);
  const item = store.data[props.id];

  const date = new Date(item.regDate);
  const europeanDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  const shortenedDiscipline = actions.disciplineShortener(item.discipline);
  const initialAndSurname = actions.initialsAndSurnameExtractor(item.sentTo.name);

  return (
    <li key={props.id} className="item">
      <ul className="item-ul">
        <li className="item-number">{item.num + 1}</li>
        <li className="item-discipline">{shortenedDiscipline}</li>
        <li className="item-regDate">{europeanDate}</li>
        <li className="item-sentTo">
          {/* {item.sentTo.name} || */}
          {initialAndSurname}
        </li>
        <li className="item-subject">{item.subject}</li>
        <li className="item-status">{item.status}</li>
        <li className="item-critical">{String(item.critical)}</li>
      </ul>
    </li>
  );
};

Item.PropTypes = ItemProptypes;

export default Item;
