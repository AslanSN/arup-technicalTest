import React, { useContext } from "react";
import { Context } from "../../store/appContext.js";
import PropTypes from "prop-types";

import "./RequestDetailsStyles.scss";

const RequestDetailsProptypes = {
  object: PropTypes.object.isRequired,
};
/**
 * ! Component - Column & Card
 * * AslanSN - 22-06-11
 * ? I've used a different kind of HTML implementation not using <div/> elements
 * ? but using the declarative name of each block but for spans.
 *
 * ? Also I used a different nominalization for the classes as repeating the origin
 * ? seems to be excesive for the kind of coding I'm using (always using the father
 * ? block to write inside of it.
 *
 * @param {object} store.details
 * @returns
 */
const RequestDetails = (props) => {

  const { store, actions } = useContext(Context);
  // console.log("Request Details is being called", props)
  const request = store.details.dataDetails;
  const date = new Date(request.regDate);
  // const message = store.data[0].message;
  const europeanDate = actions.europeanDateFormatter(date);
  return (
    <div className="request-details-column">
      <div className="card">
        <div className="header-container">
          <h5 className="discipline">{request.discipline || "N/A"}</h5>
          <h3 className="title">{request.subject || "N/A"}</h3>
          <div className="subtitle" role="doc-subtitle">
            Sent to: {request.sentTo.name}
          </div>
          <p className="importance-container">
            <span className="status">closed</span>
            <span className="critical">true</span>
          </p>
        </div>
        <hr />
        <div className="request-core-container">
          <h6>Request</h6>
          <p className="name-date">
            <span className="name">{`${request.sentTo.name} (${request.sentTo.company})`}</span>
            <span className="date">{europeanDate}</span>
          </p>
          <p className="core-text">{request.message || "Empty request"}</p>
        </div>
        <hr />
        <button className="btn btn-danger answer-button">Answer request</button>
      </div>
    </div>
  );
};

RequestDetails.PropTypes = RequestDetailsProptypes;

export default RequestDetails;
