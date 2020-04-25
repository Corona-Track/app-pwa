import React from 'react';

import { BoxInfos, BoxMenu } from './styles';

// Importações de imagens
import heart from '../../../../assets/icons/Vector.png';
import profile from '../../../../assets/icons/icon.png';
import computer from '../../../../assets/icons/group-1.png';
import config from '../../../../assets/icons/config.png';
import logOut from '../../../../assets/icons/log-out.png';
import cross from '../../../../assets/icons/icon-cross.png';

export default function PerfilAberto() {

  
 return (
   <>
     
     <BoxInfos>

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
        
     </BoxInfos>

     <BoxMenu>

       <div className="singleMenu">
         <img src={profile} alt="imagem"/>
         <a href="/" >INFORMAÇÕES DO PERFIL</a>
       </div>
       
       <div className="singleMenu">
         <img src={heart} alt="imagem"/>
         <a href="/" >MINHA SAÚDE</a>
       </div>

       <div className="singleMenu">
         <img src={computer} alt="imagem"/>
         <a href="/" >TELEORIENTAÇÃO</a>
       </div>

       <div className="singleMenu">
         <img src={cross} alt="imagem"/>
         <a href="/" >UTILIDADE PÚBLICA</a>
       </div>

       <div className="singleMenu">
         <img src={config} alt="imagem"/>
         <a href="/" >CONFIGURAÇÕES</a>
       </div>

       <div className="singleMenu">
         <img src={logOut} alt="imagem"/>
         <a href="/" >SAIR</a>
       </div>
       
       <h2>Versão 1.0.1</h2>

     </BoxMenu>
     </>
 );
}
