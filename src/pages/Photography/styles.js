import styled from 'styled-components';
import { $gray900, $brandColorPrimary } from '../../styles/variables';

export const Container = styled.div`
  font-family: Prompt;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const ImagePerfil = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 4px solid white;
}`

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

export const Question = styled.div`
  color: ${$gray900};
  text-align: center;
  width: 70%;
  font-size: 16px;
  margin-top: 20px;
  spam {
    font-weight: bold;
  }
`

export const CircleButton = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border: 3px solid ${$brandColorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 40px 0 60px;
`

export const Image = styled.img`
  width: 50px;
  height: 40px;
`

export const Next = styled.div`
  color: #BDBDBD;
  font-size: 14px;
  margin-bottom: 24px;
`

export const Input = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
`

export const SelectPhoto = styled.div`
  position: absolute;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${$brandColorPrimary};
  left: calc(100% - 50px);
  bottom: 0;
`
