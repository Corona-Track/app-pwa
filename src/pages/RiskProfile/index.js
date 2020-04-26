import React, { useState, useEffect } from 'react'

// Services
import { getUser } from '../../services/firebase/User';
import { SignIn } from '../../services/firebase/Auth';

// style
import './index.css'

// enums 
import contagionRiskTypes from '../../utils/enums/contagionRiskTypes'
import aggravationRiskTypes from '../../utils/enums/aggravationRiskTypes'
import riskProfileTypes from '../../utils/enums/riskProfileTypes'



// Components
import Header from '../../components/PageHeader';
import Contagion from './components/Contagion'
import Aggravation from './components/Aggravation'



export default function RiskProfile() {


    const [riskProfileId, setRiskProfileId] = useState(1)
    const [contagionRiskId, setContagionRiskId] = useState(1)
    const [aggravationRiskId, setAggravationRiskId] = useState(1)

    const riskProfile = getRiskProfile(riskProfileId)
    const contagionRisk = getContagionRisk(contagionRiskId)
    const aggravationRisk = getAggravationRisk(aggravationRiskId)

    useEffect(() => {

        getUserData()
    }, [])

    async function getUserData() {
        // TODO, após fazer a tela de login, retirar signIn daqui
        const email = 'Teste3@hotmail.com.br'
        const pass = '123456'
        await SignIn(email, pass)
        const user = await getUser()
        const userData = user.data()
        setRisks(userData)
    }
    function setRisks(userData) {
        const { aggravationRisk, contagionRisk, riskProfile } = userData

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


    return (
        <div>
            <Header />
            <body>
                <Title/>
                <Contagion {...contagionRisk} />
                <Aggravation {...aggravationRisk} />
            </body>

        </div>
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
