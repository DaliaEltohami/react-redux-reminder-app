import React, { Component } from "react";
import { add_Reminder, remove_Reminder, clear_Reminders } from "../actions";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import logo from "./reminder.png";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };

  renderReminders = () => {
    return (
      <div className="Reminders">
        <ul className="list-group">
          {this.props.reminders.map((reminder) => {
            return (
              <li
                className="list-item list-group-item d-flex"
                key={reminder.id}
              >
                <div className="reminder-info">
                  <p className="fs-4 text-capitalize m-0">{reminder.text}</p>
                  <p className="fs-4 text-capitalize m-0">
                    {moment(new Date(reminder.date)).fromNow()}
                  </p>
                </div>
                <div className="btn-remove-wrapper d-flex">
                  <button
                    className=".btn-remove btn btn-danger "
                    onClick={() => {
                      this.props.remove_Reminder(reminder.id);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <header>
          <img className="logo" src={logo} alt="header"></img>
          <div className="app-title">
            <h2>Reminder Application</h2>
          </div>
        </header>

        <input
          type="text"
          className="form-control"
          placeholder="What do You Think About ...."
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></input>

        {/* <input
          type="datetime-local"
          className="form-control"
          placeholder=""
          value={this.state.date}
          onChange={(e) => {
            this.setState({ date: e.target.value });
          }}
        /> */}

        <div className="form-control">
          <DatePicker
            selected={this.state.date}
            onChange={(date) => this.setState({ date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => {
            if (this.state.text === "") {
              alert("Please Enter Your Reminder Text");
            } else {
              this.props.add_Reminder(this.state.text, this.state.date);
              this.setState({
                text: "",
                date: new Date(),
              });
            }
          }}
        >
          Add Reminder
        </button>
        {this.renderReminders()}
        <button
          className="btn btn-danger w-100"
          onClick={this.props.clear_Reminders}
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     add_Reminder: (text, date) => dispatch(add_Reminder(text, date)),
//   };
// }

export default connect(
  (state) => {
    return { reminders: state };
  },
  { add_Reminder, remove_Reminder, clear_Reminders }
)(App);
