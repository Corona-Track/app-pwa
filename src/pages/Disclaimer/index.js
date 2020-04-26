import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'
import pages from '../../assets/images/pages.png'
import sus from '../../assets/images/sus.png'
import wow from '../../assets/images/wow.png'
import hospital from '../../assets/images/hospital.png'

import { useHistory } from 'react-router-dom'


export default function Disclaimer() {

    const history = useHistory();
    
    const [selectedItem, setSelectedItem] = useState(0)

    function onCarouselChangeIndex(index){
        setSelectedItem(index)
    }

    function renderIndicator(isSelected,index,label){
        if(selectedItem===label)
        return <span className="dot" style={{backgroundColor:'#0058F4'}}></span>
       
        return <span className="dot" style={{backgroundColor:'rgba(0, 88, 244, 0.3)'}}></span>
    }
    
        return (
        <Carousel showArrows={false}
        onChange={onCarouselChangeIndex}
        selectedItem={selectedItem}
            showStatus={false} showThumbs={false} renderIndicator={renderIndicator}  >
         <Disclaimer1/>
         <Disclaimer2/>
         <Disclaimer3/>
         <div>
             <div className='disclaimer'>
                <img className='hospitalImage' src={hospital} alt='hospital'/>
                <p className='disclaimer-text'>
                Caso deseje ou precise de uma consulta médica, você pode usar nossa plataforma para se conectar com a Aliança Médica, podendo assim tirar suas dúvidas com um médico.
                <p> 
                Caso sinta algo que julgue ser uma urgência, por favor <span className='disclaimer-attetion'>
                 encaminhe-se para o posto de saúde ou pronto-socorro mais próximo.
                </span>
                </p>
                </p>
                <div className="button-next" onClick={() => history.push('/login')} >
                    Continuar
                </div>
            </div>
         </div>
         
        </Carousel>
    )
}


function Disclaimer1() {
    return <div className='disclaimer'>
        <p className='disclaimer-title'>Olá! Seja bem-vindo ao Corona Track</p>
        <p className='disclaimer-text'>
            Nosso aplicativo tem a intenção de ajudar você nessa época de pandemia de COVID-19, doença causada pelo novo coronavírus. Caso queira usá-lo, saiba que utilizaremos dados como sua geolocalização e algumas informações pessoais para estimar certos riscos seus associados ao coronavírus.
<p> <span className='disclaimer-attetion'> Contamos com sua colaboração</span> para que juntos tornemos o ambiente mais seguro a todos.</p>
        </p>
    </div>
}

function Disclaimer2() {
    return <div className='disclaimer'>
        <img className='pageImage' src={pages} alt='contract'/>
        <p className='disclaimer-text'>
        Ao concordar em compartilhar conosco seus dados, estimaremos tanto o seu risco de contágio por coronavírus quanto o seu risco de ser internado caso seja contaminado. 
        
        <p> Com esses dados, classificaremos seu perfil em Verde, Amarelo ou Vermelho 
<span className='disclaimer-attetion'> para lhe ajudar nas decisões</span> de como e quando sair de casa.</p></p>
        
    </div>
}

function Disclaimer3() {
    return <div className='disclaimer'>
        <p className='disclaimer-text'>
        Nosso aplicativo funciona com base em modelos matemáticos e não tem a intenção de substituir uma consulta médica ou de contrariar as recomendações do governo de sua região. 
       <p>
           <span className='disclaimer-attetion'>
           Esteja atento  
           </span> às recomendações do Ministério da Saúde para a sua região e as recomendações da Organização Mundial da Saúde.
       </p>       
        </p>
        <div className='imageBox'>
            <div className='susDiv'>
            <img  src={sus} alt='sus'/>
            </div>
            <div className='wowDiv'>
        <img    src={wow} alt='world health organization'/>               
            </div>
        </div>

        
    </div>
}

// function Disclaimer4() {
//     return <div className='disclaimer'>
//         <img className='hospitalImage' src={hospital} alt='hospital'/>
//         <p className='disclaimer-text'>
//         Caso deseje ou precise de uma consulta médica, você pode usar nossa plataforma para se conectar com a Aliança Médica, podendo assim tirar suas dúvidas com um médico.
//         <p> 
//         Caso sinta algo que julgue ser uma urgência, por favor <span className='disclaimer-attetion'>
//          encaminhe-se para o posto de saúde ou pronto-socorro mais próximo.
//         </span>
//         </p>
//         </p>
//         <div className="button-next" onClick={() => history.push('/login')} >
//             Continuar
//         </div>
//     </div>
// }