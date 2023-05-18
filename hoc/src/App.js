import "./App.scss";
import { useState } from "react";
import Sq from "./Design/Sq";
import { v4 as uuidv4 } from "uuid";
import { withAdd, withDeleteAll, withRandomColor } from "./HOCs/sq";
import Button from "./Design/Button";
import BlueButton from "./Design/BlueButton";
import PurpleButton from "./Design/PurpleButton";

function App() {
  const [sq, setSq] = useState([]);

  const BaseBtnWithAddBtn = withAdd(Button);
  const ButtonDeleteAll = withDeleteAll(BlueButton);
  const PurpleBtnRandomColor = withRandomColor(PurpleButton);

  return (
    <div style={{ display: "flex" }}>
      <div className="button-container">
        <BaseBtnWithAddBtn title="Add" setSq={setSq} />
        <ButtonDeleteAll title="Delete" setSq={setSq}></ButtonDeleteAll>
        <PurpleBtnRandomColor title="Random Color" setSq={setSq} />
      </div>
      <div className="sq-container">
        {sq.map((sq, i) =>
          sq.show ? <Sq key={uuidv4()} sq={sq} setSq={setSq} i={i} /> : null
        )}
      </div>
    </div>
  );
}

export default App;
