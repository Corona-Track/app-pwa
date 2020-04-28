import React from 'react';
import { useHistory } from 'react-router-dom';

import { MdClose, MdArrowBack } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import close from "../../assets/images/close.svg";

import { $brandColorPrimary } from '../../styles/variables';

import { Container, ButtonClose, CloseDiv, UserButton, ContainerUser, Name, UserDiv  } from './styles'


export default function HeaderPerfil(props) {
	const history = useHistory()

	function Photo(){
		if(props.photo)
		return <img src={props.photo} alt="userPhoto" className="userPhoto" />

		return null
	}
  	return (
  		<Container>
			<CloseDiv onClick={() => history.goBack()}>
  				{props.back ? (<MdArrowBack size="30px" color={$brandColorPrimary} />) : null}
  			</CloseDiv>
  			{props.user ? (
  				<ContainerUser>
		  			<UserButton>
		  				<FaUserAlt color={'rgba(0, 88, 244, 0.3)'}/>
		  			</UserButton>
		  			<Name>{props.name}</Name>
	  			</ContainerUser>
  				):(
  				<div>
	  				<div>{props.name}</div>
	  			</div>
  				)}
	  		<ButtonClose onClick={() => history.push('/login')}>
	  			<MdClose size="30px" color={$brandColorPrimary}/>
	  		</ButtonClose>
  		</Container>
  )
}

