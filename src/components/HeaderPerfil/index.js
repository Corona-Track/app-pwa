import React from 'react';
import { useHistory } from 'react-router-dom';

import { MdClose, MdArrowBack } from "react-icons/md";

import { $brandColorPrimary } from '../../styles/variables';

import { Container, ButtonClose, CloseDiv,UserDiv } from './styles'

export default function HeaderPerfil(props) {
	const history = useHistory()

	function Photo(){
		if(props.photo)
		return <img src={props.photo} alt="userPhoto" className="userPhoto" />

		return null
	}

	function onClickBack(){
		if(props.onPressBack){
		props.onPressBack()
		}
		else{
			history.goBack()
		}
	}
  	return (
  		<Container>
			<CloseDiv onClick={() => onClickBack()}>
  				{props.back||props.onPressBack? (<MdArrowBack size="30px" color={$brandColorPrimary} />) : null}
  			</CloseDiv>
	  		<UserDiv>
				<Photo />				  
	  			<span>{props.name}</span>
			</UserDiv>
	  		<ButtonClose onClick={() => history.push('/login')}>
	  			<MdClose size="30px" color={$brandColorPrimary}/>
	  		</ButtonClose>
  		</Container>
  )
}
