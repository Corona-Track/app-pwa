import styled from 'styled-components';

export const BoxPefilFechado = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  
  .perfil{
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;

      .info{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      
      strong{
        margin-right: 5px;
        color: #333333;
        font-size: 18px;
      }

      p{
        font-size: 18px;
        color: #333333;
        margin: 0;
      }
    
    }

    img{
        margin: 20px 0;
    }

    strong{
    }

    button{
      padding: 15px 20px;
      font-family: 'Dosis', sans-serif;
      border: 0;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      border-radius: 25px;
      outline: none;
    }
    
  }

  
`;