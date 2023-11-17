import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  background-color: #f3ebeb;
  margin: 7px 0;
  max-width: 540px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  background: transparent;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #a5a5a5;
  }
`;

