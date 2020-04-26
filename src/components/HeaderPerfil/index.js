import React from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonText } from './styles';
import { MdClose, MdArrowBack } from "react-icons/md";
import close from "../../assets/images/close.svg";

import { $brandColorPrimary } from '../../styles/variables';

import { Container, ButtonClose, CloseDiv } from './styles'

export default function HeaderPerfil(props) {
	const history = useHistory()
  	return (
  		<Container>
			<CloseDiv onClick={() => history.goBack()}>
  				{props.back ? (<MdArrowBack size="30px" color={$brandColorPrimary} />) : null}
  			</CloseDiv>
	  		<div>
	  			<div>{props.name}</div>
	  		</div>
	  		<ButtonClose onClick={() => history.push('/login')}>
	  			<MdClose size="30px" color={$brandColorPrimary}/>
	  		</ButtonClose>
  		</Container>
  )
}
