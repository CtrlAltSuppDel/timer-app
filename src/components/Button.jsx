const Button = ({ children = "Button text", onClick, style, ref = null }) => {
  return (
    <button
      className={
        "text-white cursor-pointer font-bold rounded-lg block md:w-24 text-sm px-2 py-1 md:px-4 md:py-2 md:text-xl " +
        style
      }
      onClick={() => onClick()}
      ref={ref}
    >
      {children}
    </button>
  );
};

export default Button;
