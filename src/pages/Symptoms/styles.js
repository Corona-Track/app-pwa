import styled from 'styled-components';
import { $gray900, $brandColorPrimary } from '../../styles/variables';

export const Container = styled.div`
  font-family: Prompt;
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export const Content = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p.description {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    margin: 40px 0 18px 0;
  }
  padding: 0 20px;
`;

export const Text = styled.div`
  color: #0058F4;
  text-align: center;
  width: 55%;
  text-transform: uppercase;
  font-size: 16px;
  spam {
    font-weight: bold;
  }
`
export const Question = styled.div`
  color: ${$gray900};
  text-align: center;
  width: 55%;
  font-size: 16px;
  margin-top: 40px;
  spam {
    font-weight: bold;
  }
`

export const CircleButton = styled.div`
  width: 220px;
  height: 220px;
  border: 3px solid ${$brandColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 40px 0 20px;
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
`

export const Next = styled.div`
  color: #BDBDBD;
  font-size: 14px;
  margin-bottom: 24px;
`