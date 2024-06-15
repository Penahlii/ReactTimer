import { Component } from "react";
import "./App.css";
import CurrentTime from "./Components/CurrentTime/CurrentTime";
import Timer from "./Components/Timer/Timer";
import TimerInput from "./Components/TimerInput/TimerInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerValue: 0,
      countdown: 0,
      timerRunning: false,
    };
    console.log("Constructor: App component created.");
  }

  handleInputChange = (value) => {
    this.setState({ timerValue: value });
  };

  startTimer = () => {
    if (this.state.timerValue > 0) {
      this.setState({
        countdown: parseInt(this.state.timerValue, 10),
        timerRunning: true,
      });
    }
  };

  resetTimer = () => {
    this.setState({
      countdown: 0,
      timerRunning: false,
    });
  };

  updateCountdown = (value) => {
    this.setState({ countdown: value });
  };

  stopTimer = () => {
    this.setState({ timerRunning: false });
  };

  render() {
    return (
      <div className="container">
        <h1>Time Tracker App</h1>
        <CurrentTime />
        <TimerInput
          timerValue={this.state.timerValue}
          timerRunning={this.state.timerRunning}
          handleInputChange={this.handleInputChange}
          startTimer={this.startTimer}
          resetTimer={this.resetTimer}
        />
        <Timer
          countdown={this.state.countdown}
          updateCountdown={this.updateCountdown}
          timerRunning={this.state.timerRunning}
          stopTimer={this.stopTimer}
        />
      </div>
    );
  }
}

export default App;
