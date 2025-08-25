const TimerDisplay = ({ time }) => {
  return (
    <h2 className="text-center text-md md:text-2xl lg:text-4xl font-bold">
      ⌛ Timer : {time} (s)
    </h2>
  );
};

export default TimerDisplay;
