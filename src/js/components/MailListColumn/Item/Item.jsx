import React, {useContext} from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

import './ItemStyles.css'
const ItemProptypes = {
  id: PropTypes.string.isRequired,
};

const Item = (props) => {
  const { store, actions } = useContext(Context);
  const item = store.data[props.id];

  const date = new Date(item.regDate);
  const europeanDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

  return (
    <li key={props.id} className="item">
      <ul className="item-ul">
        <li className="item-number">{item.num}</li>
        <li className="item-discipline">{item.discipline}</li>
        <li className="item-regDate">{europeanDate}</li>
        <li className="item-sentTo">{item.sentTo.name}</li>
        <li className="item-subject">{item.subject}</li>
        <li className="item-status">{item.status}</li>
        <li className="item-critical">{String(item.critical)}</li>
      </ul>
    </li>
  );
};

Item.PropTypes = ItemProptypes;

export default Item;
