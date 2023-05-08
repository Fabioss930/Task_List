 import styled from "styled-components";



 export const Page = styled.div`

 position: absolute;
 width: 773px;
 height: 713px;
 left: 0px;
 top: 0px;
 
 background: linear-gradient(0deg, #1A202E, #1A202E), url(london.jpg);
 `;
 

 export const Image = styled.div`
 position: absolute;
 width: 464px;
 height: 349px;
 left: 154px;
 top: 160px;
 
 
 `;

 export const Image2 = styled.div`
 position: absolute;
 width: 200px;
 height: 200px;
 left: 1000px;
 top: 74px; 
 
 `;

 export const Container = styled.div`

 padding-left: 60vw;
 padding-right: 0vw;
 padding-top: 55vh;
 padding-bottom: 9vh;
 justify-content: center;
 flex-direction: column;
 gap: 10px;
 width: 1300px;
 height: 100vh;
 `;


 export const Content = styled.div`
 
 gap: 15px;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 width: 100%;
 box-shadow: 0 1px 2px #0003;
 background-color: white;
 max-width: 350px;
 padding: 20px;
 border-radius: 5px;

 `;

 export const Label = styled.label`

  position: absolute;
  width: 300px;
  height: 330px;
  left: 950px;
  top: 180px;
  font-size: 40px;
  font-weight: 600;
  color: #000000;;
  display: flex;
  align-items: center;
 
 
 `;

 export const LabelSignup = styled.label`

 font-size: 16px;
 color: #676767;
 
 `;

 export const LabelError = styled.label`
 
 font-size: 14px;
 color: red;
 
 `;

export const Strong = styled.strong`

cursor: pointer;

a {
  text-decoration: none;
  color: #676767;
}

`;

