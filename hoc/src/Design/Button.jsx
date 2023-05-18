function Button({ title, btnHandler }) {
  return (
    <button className="button" onClick={btnHandler}>
      {title}
    </button>
  );
}

export default Button;
