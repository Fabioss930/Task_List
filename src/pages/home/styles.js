import styled from "styled-components";

export const ComponentToolBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: black;
`;

export const ComponentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const Body = styled.div`
  background: #f1f5f9;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 120px 30px;

  @media (max-width: 576px) {
    margin: 120px 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const EmptyList = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #858482;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 16px;
  text-align: center;
`;

export const ComponentLogo = styled.div`
  border-bottom: 2px solid #f1f5f9;
  margin-top: 40px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentTask = styled.div`
  display: block;
`;

export const QtdTask = styled.div`
  position: relative;
  top: 100px;
  left: 30px;
  font-size: 36px;
  font-weight: 700;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

