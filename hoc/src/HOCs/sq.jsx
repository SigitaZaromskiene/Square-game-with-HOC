import { v4 as uuidv4 } from "uuid";
import RandomNum from "./randomNum";
import randomColor from "../Design/randomColor";

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
        color: "green",
      },
    ]);
  };

  return <Component title={props.title} btnHandler={btnHandler}></Component>;
};

export const withDeleteAll = (Component) => (props) => {
  const btnHandler = () => {
    props.setSq([[]]);
  };
  return <Component btnHandler={btnHandler} title={props.title} />;
};

export const withRandomColor = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => [
      ...sq,
      {
        id: uuidv4(),
        spin: false,
        number: ("" + RandomNum(1, 999)).padStart(3, "0"),
        row: sq.length,
        show: true,
        color: randomColor(),
      },
    ]);
  };

  return <Component title={props.title} clickHandler={clickHandler} />;
};

export const withSortHandler = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => [...sq].sort((a, b) => a.number - b.number));
  };
  return <Component title={props.title} clickHandler={clickHandler} />;
};
export const withSortDefault = (Component) => (props) => {
  console.log(props);
  const clickHandler = () => {
    props.setSq((sq) => [...sq].sort((a, b) => a.row - b.row));
  };

  return <Component clickHandler={clickHandler} title={props.title} />;
};
