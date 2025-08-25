import { useState, useRef } from "react";

import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerId = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toogleTimer = () => {
    if (isRunning) {
      clearInterval(timerId.current);
    } else {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(timerId.current);
    setIsRunning(false);
    setTime(0);
    timerId.current = null;
  };
  return (
    <div className="max-w-1/2 bg-gray-50 p-6 shadow-lg rounded-lg m-auto mt-20">
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        toogleTimer={toogleTimer}
        reset={reset}
      />
    </div>
  );
};

export default Timer;
