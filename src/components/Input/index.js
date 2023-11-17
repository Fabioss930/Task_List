import React from "react";
import * as C from "./styles";


const Input = ({ type, placeholder, value, onChange, icon: Icon, ...rest }) => {
  return (
    <C.Container>
      {Icon && <Icon size={20} style={{ marginRight: 16 }} color={"#A5A5A5"} />}
      <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </C.Container>
  );
};

export default Input