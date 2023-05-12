import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", ...rest }) => {
  return (
    <C.Button type={Type} onClick={onClick} {...rest}>
      {Text}
    </C.Button>
  );
};

export default Button;