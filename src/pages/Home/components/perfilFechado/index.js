import React from 'react';

import { BoxPefilFechado } from './styles';

import qrcode from '../../../../assets/icons/qrcode.png';
import moment from 'moment';

import riskProfileTypes from '../../../../utils/enums/riskProfileTypes'


export default function PerfilFechado(props) {
  const {cpf, riskProfile,birthday} = props.user
  const {onPressPerfil} = props

  const age = moment().diff(new Date(birthday.seconds * 1000), 'years');

  const riskProfileInfo = getRiskProfile(riskProfile)

  return(
   <BoxPefilFechado>

            <div className="perfil">

              <div className="info">
                <strong>Idade:</strong>
                <p>{age} anos</p>  
              </div>
              
              <div className="info">
                <strong>CPF:</strong>
                <p>{cpf}</p> 
              </div>          

              <img src={qrcode} alt="imagem"/>
              <p>Você é perfil <strong style={{color:riskProfileInfo.color}}>{riskProfileInfo.label}</strong></p>
              <button onClick={onPressPerfil} style={{backgroundColor:riskProfileInfo.color}}>ENTENDA MELHOR O SEU PERFIL</button>

            </div>
            
      </BoxPefilFechado>
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

