const SmallButton = ({ title, clickHandler }) => {
  return (
    <button className="small" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default SmallButton;
