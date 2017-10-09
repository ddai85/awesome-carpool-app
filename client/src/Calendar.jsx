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
      <span>
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
        />
      </span>
    );
  }
}

export default Calendar;