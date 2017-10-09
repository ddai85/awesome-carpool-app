import React from 'react';
import DayPicker from 'react-day-picker';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
    };
    this.setDate = props.setDate;
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    }, () => {
      this.setDate(this.state.selectedDay);
    });
  };

  render() {
    const { selectedDay } = this.state;
    return (
      <div className="col-sm-4">
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default Calendar;