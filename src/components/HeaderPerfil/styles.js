import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	padding: 0 20px;
	box-sizing: border-box;
	color:#0fff99
`
export const UserDiv = styled.div`
display: flex;  
align-items: center;
justify-content: space-between; 
max-width: 60vw;	

	img {
	width: 40px;
  height: 40px;
  border-radius: 50%;
	}

	span {
		margin-left: 10px;
  		text-overflow: ellipsis;
		overflow: hidden;
		font-weight: bold;
  		font-size: 15px;
  		line-height: 25px;
		text-align: center;
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
		word-wrap: break-word;
	}

	
`

export const CloseDiv = styled.div`
	width: 30px;
	height: 30px;	
`

export const ButtonClose = styled.div`
	width: 30px;
	height: 30px;
`;
