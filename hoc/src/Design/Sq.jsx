function Sq({ sq }) {
  return (
    <div
      style={{
        backgroundColor: sq.color,
        color: "black",
        height: "150px",
        width: "150px",
        justifySelf: "center",
      }}
    >
      {sq.number}
    </div>
  );
}

export default Sq;
