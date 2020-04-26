import React, { useState } from 'react'

// style
import './index.css'

// Images
import AggravationIllustration from '../../../../assets/images/aggravationIllustration.png'

// Components
import { GrDown, GrUp } from "react-icons/gr";

const aboutAggravation1 = "Ultilizamos como base os protocolos do ministerio da saude (MS) de COVID 19. Caso apresente alguma das comorbidades que nescessitam de acompnhamento em atençao especializada segundo o MS classificamos como um perfil de risco."
const referencesAggravation1 = "1. Protocolo de Manejo Cínico do Coronavírus (COVID-19) na Atenção Primária à Saúde | Versão 7"

export default function Aggravation({ risk, text }) {
    const [aboutOpen, setAboutOpen] = useState(false)

    function onPressIcon(e) {
        e.preventDefault();
        setAboutOpen(!aboutOpen)
      }

      function Icon(){
          if(aboutOpen)
          return <button onClick={onPressIcon}> <GrUp color='#828282' size={22}/> </button>

          return <button onClick={onPressIcon}> <GrDown color='#828282' size={22}/> </button>

      }


    return (
        <div className='aggravation'>
            <div className='aggravationInfo'>
                <img src={AggravationIllustration} alt="aggravation" />
                <span>Seu Risco de Agravamento aparenta ser {risk}</span>
                <p>
                    {text}
                </p>
                <Icon />            
            </div>

                <AboutAggravation aboutOpen={aboutOpen} />

        </div>
    )
}

function AboutAggravation({ aboutOpen }) {
    if (aboutOpen)
        return <div className='aboutAggravation'>
            <strong>Agravamento</strong>
            <p>{aboutAggravation1}</p>
            <p className='references'>{referencesAggravation1}</p>
        </div>

    return null
}
