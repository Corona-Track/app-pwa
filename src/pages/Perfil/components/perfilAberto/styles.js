import styled from 'styled-components';

export const BoxInfos = styled.div`
  .info{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    strong{
      margin-right: 5px;
      color: #fff;
      font-size: 18px;
    }

    p{
      font-size: 18px;
      color: #fff;
      margin: 0;
    }
  }
`;

export const BoxMenu = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  
  .singleMenu:nth-child(1){
    border-top: 3px solid rgba(255, 255, 255, 0.3);
  }
  .singleMenu{
    border-bottom: 3px solid rgba(255, 255, 255, 0.3);
    margin-top: 10px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    
    a{
      font-family: 'Dosis', sans-serif;
      color: #fff;
      margin-left: 10px;
      font-weight: bold;
      text-decoration: none;
    }
  }
  h2{
    font-size: 13px;
    font-weight: normal;
    color: #fff;
  }
  
`;

