import React, { useState } from 'react'
// import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Container, Content, Question,Text, CircleButton, Image, Next } from '../styles';

// Components
import Button from '../../../components/Button';
import moment from 'moment';
import HeaderRouter from '../../../components/HeaderRouter';
import stethoscope from '../../../assets/images/stethoscope.png';
import virus from '../../../assets/images/virus.png';
import Touchable from 'rc-touchable';
// import { SymptomConsumer } from '../../../store/symptom';
// import { getUser } from '../../../firebase/User';

export default function SymptomPage() {
	const history = useHistory();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	  
	// useEffect(() => {
	// 	setLoading(true);
	// 	getUser().then(doc => {
	// 		let currentUser = doc.data();
	// 		setUser(currentUser);
	// 		setLoading(false);
	// 	});
	// }, []);
	// const validation = async (context, contextSymptom, type, route) => {
	// 	setLoading(true);
	// 	try {
	// 	  context.updateUser(user);
	// 	  contextSymptom.updateSymptom({ type });
	// 	  const result = await GetSymptomByUser();
	// 	  if (result && result.length > 0) {
	// 		if (result.length > 1) {
	// 		  if (
	// 			((moment(result[0].created_at.toDate()).isSame(moment(), 'day') &&
	// 			  result[0].type === 'test') ||
	// 			  (moment(result[1].created_at.toDate()).isSame(moment(), 'day') &&
	// 				result[1].type === 'test')) &&
	// 			type === 'test'
	// 		  ) {
	// 			Alert.alert(
	// 			  'Aviso',
	// 			  'Você já possui um registro hoje',
	// 			  [{ text: 'OK', onPress: () => setLoading(false) }],
	// 			  { cancelable: false },
	// 			);
	// 			return;
	// 		  }
	
	// 		  if (result[0].type !== 'test') {
	// 			if (moment(result[0].created_at.toDate()).isSame(moment(), 'day'))
	// 			  contextSymptom.updateSymptom({ ...result[0] });
	// 		  } else {
	// 			if (moment(result[1].created_at.toDate()).isSame(moment(), 'day'))
	// 			  contextSymptom.updateSymptom({ ...result[1] });
	// 		  }
	// 		} else if (result.length === 1) {
	// 		  if (
	// 			moment(result[0].created_at.toDate()).isSame(moment(), 'day') &&
	// 			result[0].type === 'test' &&
	// 			type === 'test'
	// 		  ) {
	// 			Alert.alert(
	// 			  'Aviso',
	// 			  'Você já possui um registro hoje',
	// 			  [{ text: 'OK', onPress: () => setLoading(false) }],
	// 			  { cancelable: false },
	// 			);
	// 			return;
	// 		  }
	// 		}
	// 	  }
	// 	  setLoading(false);
	// 	  props.navigation.push(route);
	// 	} catch (error) {
	// 	  Alert.alert(
	// 		'Aviso',
	// 		'Ocorreu um erro, tente novamente',
	// 		[{ text: 'OK', onPress: () => setLoading(false) }],
	// 		{ cancelable: false },
	// 	  );
	// 	}
	//   };
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