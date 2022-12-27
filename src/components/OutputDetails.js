import React from 'react';

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container flex flex-col space-y-2">
      <p className="text-sm">
        Status:{' '}
        <span className="font-semibold px-2 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{' '}
        <span className="font-semibold px-2 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{' '}
        <span className="font-semibold px-2 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
