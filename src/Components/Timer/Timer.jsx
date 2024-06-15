import { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  timerInterval = null;

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate: Timer component updated.");
    if (
      this.props.countdown > 0 &&
      this.props.countdown !== prevProps.countdown
    ) {
      if (!this.timerInterval) {
        this.timerInterval = setInterval(() => {
          this.props.updateCountdown(this.props.countdown - 1);
        }, 1000);
      }
    } else if (this.props.countdown === 0 && this.timerInterval) {
      clearInterval(this.timerInterval);
      this.props.stopTimer();
      this.timerInterval = null;
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Timer component will unmount.");
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  render() {
    return (
      <div className="timer">
        <h2>
          Timer:{" "}
          {this.props.countdown > 0 ? this.props.countdown : "Time is up!"}
        </h2>
      </div>
    );
  }
}

export default Timer;
