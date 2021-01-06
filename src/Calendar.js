import React from "react";
import ReactDOM from "react-dom";

import styles from './Input.module.css'
import "bootstrap/dist/css/bootstrap.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import "bootstrap/dist/css/bootstrap.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStart: "01/01/2018",
      inputFinish: "02/01/2018"
    };
    this.handleEvent = this.handleEvent.bind(this);
  }
  handleChangeS = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ inputStart: event.target.value });
  };
  handleChangeF = event => {
    this.setState({ inputFinish: event.target.value });
  };

  handleEvent(event, picker) {
    this.setState({
      inputStart: picker.startDate,
      inputFinish: picker.endDate
    });
  }
  render() {
    return (
      <div className="Calendar" style={{ paddingTop: 30 }}>
        <DateRangePicker
          autoApply={true}
          autoUpdateInput={false}
          startDate={this.state.inputStart}
          endDate={this.state.inputFinish}
          locale={{ format: "DD/MM/YYYY" }}
          onEvent={this.handleEvent}
        >
          <input
            type="text"
            value={this.state.inputStart}
            onChange={this.handleChangeS}
          />
          <input
            type="text"
            value={this.state.inputFinish}
            onChange={this.handleChangeF}
          />
        </DateRangePicker>
      </div>
    );
  }
}

export default Calendar;