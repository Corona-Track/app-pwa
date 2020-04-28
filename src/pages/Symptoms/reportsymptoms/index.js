import React, { useState } from 'react'
import { Radio,RadioGroup,FormControlLabel,Paper,List,Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Container, Content, Question,Text } from '../styles';
import moment from 'moment'
// Components
import HeaderRouter from '../../../components/HeaderRouter';
import { render } from '@testing-library/react';

export default function ReportSymptomPage() {
    const history = useHistory();
    const [selectedValue, setSelectedValue] = React.useState('s');

    // const [state, setState] = React.useState({
    //     checkedA: true,
    //     checkedB: true,
    //     checkedF: true,
    //     checkedG: true,
    //   });
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // componentWillMount()
        console.log('selectedValue',selectedValue)
    };
    const [state] = React.useState({
        id: null,
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
        entity: {
            symptonsSelected: [],
            hasSymptonsList: [],
            symptonsStartDate: null,
            symptonsendDate: null,
            showSymptons: null,
            hasSymptons: null,
            hasOximeter: null,
            hasSaturation: null,
            shortBreath: null,
            shortBreathAnswer: null,
            symptonsList: [
            {
                identifier: 'Não tive sintomas',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Falta de Ar',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Tonturas',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Desmaio',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {identifier: 'Febre', check: false, check2: false, start: '', end: ''},
            {
                identifier: 'Falta de apetite',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Produção de catarro',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Confusão',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Cansaço',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {identifier: 'Tosse', check: false, check2: false, start: '', end: ''},
            {
                identifier: 'Dor de Garganta',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {identifier: 'Fadiga', check: false, check2: false, start: '', end: ''},
            {
                identifier: 'Dor no Corpo',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Dor de Cabeça',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Dor no Peito',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Tosse com sangue',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Náusea ou vômito',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Dor de barriga',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Diarréia',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            {
                identifier: 'Olhos vermelhos',
                check: false,
                check2: false,
                start: '',
                end: '',
            },
            ],
        },
        breathConditionList: [
            {identifier: 'Leve: falta de ar ao fazer algum tipo de esforço físico'},
            {
            identifier:
                'Moderada: não conseguir completar frases sem precisar respirar no meio',
            },
            {
            identifier:
                'Grave: falta de ar quando em repouso, respiração acelerada, sensação de estar se afogando',
            },
        ],
        minimumDate: new Date(1900, 1, 1),
        maximumDate: moment(moment().format('DD/MM/YYYY'), 'DD/MM/YYYY')
            .add(-13, 'years')
            .toDate(),
        showDatePicker: false,
        continueNoSymptons: false,
        showLoading: false,
    });

    function componentWillMount() {
        const {symptom} = this.context;
        let symptonsList = this.state.entity.symptonsList;
        if (symptom.symptons && symptom.symptons.length > 0) {
            let selected = symptom.symptons.map(item => {
            for (let sym of symptonsList) {
                if (item.identifier === sym.identifier) {
                sym.identifier = item.identifier;
                sym.start = item.start ? item.start.toDate() : '';
                sym.end = item.end ? item.end.toDate() : '';
                sym.check = true;
                sym.check2 = false;
                }
            }

            return {
                identifier: item.identifier,
                start: item.start ? item.start.toDate() : '',
                end: item.end ? item.end.toDate() : '',
            };
            });

            let entity = {
            ...this.state.entity,
            showSymptons: symptom.hasSymptoms,
            symptonsSelected: selected,
            symptonsList: symptonsList,
            };

            this.setState({
            entity,
            id: symptom.id,
            });
        }
    }
    
	return (
		<Container>
			<Content>
            {/* <div styles={{ height: '500px', overflowY: 'scroll' }} style={styles.wrapperDiv}> */}
			    <HeaderRouter title="ReportSymptomPage" onClick={() => history.goBack()} />
				<Question>
					Você <span>está com sintomas</span> hoje?
				</Question>
                <RadioGroup row aria-label="quiz" name="quiz" value={selectedValue} onChange={handleChange}>
                    <FormControlLabel
                        value="s"
                        control={<Radio color="primary" />}
                        label="Sim"
                        labelPlacement="left"
                    />
                    <FormControlLabel
                        value="n"
                        control={<Radio color="primary" />}
                        label="Não"
                        labelPlacement="left"
                    />
                </RadioGroup>
                <Question>
				    <span>O que</span> você está sentindo hoje?
				</Question>
                <List>
                <FormControlLabel
                    control={<Checkbox color="primary" checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Febre"
                />
                </List>
			</Content>
		</Container>
	)
}
