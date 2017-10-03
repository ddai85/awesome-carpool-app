import React from 'react';

const RiderPage = (props) => (


  <div>
  <div>Rider Page</div>
    <form>
      <label>
        Select Time:
        <select onChange={props.handleTime} >
          <option value="7am">7:00 am</option>
          <option value="7:30am">7:30 am</option>
          <option value="8am">8:00 am</option>
          <option value="8:30am">8:30 am</option>
        </select>
      </label>

      <label>
        Select start point:
        <select onChange={props.handleStartPoint}>
          <option value="oakland">Oakland</option>
          <option value="san jose">San Jose</option>
        </select>
      </label>

      <label>
        Select endpoint:
        <select onChange={props.handleEndPoint}>
          <option value="downtown">Downtown</option>
          <option value="hack reactor">Hack Reactor</option>
        </select>
      </label>
    </form>
  </div>
);

export default RiderPage;
