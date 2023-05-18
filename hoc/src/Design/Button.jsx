function Button({ title, addBtnHandler }) {
  return (
    <button className="button" onClick={addBtnHandler}>
      {title}
    </button>
  );
}

export default Button;
