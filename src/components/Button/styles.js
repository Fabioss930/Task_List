import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  max-width: 540px;
  cursor: pointer;
  background-color: #046ee5;
  color: white;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
