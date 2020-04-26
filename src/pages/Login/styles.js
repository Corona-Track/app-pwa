import styled from 'styled-components';
import { $colorDanger, $gray700 } from '../../styles/variables';

export const Container = styled.div`
  	width: 100%;
 	height: 100vh;
  	text-align: center;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	padding: 40px 0;
`;

export const Image = styled.img`
	width: 200px;
	height: 100px;
	margin-top: 50px;
	margin-bottom: 30px;
`

export const Content = styled.div`
  padding: 0 25px;
`;

export const Error = styled.p`
  color: ${$colorDanger};
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Line = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 16px 0 32px 0;
  hr {
    width: 100%;
    height: 2px;
    background: #e0e0e0;
  }
  p {
    font-weight: normal;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: #E0E0E0;
    margin: 0 10px;
    text-transform: uppercase;
  }
`;

export const Term = styled.div`
  font-size: 14px;
  color: ${$gray700};
  padding-bottom: 40px;
`
