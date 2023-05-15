import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  display: flex;
  width: 320px;
  height: 230px;
  border-radius: 4px;
  background: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px 8px;
`;

export const Content = styled.div`
  padding: 18px 24px;
  width: 100%;
`;
export const Option = styled.div`
  display: flex;
  margin: 15px 0px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Status = styled.div`
  display: fle;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 30px;
  background: #12a454;
  border-radius: 24px;
  color: #ffff;
  font-weight: bold;
  font-size: 14px;
`;

export const Title = styled.div`
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  margin-top: 10px;
`;

export const Data = styled.div`
  font-size: 14px;
  color: #8692a6;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #363f5f;
  margin-top: 16px;
`;

export const EmptyList = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin: 150px 28px;
`;