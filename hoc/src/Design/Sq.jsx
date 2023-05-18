import { withCloneBtn, withDeleteSq, withSpin } from "../HOCs/sq";
import SmallButton from "./SmallButton";

function Sq({ sq, setSq }) {
  console.log(sq);
  const DeleteSq = withDeleteSq(SmallButton);
  const Spin = withSpin(SmallButton);
  const Clone = withCloneBtn(SmallButton);

  return (
    <div
      className={sq.spin === true ? "spin" : ""}
      style={{
        backgroundColor: sq.color,
        color: "black",
        height: "150px",
        width: "150px",
        justifySelf: "center",
      }}
    >
      {sq.number}
      <div>
        <DeleteSq title="Delete" sq={sq} setSq={setSq} />
        <Spin title="Spin" setSq={setSq} sq={sq} />
        <Clone title="Clone" setSq={setSq} sq={sq} />
      </div>
    </div>
  );
}

export default Sq;
