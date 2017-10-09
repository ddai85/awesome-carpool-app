import React from 'react';

const RideList = (props) => (
  <div className="container-fluid">
    <div className="text">The following rides are available on your selected date:</div>
    {props.rides.map((rideObj, index) => {
      // check if ride is full
      if (rideObj[`rider${rideObj.seats}`] === null) {
        return (
        <div>
          <button onClick={props.bookRide} key={index.toString()} className="btn btn-outline-light">{`${index + 1}: ${rideObj.username}'s ${rideObj.car}`}</button>
        </div>
        )
      }
    }) }
  </div>
)

export default RideList;