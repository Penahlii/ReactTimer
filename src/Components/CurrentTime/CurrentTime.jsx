import { Component } from "react";
import "./CurrentTime.css";

class CurrentTime extends Component {
  state = {
    currentTime: new Date(),
  };

  componentDidMount() {
    console.log("componentDidMount: CurrentTime component mounted.");
    this.currentTimeInterval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: CurrentTime component will unmount.");
    clearInterval(this.currentTimeInterval);
  }

  render() {
    return (
      <div className="current-time">
        <h2>Current Time: {this.state.currentTime.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default CurrentTime;
