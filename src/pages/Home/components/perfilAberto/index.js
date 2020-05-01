import React from 'react';

import { BoxInfos, BoxMenu } from './styles';
import { useDispatch } from 'react-redux';

// Importações de imagens
import heart from '../../../../assets/icons/Vector.png';
import profile from '../../../../assets/icons/icon.png';
import computer from '../../../../assets/icons/group-1.png';
import config from '../../../../assets/icons/config.png';
import logOut from '../../../../assets/icons/log-out.png';
import cross from '../../../../assets/icons/icon-cross.png';

import { signOut } from '../../../../actions/AuthActions';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

export default function PerfilAberto(props) {
  const {cpf, birthday} = props.user
  const {onPressPerfil, onPressTeleorientation} = props
  const Dispatch = useDispatch();
  const history = useHistory();
  const age = moment().diff(new Date(birthday.seconds * 1000), 'years');
 
  function setSignOut() {
    Dispatch(signOut()).then(() => {
      history.push('/login');
    });
  }
 return (
   <>
     
     <BoxInfos>
         <div className="info">
           <strong>Idade:</strong>
           <p>{age}</p>  
         </div>
         
         <div className="info">
           <strong>CPF:</strong>
           <p>{cpf}</p> 
         </div>

                
     </BoxInfos>

     <BoxMenu>

       <div className="singleMenu">
         <img src={profile} alt="imagem"/>
         <span onClick={onPressPerfil}   >INFORMAÇÕES DO PERFIL</span>
       </div>
       
       <div className="singleMenu">
         <img src={heart} alt="imagem"/>
         <span >MINHA SAÚDE</span>
       </div>

       <div className="singleMenu">
         <img src={computer} alt="imagem"/>
         <span onClick={onPressTeleorientation}>TELEORIENTAÇÃO</span>
       </div>

       <div className="singleMenu">
         <img src={cross} alt="imagem"/>
         <span >UTILIDADE PÚBLICA</span>
       </div>

       <div className="singleMenu">
         <img src={config} alt="imagem"/>
         <span >CONFIGURAÇÕES</span>
       </div>

       <div className="singleMenu" onClick={()=>setSignOut()}>
         <img src={logOut} alt="imagem"/>
         <span >SAIR</span>
       </div>
       
       <h2>Versão 1.0.1</h2>

     </BoxMenu>
     </>
 );
}
