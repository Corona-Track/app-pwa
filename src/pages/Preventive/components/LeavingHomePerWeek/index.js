import React, { useState } from 'react'
import './index.css'
import Button from '../../../../components/Button'
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
export default function LeavingHomePerWeek(props) {
    const { daysAWeek, setDaysAWeek, reasonToLeaveHome, setReasonToLeaveHome, onPressContinueButton } = props

    const maxDays = 7
    const minDays = 1

    const option1 = 'Trabalhar'
    const option2 = 'Comprar remédios ou alimentos'
    const option3 = 'Outros motivos'


    function onPressContinue() {
        if (reasonToLeaveHome)
            onPressContinueButton()
    }

    function onChangeDaysaWeek(daysAWeek) {
        setDaysAWeek(daysAWeek)
    }

    function onChangeRadio(e) {
        setReasonToLeaveHome(e.target.name)
    }

    const marks = () => {
        let marks = {}
        for (let index = 1; index <= maxDays; index++) {
            if (index === daysAWeek)
                marks[index] = daysAWeek
        }
        return marks
    }

    function SecondQuestion() {
        if (daysAWeek)
            return (
                <div className='secondQuestion'>
                    <p className="question"> Principal motivo quando saio de casa:</p>

                    <div className='optionsCollum'>
                        <div className="optionCollumn">
                            <input
                                type='radio'
                                name={option1}
                                key={1}
                                onChange={onChangeRadio}
                                checked={reasonToLeaveHome === option1}
                            />
                            <span className='answer'>{option1}</span>
                        </div>

                        <div className="optionCollumn">
                            <input
                                type='radio'
                                name={option2}
                                key={2}
                                onChange={onChangeRadio}
                                checked={reasonToLeaveHome === option2}
                            />
                            <span className='answer'>{option2}</span>
                        </div>


                        <div className="optionCollumn">
                            <input
                                type='radio'
                                name={option3}
                                key={3}
                                onChange={onChangeRadio}
                                checked={reasonToLeaveHome === option3}
                            />
                            <span className='answer'>{option3}</span>
                        </div>

                    </div>
                </div>
            )

            return null
    }


    return (
        <div className='preventivePage'>
            <p className="question">Quantas vezes por semana você <span>sai de casa?</span></p>

            <div>
                <span className='answer'>Número de dias da semana</span>
                <Slider
                    marks={marks()}
                    handleStyle={{ borderColor: '#0058F4' }}
                    trackStyle={{ backgroundColor: '#0058F4' }}
                    min={minDays} max={maxDays} value={daysAWeek} onChange={onChangeDaysaWeek} />
            </div>

            <SecondQuestion />





            <div className='continueButton'>
                <Button variant="contained" theme="third" onClick={onPressContinue}>
                    Continuar
            </Button>
            </div>


        </div>
    )
}
