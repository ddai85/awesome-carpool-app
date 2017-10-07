import React from 'react';

const RideList = (props) => (
  <div className="container-fluid">
    <div>The following rides are available on your selected date:</div>
    {props.rides.map((rideObj, index) => {
      // check if ride is full
      if (rideObj[`rider${rideObj.seats}`] === null) {
        return <p>{`${index + 1}: ${rideObj.username}'s ${rideObj.car}`}</p>
      }
    }) }
  </div>
)

export default RideList;