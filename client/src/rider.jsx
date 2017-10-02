import React from 'react';

const RiderPage = (props) => (
  <div>Rider Page</div>
  <select Time>
    <option value="startTime">7:00 am</option>
    <option value="starTime">7:30 am</option>
    <option value="startTime">8:00 am</option>
    <option value="startTime">8:30 am</option>
  </select>

  <select StartPoint>
    <option value="startPoint">Oakland</option>
    <option value="startPoint">San Jose</option>
  </select>

  <select Endpoint>
    <option value="endPoint">Downtown</option>
    <option value="endPoint">Hack Reactor</option>
  </select>

);

export default RiderPage;
