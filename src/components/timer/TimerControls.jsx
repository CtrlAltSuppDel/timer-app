import Button from "../Button";

const TimerControls = ({ isRunning, toogleTimer, reset }) => {
  return (
    <div className="flex gap-4 justify-evenly mt-4">
      <Button
        style={`${isRunning ? "bg-green-600" : "bg-green-500"}`}
        onClick={toogleTimer}
      >
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button style={"bg-red-600 active:bg-red-500"} onClick={reset}>
        Reset
      </Button>
    </div>
  );
};

export default TimerControls;
