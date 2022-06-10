import React from 'react';

import './RequestBarStyles.scss';

const RequestBar = () => (
  <div className="request-bar-container">
    <button className="btn fs-3 btn-transparent text-danger">
      Request for information
    </button>
		<button className="btn fs-3 btn-transparent text-danger ">download</button>
    <button className="btn fs-3 btn-danger">
      Add request
    </button>
  </div>
);

export default RequestBar;