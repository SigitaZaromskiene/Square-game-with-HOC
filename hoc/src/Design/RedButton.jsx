const RedButton = ({ title, clickHandler }) => {
  return (
    <button className="button red" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default RedButton;
