import React, { useState, useEffect } from 'react'

// style
import './index.css'

// enums 
import contagionRiskTypes from '../../utils/enums/contagionRiskTypes'
import aggravationRiskTypes from '../../utils/enums/aggravationRiskTypes'
import riskProfileTypes from '../../utils/enums/riskProfileTypes'



// Components
import Contagion from './components/Contagion'
import Aggravation from './components/Aggravation'
import Button from '../../components/Button'
import HeaderPerfil from '../../components/HeaderPerfil'




export default function RiskProfile(props) {
    const user =props.location.state.userData
    const [riskProfileId, setRiskProfileId] = useState(1)
    const [contagionRiskId, setContagionRiskId] = useState(1)
    const [aggravationRiskId, setAggravationRiskId] = useState(1)

    const riskProfile = getRiskProfile(riskProfileId)
    const contagionRisk = getContagionRisk(contagionRiskId)
    const aggravationRisk = getAggravationRisk(aggravationRiskId)

    useEffect(() => {
        setRisks()
    }, [])


    function setRisks() {
        const { aggravationRisk, contagionRisk, riskProfile } = user

        setRiskProfileId(riskProfile)
        setAggravationRiskId(aggravationRisk)
        setContagionRiskId(contagionRisk)
    }

    function Title() {
        return (<div className='title'>
            <span>Seu Perfil é</span>
            <span className='risk' style={{ color: riskProfile.color }}>{riskProfile.label}</span>
        </div>)
    }

    function onPressBackToStart(){
        
        props.history.push('/home')
    }

    return (
        <>
          <HeaderPerfil name={user.name} back={() => props.history.goBack()}/>
            <div>
                <Title />
                <Contagion {...contagionRisk} />
                <Aggravation {...aggravationRisk} />
            </div>
            <footer>
                <Button theme="secondary" 
          variant="contained"
          >
              AGENDAR TELEORIENTAÇÃO
          </Button>
          <Button theme="primary" 
          variant="contained"
          onClick={() => onPressBackToStart()}
          >
              VOLTAR PARA O INICIO
          </Button>
            </footer>

        </>
    )
}

function getRiskProfile(riskProfileId) {
    switch (riskProfileId) {
        case riskProfileTypes.GREEN: {
            return {
                label: 'VERDE',
                color: '#27AE60',
            }
        }
        case riskProfileTypes.YELLOW: {
            return {
                label: 'AMARELO',
                color: '#FFC700',
            }
        }

        case riskProfileTypes.RED: {
            return {
                label: 'VERMELHO',
                color: '#FF0000'
            }
        }
        default: {
            return {
                label: 'VERDE',
                color: '#27AE60',
            }
        }
    }
}

function getContagionRisk(contagionRiskId) {

    switch (contagionRiskId) {
        case contagionRiskTypes.LOW.id: {
            return contagionRiskTypes.LOW
        }

        case contagionRiskTypes.MEDIUM.id: {
            return contagionRiskTypes.MEDIUM
        }

        case contagionRiskTypes.HIGH.id: {
            return contagionRiskTypes.HIGH
        }
        default: {
            return contagionRiskTypes.LOW
        }
    }

}

function getAggravationRisk(aggravationRiskId) {

    switch (aggravationRiskId) {
        case aggravationRiskTypes.LOW.id: {
            return aggravationRiskTypes.LOW
        }
        case aggravationRiskTypes.HIGH.id: {
            return aggravationRiskTypes.HIGH
        }
        default: {
            return aggravationRiskTypes.LOW
        }
    }

}
