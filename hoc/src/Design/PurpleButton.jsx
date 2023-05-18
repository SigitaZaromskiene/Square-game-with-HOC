function PurpleButton({ title, clickHandler }) {
  return (
    <button className="button purple" onClick={clickHandler}>
      {title}
    </button>
  );
}

export default PurpleButton;
