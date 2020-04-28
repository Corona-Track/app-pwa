import styled from 'styled-components';
import { $colorDanger, $gray900 } from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  font-family: 'Prompt';
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 0 24px;
  box-sizing: border-box;
  padding-bottom: 40px;
  p.description {
    text-align: center;
    width: 70%;
    line-height: 25px;
    font-size: 16px;
    color: ${$gray900};
    margin: 40px 0 40px 0;
  }
  spam {
    font-weight: bold;
  }
`;

export const Error = styled.p`
  color: ${$colorDanger};
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Line = styled.div`
  color: red;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 16px 0 32px 0;
  hr {
    width: 100%;
    height: 2px;
    background: #e0e0e0;
  }
`;
