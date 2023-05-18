const YellowButton = ({ title, clickHandler }) => {
  return (
    <button className="button orange" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default YellowButton;
