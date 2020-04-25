import styled from 'styled-components';
import background from '../../assets/icons/Group-31.png'

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&display=swap');
  background-color: #828282;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: initial;
  width: 100%;
  outline: none;
  min-height: 100vh;
  margin: 0 auto;
`;
export const Icons = styled.div`
 display: flex;
 padding: 20px;
 justify-content: space-between;
 align-items: center;
 img{
  cursor: pointer;
 }
`

export const BoxPerfil = styled.header`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 .circle{
  width: 110px;
  height: 110px;
  border: 2px solid #fff;
  background: #27AE60;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50%;
  img{
    display: inline-block;
    margin:0;
  }
 }
  
 strong{
  color: white;
  margin-top: 5px;
  font-size: 21px;
 }
 img{
  margin-top: 5px;
 }
`;

