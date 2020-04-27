import React, { useState } from 'react'
// import { Button } from '@material-ui/core';

import { Container, Content, Question,Text, CircleButton, Image, Next } from './styles';

import Button from '../../components/Button';
// import HeaderPerfil from '../../components/HeaderPerfil';
// import ProgressTracking from '../../components/ProgressTracking';
import stethoscope from '../../assets/images/stethoscope.png';
import virus from '../../assets/images/virus.png';

export default function Symptoms() {

	return (
		<Container>
			{/* <HeaderPerfil></HeaderPerfil> */}
			<Content>
				<Question>
					Minha <span>saúde:</span>.
				</Question>
				<CircleButton>
					<Image src={stethoscope}></Image>
				</CircleButton>
				<Text>reportar sintomas</Text>
				<CircleButton>
					<Image src={virus}></Image>
				</CircleButton>
				<Text>reportar testes</Text>
				<Button variant="contained" theme="third">
	          		Continuar
	        	</Button>
	        	<Next>Pular</Next>
	        	{/* <ProgressTracking amount={7} position={1}/> */}
			</Content>
		</Container>
	)
}