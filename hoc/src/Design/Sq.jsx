import { withCloneBtn, withDeleteSq, withSpin } from "../HOCs/sq";
import SmallButton from "./SmallButton";

function Sq({ sq, setSq }) {
  console.log(sq);
  const DeleteSq = withDeleteSq(SmallButton);
  const Spin = withSpin(SmallButton);
  const Clone = withCloneBtn(SmallButton);

  return (
    <div
      className={sq.spin ? "spin" : ""}
      style={{
        backgroundColor: sq.color,
        color: "white",
        height: "150px",
        width: "150px",
        justifySelf: "center",
        padding: "25px",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      {sq.number}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        <DeleteSq title="Delete" sq={sq} setSq={setSq} />
        <Spin title="Spin" setSq={setSq} sq={sq} />
        <Clone title="Clone" setSq={setSq} sq={sq} />
      </div>
    </div>
  );
}

export default Sq;
