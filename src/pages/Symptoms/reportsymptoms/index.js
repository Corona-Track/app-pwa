import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Radio,RadioGroup,FormControlLabel,List,Checkbox,Hidden,FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useHistory } from 'react-router-dom';
import { Container, Content, Question,Text } from '../styles';
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker,DateRange } from 'react-date-range';
import moment from 'moment'
// Components
// import CustomHiddenView from '../../../components/customhiddenview';
import HeaderRouter from '../../../components/HeaderRouter';
import { render } from '@testing-library/react';
import Button from '../../../components/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
    },
    paper: {
      width: 200,
      height: 230,
      overflow: 'auto',
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  }));

export default function ReportSymptomPage() {
    const history = useHistory();
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(false)
    const [state, setState] = useState({
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
    
 

    const IntroText = () => (
        <Question>
            Você <span>está com sintomas</span> hoje?
        </Question>
      );
    const HaveSymptoms = () => (
    <Question>
        Você teve <span>algum destes</span>?
        <span>sintomas</span> nos últimos 14 dias?
    </Question>
    );
    const WhatFelling = () => (
        <Question>
            <span>O que</span> você está sentindo hoje?
        </Question>
      );
    const YesORNoItem = ({
        onPressCheckbox
        }) =>(
        <RadioGroup row aria-label="quiz" name="quiz" value={selectedValue} onChange={onPressCheckbox}>
            <FormControlLabel
                value = 's'
                control={<Radio color="primary" />}
                label="Sim"
                labelPlacement="left"
            />
            <FormControlLabel
                value = 'n'
                control={<Radio color="primary" />}
                label="Não"
                labelPlacement="left"
            />
        </RadioGroup>
    );
    const numbers = {teste:[1, 2, 3, 4, 5]
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const CheckboxItemWithExpand = (props) =>(
        <div>
        {props.symptonsList.map((symptons,idx) =>{
            const selectionRange = {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
              }
            if (
                symptons.identifier === 'Não tive sintomas' &&
                props.showSymptons === true
            ) {
                return null;
            }
            return (
            <Grid container >
                <Grid item  xs={10}>
                <ListItem 
                    key={idx} 
                    role="listitem" 
                    // button 
                    onClick={
                        symptons.identifier === 'Não tive sintomas'
                        ? onClickNoneOfOptions(symptons)
                        : onClickCheck(symptons, 'box')
                    }>
                    <ListItemIcon>
                        <Checkbox
                            color="primary"
                            checked={symptons.check}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': idx }}
                        />
                    </ListItemIcon>
                <ListItemText id={idx} primary={symptons.identifier} />
              </ListItem>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                    // className={classes.center} 
                    size="medium" 
                    onClick={ 
                        symptons.identifier === 'Não tive sintomas'
                        ?onClickNoneOfOptions(symptons)
                        :onClickCheck(symptons, 'arrow')
                    }>
                    {symptons.check2?(<KeyboardArrowUpIcon fontSize="inherit" />):(<KeyboardArrowDownIcon fontSize="inherit" />)}
                    
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                {symptons.check2 && ( 
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setStateDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={stateDate}
                    />
                )}
               </Grid>
               </Grid>
             );
        })}
        </div>
    );
    
    const [stateDate, setStateDate] = useState([
        {
            startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    
    const onPressCheckbox = event => {
        let {entity} = state;
        entity.showSymptons = event.target.value==='s'?true:false
        setState(prevState =>({...prevState,entity}));
        setSelectedValue(event.target.value)
        if (!entity.showSymptons) {
            setState(prevState =>({...prevState,continueNoSymptons:true}));
        } else {
            setState(prevState =>({...prevState,continueNoSymptons:false}));
        }
        console.log('onPressCheckbox',JSON.stringify(state))

    };

    const checkBreath = () => {
        let {entity} = state;
        let shortBreathPosition = entity.symptonsSelected.findIndex(
          selected => selected === 'Falta de Ar',
        );
        let shortBreathPosition2 = entity.hasSymptonsList.findIndex(
          selected => selected === 'Falta de Ar',
        );
        if (shortBreathPosition > -1 || shortBreathPosition2 > -1) {
          entity.shortBreath = true;
        } else {
          entity.shortBreath = false;
        }
        setState(prevState =>({...prevState,entity}));
      };

    const onClickCheck = (identifier,kind) => ()=> {
        let {entity} = state;
        // console.log("sssssssssssssssssssssss",identifier,kind)
        let noneOfOptionsPosition = entity.symptonsSelected.findIndex(
          selected => selected.identifier === 'Não tive sintomas',
        );
        if (noneOfOptionsPosition > -1) {
          entity.symptonsSelected = [];
        }
        entity.symptonsList.map(item => {
          if (item.identifier === 'Não tive sintomas') {
            item.identifier = item.identifier;
            item.start = '';
            item.end = '';
            item.check = false;
            item.check2 = false;
          }
          return item;
        });
    
        let currentSymptonsPosition = entity.symptonsSelected.findIndex(
          selected => selected.identifier === identifier.identifier,
        );
        if (currentSymptonsPosition === -1) {
          entity.symptonsSelected.push(identifier);
          if (!identifier.check) {
            identifier.check = true;
          }
        //   identifier.check2 = true;
          checkBreath();
          setState(prevState =>({...prevState,entity}));
          return;
        }
    
        if (kind === 'box') {
          identifier.check = false;
          identifier.check2 = false;
          identifier.start = '';
          identifier.end = '';
          entity.hasSymptons = false;
          entity.hasOximeter = false;
          entity.hasSaturation = false;
          entity.symptonsSelected.splice(currentSymptonsPosition, 1);
        } else {
          identifier.check = true;
          identifier.check2 = !identifier.check2;
          entity.hasSymptons = false;
          entity.hasOximeter = false;
          entity.hasSaturation = false;
        }
    
        setState(prevState =>({...prevState,entity}));
      };
    
      const onClickNoneOfOptions = identifier => {
        let {entity} = state;
        if (!identifier.check) {
          entity.symptonsList.map(item => {
            if (item.identifier !== 'Não tive sintomas') {
              item.identifier = item.identifier;
              item.start = '';
              item.end = '';
              item.check = false;
              item.check2 = false;
            } else {
              item.identifier = item.identifier;
              item.start = '';
              item.end = '';
              item.check = true;
              item.check2 = false;
            }
            return item;
          });
          entity.symptonsSelected = [];
          entity.symptonsSelected.push(identifier);
          entity.hasSymptons = false;
          entity.hasOximeter = false;
          entity.hasSaturation = false;
          checkBreath();
          setState(prevState =>({...prevState,entity}));
        } else {
          entity.symptonsSelected = [];
          entity.symptonsList.map(item => {
            if (item.identifier === 'Não tive sintomas') {
              item.identifier = item.identifier;
              item.start = '';
              item.end = '';
              item.check = false;
              item.check2 = false;
            }
            return item;
          });
          setState(prevState =>({...prevState,entity}));
        }
        return;
    };

    let {entity} = state;
	return (
		<Container>
			<Content>
            {/* <div styles={{ height: '500px', overflowY: 'scroll' }} style={styles.wrapperDiv}> */}
			    <HeaderRouter title="ReportSymptomPage" onClick={() => history.goBack()} />
				<IntroText/>
                {/* <p>userInfo: {JSON.stringify(state)}</p> */}
                <YesORNoItem
                    onPressCheckbox = {onPressCheckbox}
                />
                {entity.showSymptons ? (<WhatFelling/>):(entity.showSymptons === false && <HaveSymptoms />)}
                {entity.showSymptons ? (
                    <Hidden >
                        {CheckboxItemWithExpand(entity)}
                        <Button variant="contained" theme="third">
	          		        Continuar
	        	        </Button>
                        {/* <CheckboxItemWithExpand items={entity.symptonsList}/> */}
                    </Hidden>
                ) : (
                    <Hidden mdDown>
                        {/* <NumberList props = {entity}/> */}
                        <ul></ul>
                    </Hidden>
                )}
                
			</Content>
		</Container>
	)
}
