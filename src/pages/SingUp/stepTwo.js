import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// import Geocode from 'react-geocode';
import firebase from 'firebase';

import { useHistory } from 'react-router-dom';
import { MdArrowForward, MdMyLocation } from 'react-icons/md';
import { createNewUser, setPosition } from '../../actions/AuthActions';

// Components
import HeaderPerfil from '../../components/HeaderPerfil';
import HeaderRouter from '../../components/HeaderRouter';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProgressTracking from '../../components/ProgressTracking';

// Styles
import { Container, Content, Error } from './styles';

export default function Home(props) {
  const history = useHistory();
  const Dispatch = useDispatch();

  var image = null
  var name = ''
  var firstName = ''

  if(props.location.state){
    const user = props.location.state.user
    image = user.image
    name = user.name
    var splitName = name.split(' ')
    firstName = splitName[0]
  }

  const [formState, setFormState] = useState({
    zipCode: '',
    street: '',
    neighborhood: '',
    city: '',
    uf: '',
    email: '',
    password: '',
    name: name,
    photo: image,
    firstName: firstName
  });

  const [loading, setLoading] = useState(false);
  const [isFacebook] = useState(localStorage.getItem('loginType') || false);

  const [location, setLocation] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [error, setError] = useState({
    zipCode: false,
    street: false,
    neighborhood: false,
    city: false,
    uf: false,
    email: false,
    password: false,
  });

  function setState(event, state) {
    const {
      target: { value },
    } = event;

    setFormState({
      ...formState,
      [state]: value,
    });
  }

  function getLocation() {
    // Pedi permisão de acessar a localização
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const coords = {
            latitude,
            longitude,
          };
          setLocation(coords);
          alert('Dados gravados com sucesso!');
        }
      );
    } else {
      alert('Precisamos da sua localização para melhor funcionamento do app');
      setLocation('');
    }
  }

  function validateEmail() {
    const { email } = formState;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = re.test(String(email).toLowerCase());

    if (email !== '' && !validate) {
      setError({
        ...error,
        email: true,
      });
    } else {
      setError({
        ...error,
        email: false,
      });
    }
  }

  function completeCep() {
    const { zipCode } = formState;
    axios
    .get(`https://viacep.com.br/ws/${zipCode}/json/`)
    .then(({ data }) => {
        setFormState({
          ...formState,
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          uf: data.uf,
        });
        setError({
          ...error,
          zipCode: false,
        });
      })
      .catch(() => {
        setError({
          ...error,
          zipCode: true,
        });
      });
  }

  function validatePassword() {
    const { password } = formState;
    if (password < 6) {
      setError({
        ...error,
        password: true,
      });
      return true;
    }
    setError({
      ...error,
      password: false,
    });
    return false;
  }

  function createUser() {
    const infosTemp = localStorage.getItem('infosTemp') || '{}';

    const isEmpty = Object.entries(formState).find(element => {
      if (element[1] === '') {
        return element;
      }
      return false;
    });

    if (isEmpty) {
      setError({
        ...error,
        [isEmpty[0]]: true,
      });
    }
    else if (location === '') {
      setErrorMessage(
        'Precisamos da sua localização para o app funcionar da forma certa!'
      );
    }
    else {
      setLoading(true);
      const newForm = {
        ...JSON.parse(infosTemp),
        ...formState,
      };
      
      Dispatch(createNewUser(formState.email, formState.password, newForm))
        .then((response) => {
          let uidToUse = null;
          if (response) {
            let { uid } = response;
            uidToUse = uid;
          } else {
            uidToUse = localStorage.getItem("Uid")
          }
          Dispatch(setPosition(uidToUse, location))
            .then(() => {
              setLoading(false);
              history.push('/diagnostico/suspeitos');
            })
            .catch(() => {
              setLoading(false);
            });
          })
          .catch(error => {
            setErrorMessage(error.message);
            setLoading(false);
          });
        }
      }

  function addMoreInfo(){
    const infosTemp = localStorage.getItem('infosTemp') || '{}';
    const newForm = {
        ...JSON.parse(infosTemp),
        ...formState,
      };

    localStorage.setItem('infosTemp', JSON.stringify(newForm));
  }

  useEffect(() => {
    const newFormState = formState;
    delete newFormState.email;
    delete newFormState.password;
    setFormState(newFormState);
  }, [isFacebook]);

  return (
    <Container>
      <Loading open={loading} />
      <HeaderPerfil back={true} user={true} name={formState.name} photo={formState.photo}></HeaderPerfil>
      <Content>
        <p className="description"><spam>Muito bem, {formState.firstName}!</spam> Agora nos diga, por favor, onde você mora.</p>
        <Button
          variant="contained"
          theme="secondary"
          startIcon={<MdMyLocation />}
          onClick={() => getLocation()}
        >
          Minha localização
        </Button>

        <Input
          required
          label="CEP"
          value={formState.zipCode || ''}
          error={error.zipCode}
          variant="outlined"
          onChange={event => setState(event, 'zipCode')}
          onBlur={() => completeCep()}
        />
        <Input
          required
          label="Rua"
          value={formState.street || ''}
          error={error.street}
          variant="outlined"
          onChange={event => setState(event, 'dateBirth')}
        />

        <Input
          required
          label="Bairro"
          value={formState.neighborhood}
          error={error.neighborhood}
          variant="outlined"
          onChange={event => setState(event, 'phone')}
        />
        <Input
          required
          label="Cidade"
          value={formState.city}
          error={error.city}
          variant="outlined"
          onChange={event => setState(event, 'city')}
        />

        <Input
          label="UF"
          value={formState.uf}
          error={error.uf}
          variant="outlined"
          onChange={event => setState(event, 'uf')}
        />
        {errorMessage !== '' && <Error>{errorMessage}</Error>}

        <Button variant="contained" theme="third" onClick={() => addMoreInfo()}>
          Continuar
        </Button>
        <ProgressTracking amount={7} position={3}/>
      </Content>
    </Container>
  );
}
