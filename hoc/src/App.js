import "./App.scss";
import { useState } from "react";
import Sq from "./Design/Sq";
import { v4 as uuidv4 } from "uuid";
import { withAdd } from "./HOCs/sq";
import Button from "./Design/Button";

function App() {
  const [sq, setSq] = useState([]);

  const BaseBtnWithAddBtn = withAdd(Button);

  return (
    <>
      <div className="button-container">
        <BaseBtnWithAddBtn title="Add" setSq={setSq} />
      </div>
      <div className="sq-container">
        {sq.map((sq, i) =>
          sq.show ? <Sq key={uuidv4()} sq={sq} setSq={setSq} i={i} /> : null
        )}
      </div>
    </>
  );
}

export default App;
