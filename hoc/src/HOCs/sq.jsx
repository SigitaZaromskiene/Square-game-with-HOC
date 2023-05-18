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
  const clickHandler = () => {
    props.setSq((sq) => [...sq].sort((a, b) => a.row - b.row));
  };

  return <Component clickHandler={clickHandler} title={props.title} />;
};

export const withFilterOver500 = (Component) => (props) => {
  const clickHandler = () =>
    props.setSq((sq) =>
      sq.map((sq) =>
        sq.number >= 500 ? { ...sq, show: true } : { ...sq, show: false }
      )
    );

  return <Component title={props.title} clickHandler={clickHandler} />;
};

export const withShowAllSq = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => sq.map((sq) => ({ ...sq, show: true })));
  };

  return <Component title={props.title} clickHandler={clickHandler} />;
};

export const withDeleteSq = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => sq.filter((sq) => sq.id !== props.sq.id));
  };
  return <Component title={props.title} clickHandler={clickHandler} />;
};

export const withSpin = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) =>
      sq.map((sq) =>
        sq.id === props.sq.id ? { ...sq, spin: true } : { ...sq }
      )
    );
  };
  return <Component clickHandler={clickHandler} title={props.title} />;
};

export const withStopSpin = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => sq.map((s) => ({ ...s, spin: false })));
  };

  return <Component clickHandler={clickHandler} title={props.title} />;
};

export const withCloneBtn = (Component) => (props) => {
  const clickHandler = () => {
    props.setSq((sq) => [...sq, { ...props.sq, id: uuidv4() }]);
  };

  return <Component title={props.title} clickHandler={clickHandler} />;
};
