import { v4 as uuidv4 } from "uuid";
import RandomNum from "./randomNum";

export const withAdd = (Component) => (props) => {
  const btnHandler = () => {
    props.setSq((sq) => [
      ...sq,
      {
        id: uuidv4(),
        spin: false,
        number: ("" + RandomNum(1, 999)).padStart(3, "0"),
        row: sq.length,
        show: true,
      },
    ]);
  };

  return <Component title={props.title} btnHandler={btnHandler}></Component>;
};
