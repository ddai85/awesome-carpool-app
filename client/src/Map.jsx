import React from 'react';

const Map = (props) => (
  <div className="col-sm-8">
    <img className="map" src={`../bin/route ${props.route}.png`} />}
  </div>
)
  
export default Map;