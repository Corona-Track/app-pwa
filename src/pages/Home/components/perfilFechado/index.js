import React from 'react';

import { BoxPefilFechado } from './styles';

import qrcode from '../../../../assets/icons/qrcode.png';

export default function PerfilFechado() {

  return(
   <BoxPefilFechado>

            <div className="perfil">

              <div className="info">
                <strong>Idade:</strong>
                <p>37 anos</p>  
              </div>
              
              <div className="info">
                <strong>CPF:</strong>
                <p>987.654.321-00</p> 
              </div>

              <div className="info">
                <strong>RG:</strong>
                <p>01.234.567-89</p>
              </div>

              <img src={qrcode} alt="imagem"/>
              <p>Você é perfil <strong>VERDE</strong></p>
              <button>ENTENDA MELHOR O SEU PERFIL</button>

            </div>
            
      </BoxPefilFechado>
  )

}

