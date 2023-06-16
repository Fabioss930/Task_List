import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
`;

export const ContentLogo = styled.div`
  width: 50vw;
  height: 100vh;
  background: linear-gradient(0deg, #1a202e, #1a202e), url(london.jpg);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 976px) {
    display: none;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 50vw;

  @media (max-width: 976px) {
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 100%;
  text-align: center;
`;

export const Image2 = styled.div``;

export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 48px;
  display: flex;
  align-items: center;

  @media (max-width: 526px) {
    font-size: 35px;
  }
`;

export const LabelImput = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #696f79;
  width: 100%;
  padding: 14px 0;

  @media (max-width: 526px) {
    font-size: 14px;
  }
`;

export const Entry1 = styled.div`
  box-sizing: border-box;
  width: 426px;
  border: 1px solid #8692a6;
  border-radius: 6px;

  @media (max-width: 526px) {
    width: 100%;
  }
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #2c73eb;
  margin-top: 30px;
`;

export const ComponentLinkBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #8692A6;
  font-style: normal;

`;
