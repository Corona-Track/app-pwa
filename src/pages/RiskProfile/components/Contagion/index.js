import React, { useState } from 'react'

// style
import './index.css'

// Images
import ContagionIllustration from '../../../../assets/images/contagionIllustration.png'

// Components
import { GrDown, GrUp } from "react-icons/gr";

const aboutContagion1 = "Nosso algoritmo baseia-se nas informações reportadas pelo próprio usuário no aplicativo e seus sintomas sende estes os sintomas caracteristicos da doenca segundo ministerio da saude e sua prevalencia segundo as fontes ultilizadas por eles. Assim como práticas de higiene, bem como no seu autorrelato sobre o teste de COVID-19 (caso tenha feito um). Em futuras versões pretendemos utilizar dados de bluetooth e geolocalização para refinar os resultados."
const aboutContagion2 = "Dadas as limitações do nosso algoritmo e o atual momento que vivemos, você deve seguir as recomendações gerais do Ministério da Saúde para evitar a disseminação do vírus."
const referencesContagion1 = "1. DIRETRIZES PARA DIAGNÓSTICO E TRATAMENTO DA COVID-19 | Versão 1"
const referencesContagion2 = "2. Guan W, Ni Z, Hu Y, Liang W, Ou C, He J, et al. Clinical Characteristics of Coronavirus Disease 2019 in China. N Engl J Med. 2020;1–13."

export default function Contagion({ risk, text }) {
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
        <div className='contagion'>
            <div className='contagionInfo'>
                <img src={ContagionIllustration} alt="contagion" />
                <span>Seu Risco de Contágio aparenta ser {risk}</span>
                <p>
                    {text}
                </p>
                <Icon />            
            </div>

                <AboutContagion aboutOpen={aboutOpen} />

        </div>
    )
}

function AboutContagion({ aboutOpen }) {
    if (aboutOpen)
        return <div className='aboutContagion'>
            <strong>Contágio</strong>
            <p>{aboutContagion1}</p>
            <p>{aboutContagion2}</p>
            <p className='references'>{referencesContagion1}</p>
            <p className='references'>{referencesContagion2}</p>

        </div>

    return null
}
