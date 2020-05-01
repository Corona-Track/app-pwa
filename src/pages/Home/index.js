import React, { useState, useEffect } from 'react';

import { Container, Icons, BoxPerfil } from './styles';

import location from '../../assets/icons/feather_map-pin.png';
import heart from '../../assets/icons/Vector.png';
import arrowTop from '../../assets/icons/Rectangle-279.png';
import arrowOut from '../../assets/icons/arrowout.png';


import PerfilAberto from './components/perfilAberto'
import PerfilFechado from './components/perfilFechado'

import { useHistory, Link } from 'react-router-dom';

import { getUser } from '../../services/firebase/User';
import Loading from '../../components/Loading';
import riskProfileTypes from '../../utils/enums/riskProfileTypes'



export default function Perfil() {

  const [enabled, setEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  

  const [user, setUser] = useState({
    name: '',
    cpf: '',
    photo: ''
  })

  const history = useHistory();


  useEffect(() => {
    getUserData()
  }, [])

  async function getUserData() {
    setIsLoading(true)

    const user = await getUser()
    const userData = user.data()
   
    setUser(userData)
    setIsLoading(false)
  }

  function handleClick() {
    if (enabled === true) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }

  function onPressPerfil(e){
    e.preventDefault() 
    history.push( '/riskProfile',{userData:user}   
    );
  }

  function onPressTeleorientation(e) {
    e.preventDefault();
    history.push('/teleorientation', { userData: user });
  }


  if (isLoading)
    return <Loading open={true} />

  const riskProfileColor = getRiskProfileColor(user.riskProfile)


  return (
    <>
      <Container>
        <Icons>
          <img src={location} alt="imagem" />
          <img src={heart} alt="imagem" />
        </Icons>

        <BoxPerfil>

          <div className="circle" onClick={onPressPerfil} style={{background:riskProfileColor}}>
            <PerfilPhoto photo={user.photo} name={user.name}/>
          </div>


          <strong>{user.name}</strong>
          <img src={enabled ? arrowTop : arrowOut} alt="arrow" onClick={handleClick} />
        </BoxPerfil>

        {enabled ? <PerfilFechado user={user} onPressPerfil={onPressPerfil} /> : <PerfilAberto user={user} onPressTeleorientation={onPressTeleorientation} onPressPerfil={onPressPerfil} />}


      </Container>
    </>
  );
}

function PerfilPhoto({photo,name}) {
  if(photo)
  return <img src={photo} alt="imagem" />

  const nameFirstLetter = name.trim()
  .charAt(0)
  .toUpperCase()
  return <span >{nameFirstLetter}</span>
   
}

function getRiskProfileColor(riskProfileId) {
  switch (riskProfileId) {
      case riskProfileTypes.GREEN: {
          return '#27AE60'
      }
      case riskProfileTypes.YELLOW: {
          return  '#FFC700'
      }

      case riskProfileTypes.RED: {         
              return '#FF0000'          
      }
      default: {
         return  '#27AE60'          
      }
  }
}
