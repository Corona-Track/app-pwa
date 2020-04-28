import styled from 'styled-components';
import { $brandColorSecondary } from '../../styles/variables';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding: 0 20px;
	box-sizing: border-box;
`;

export const CloseDiv = styled.div`
	width: 30px;
	height: 30px;	
`;

export const ButtonClose = styled.div`
	width: 30px;
	height: 30px;
`;


export const UserButton = styled.div`
	width: 40px;
    height: 40px;
    background-color: #E0E0E0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;   
`;

export const ContainerUser = styled.div`
	display: flex;
	align-items: center;
`;

export const Name = styled.div`
	margin-left: 12px;
	color: ${$brandColorSecondary};
`;