import React from "react";

type ButtonTypes = {
  toExecute: Function,
  str: string
}

const Button = (props: ButtonTypes) => {
  return (
    <button onClick={() => props.toExecute()}>{props.str}</button>
  );
}

export default Button;