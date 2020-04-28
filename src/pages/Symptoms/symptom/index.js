import React, { useState } from 'react'
// import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Container, Content, Question,Text, CircleButton, Image, Next } from '../styles';

// Components
import Button from '../../../components/Button';
import HeaderRouter from '../../../components/HeaderRouter';
import stethoscope from '../../../assets/images/stethoscope.png';
import virus from '../../../assets/images/virus.png';
import Touchable from 'rc-touchable';

export default function SymptomPage() {
	const history = useHistory();
	return (
		<Container>
			<Content>
			<HeaderRouter title="SymptomPage" onClick={() => history.goBack()} />
				<Question>
					Minha <span>saúde:</span>.
				</Question>
				<Touchable onPress={()=>history.push('/report')} activeStyle={{ opacity: 0.5 }}>
					<CircleButton>
						<Image src={stethoscope}></Image>
					</CircleButton>
				</Touchable>
				<Text>reportar sintomas</Text>
				<CircleButton>
					<Image src={virus}></Image>
				</CircleButton>
				<Text>reportar testes</Text>
			</Content>
		</Container>
	)
}