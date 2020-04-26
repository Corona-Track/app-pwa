import React, { useState, useEffect } from 'react';

import { Container, Content, Question, CircleButton, Image, Next } from './styles';

import Button from '../../components/Button';
import HeaderPerfil from '../../components/HeaderPerfil';
import ProgressTracking from '../../components/ProgressTracking';
import camera from '../../assets/images/camera.png';


export default function Photography() {
	return (
		<Container>
			<HeaderPerfil></HeaderPerfil>
			<Content>
				<Question>
					Para iniciar seu cadastro, é necessário ter uma <span>foto de perfil</span>.
				</Question>
				<CircleButton>
					<Image src={camera}></Image>
				</CircleButton>
				<Button variant="contained" theme="third">
	          		Continuar
	        	</Button>
	        	<Next>Pular</Next>
	        	<ProgressTracking amount={7} position={1}/>
			</Content>
		</Container>
	)
}