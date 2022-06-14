import React from 'react';

import './RequestBarStyles.scss';
/**
 * * AslanSN - 22-06-10
 * Bar with actions for the requests
 * @returns React Component
 */
const RequestBar = () => (
  <div className="request-bar-container">
    <button className="btn fs-4 btn-transparent text-danger request-info">
      Request for information
    </button>
		<button className="btn btn-transparent text-danger request-download">download</button>
    <button className="btn btn-danger request-add-request">
      Add request
    </button>
  </div>
);

export default RequestBar;