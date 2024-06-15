import React from "react";
import "./TimerInput.css";

const TimerInput = ({
  timerValue,
  timerRunning,
  handleInputChange,
  startTimer,
  resetTimer,
}) => {
  return (
    <div className="timer-input">
      <input
        type="number"
        value={timerValue}
        onChange={(e) => handleInputChange(e.target.value)}
        disabled={timerRunning}
      />
      <button onClick={startTimer} disabled={timerRunning}>
        Start Timer
      </button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default TimerInput;
