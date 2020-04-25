import React, { useState }  from 'react';

import { Container,  Icons, BoxPerfil } from './styles';

import location from '../../assets/icons/feather_map-pin.png';
import heart from '../../assets/icons/Vector.png';
import arrowTop from '../../assets/icons/Rectangle-279.png';
import arrowOut from '../../assets/icons/arrowout.png';
import photo from '../../assets/icons/Rectangle-21.png';

import PerfilAberto  from './components/perfilAberto'
import PerfilFechado  from './components/perfilFechado'



export default function Perfil() {

  const [ enabled, setEnabled ] = useState(false);

  function handleClick(){

    if ( enabled === true ){
      setEnabled(false);
    }else{
      setEnabled(true);
    }
  }

   

  return (
    <>
    <Container>
      <Icons>
        <img src={location} alt="imagem"/>
        <img src={heart} alt="imagem" />
      </Icons>

      <BoxPerfil>

        <div className="circle">
          <img src={photo} alt="imagem"/> 
        </div>
        
        
        <strong>Maria José da Silva</strong>
        <img src={enabled ? arrowTop : arrowOut} alt="arrow" onClick={handleClick} />
      </BoxPerfil>

      {enabled ? <PerfilFechado /> : <PerfilAberto/>}
      

    </Container>
    </>
  );
}
