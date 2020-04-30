import React, { useState } from 'react'
import './index.css'
import Button from '../../../../components/Button'
import { Checkbox } from '@material-ui/core';



export default function LeavingHomePerWeek(props) {
    const { keepDistance, setKeepDistance, reasonToNotKeepDistanceSelected, setReasonToNotKeepDistanceSelected, onPressContinueButton } = props

    const option1 = 'Mantenho sempre 2 metros de distância de outras pessoas'
    const option2 = 'Nem sempre mantenho distância porque:'



    const reasonsToNotKeepDistanceList = [
        { identifier: 'Esqueço' },
        { identifier: 'Por causa do meu trabalho' },
        { identifier: 'Por causa do transporte público (trens e ônibus)' },
    ]

    function onClickCheckBox(event) {

        if (event.target.checked) {
            if (reasonToNotKeepDistanceSelected.length > 0){
                setReasonToNotKeepDistanceSelected([...reasonToNotKeepDistanceSelected, event.target.name])
            }
             else {

                setReasonToNotKeepDistanceSelected([event.target.name])
            }
        }
        if (!event.target.checked) {
            let filtered = reasonToNotKeepDistanceSelected.filter(function (value, index, arr) { return value != event.target.name });
            setReasonToNotKeepDistanceSelected([filtered])
        }

    }

    function onPressContinue() {
        if (keepDistance)
            onPressContinueButton()
        alert(reasonToNotKeepDistanceSelected)

    }

    function onChangeRadio(e) {
        setKeepDistance(e.target.name)
    }

    return (
        <div className='preventivePage'>
            <p className="question">Sobre o <span>distanciamento social.</span> Ao sair de casa: </p>



            <div className='optionsCollum'>
                <div className="optionCollumn">
                    <input
                        type='radio'
                        name={option1}
                        key={1}
                        onChange={onChangeRadio}
                        checked={keepDistance === option1}
                    />
                    <span className='answer'>{option1}</span>
                </div>

                <div className="optionCollumn">
                    <input
                        type='radio'
                        name={option2}
                        key={2}
                        onChange={onChangeRadio}
                        checked={keepDistance === option2}
                    />
                    <span className='answer'>{option2}</span>
                </div>
            </div>

            <div className='optionsCollum'>
                {reasonsToNotKeepDistanceList.map(item=>{

                    return(
                        <div style={{ flexDirection: 'row' }}>
                        <Checkbox
                            style={{ color: '#0058F4' }}
                            onChange={onClickCheckBox}
                            name={item.identifier}
                        />
                        <span className='answer'>{item.identifier}</span>
                    </div>
                    )
                })}
               
              

            </div>





            <div className='continueButton'>
                <Button variant="contained" theme="third" onClick={onPressContinue}>
                    Continuar
            </Button>
            </div>


        </div>
    )
}
