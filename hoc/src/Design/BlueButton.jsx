function BlueButton({ title, btnHandler }) {
  return (
    <button className="button blue" onClick={btnHandler}>
      {title}
    </button>
  );
}

export default BlueButton;
