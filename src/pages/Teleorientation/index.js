import React from 'react';
import Button from '../../components/Button';

import HeaderPerfil from '../../components/HeaderPerfil';

import TeleorientationImage from '../../assets/images/teleorientation-image.png';
import Register from '../../assets/images/register.png';
import Calendar from '../../assets/images/calendar.png';
import Medicine from '../../assets/images/medicine.png';
import Contact from '../../assets/images/contact.png';
import History from '../../assets/images/history.png';


// style
import './index.css'

export default function Teleorientation(props) {
  const user = props.location.state.userData;

  function onPressBackToStart() {
    props.history.push('/home');
  }

  return (
    <>
      <HeaderPerfil name={user.name} back={() => props.history.goBack()} />

      <div className="container">
        <h2 className="title-header">Teleorientação</h2>

        <img className="teleorientation-image" src={TeleorientationImage} alt="" />

        <p className="text-header">
          Você será direcionado para o aplicativo da nossa parceira Aliança Médica. Eles farão a parte de agendamento de
          sua teleorientação com um médico voluntário e avisarão quando estiver disponível.
        </p>

        <div className="steps">
          <div className="step">
            <img className="image-content" src={Register} alt="Register" />
            <h2 className="title-content">Cadastre-se</h2>
            <p className="text-content">Entre e valide seu cadastro no portal da Aliança Médica.</p>
          </div>

          <div className="step">
            <img className="image-content" src={Calendar} alt="Calendar" />
            <h2 className="title-content">Agendamento</h2>
            <p className="text-content">Escolha o melhor horário para o seu atendimento.</p>
          </div>

          <div className="step">
            <img className="image-content" src={Medicine} alt="Medicine" />
            <h2 className="title-content">Informações</h2>
            <p className="text-content">Inclua exames já realizados e outras informações no seu histórico médico digital.</p>
          </div>

          <div className="step">
            <img className="image-content" src={Contact} alt="Contact" />
            <h2 className="title-content">Atendimento Online</h2>
            <p className="text-content">Converse por video-atendimento com um médico voluntário.</p>
          </div>

          <div className="step">
            <img className="image-content" src={History} alt="History" />
            <h2 className="title-content">Histórico</h2>
            <p className="text-content">Os dados do seu atendimento ficam registrados no histórico.</p>
          </div>
        </div>

        <div className="buttons">
          <Button
            theme="primary"
            variant="contained"
          >
            AGENDAR TELEORIENTAÇÃO
                </Button>
          <Button theme="secondary"
            variant="contained"
            onClick={() => onPressBackToStart()}
          >
            VOLTAR
          </Button>
        </div>



      </div>

    </>
  );
}