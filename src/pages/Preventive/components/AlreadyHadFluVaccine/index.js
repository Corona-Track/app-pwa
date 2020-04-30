import React, { useState } from 'react'
import './index.css'
import Button from '../../../../components/Button'

export default function AlreadyHadFlucVaccine(props) {
    const { hadFluVaccine, setHadFluVaccine, onPressContinueButton } = props

    const option1 = 'SIM'
    const option2 = 'Ainda NÃO'

    function onPressContinue(){
        if(hadFluVaccine)
        onPressContinueButton()
    }


    function onChangeRadio(e) {
        setHadFluVaccine(e.target.name)
    }
    return (
        <div className='preventivePage'>
            <p className="question">Você já tomou a <span>vacina da gripe </span>
                de 2020?</p>

            <div className='options'>
                <div className="option">
                    <input
                        className='w3-radio'
                        type='radio'
                        name={option1}
                        key={1}
                        onChange={onChangeRadio}
                        checked={hadFluVaccine === option1}
                    />
                    <span className='answer'>{option1}</span>
                </div>
                <div className="option">
                    <input
                        type='radio'
                        name={option2}
                        key={1}
                        onChange={onChangeRadio}
                        checked={hadFluVaccine === option2}
                    />
                    <span className='answer'>{option2}</span>
                </div>
            </div>


            <div className='continueButton'>
                <Button variant="contained" theme="third" onClick={onPressContinue}>
                    Continuar
            </Button>
            </div>


        </div>
    )
}
