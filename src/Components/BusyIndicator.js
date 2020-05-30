import React from 'react';

const BusyIndicator = () => {
  return (
    <div className="d-flex justify-content-center mt-4 pt-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default BusyIndicator;
