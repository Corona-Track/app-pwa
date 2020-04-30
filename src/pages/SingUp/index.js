import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';
import MenuItem from '@material-ui/core/MenuItem';

import { useDispatch } from 'react-redux';
import { createNewUser, setPosition } from '../../actions/AuthActions';

// Components
import HeaderRouter from '../../components/HeaderRouter';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import ProgressTracking from '../../components/ProgressTracking';
import HeaderPerfil from '../../components/HeaderPerfil';

// Styles
import { Container, Content, Error } from './styles';

export default function SingUp(props) {

  const history = useHistory();

  const inputDateBirth = useRef();
  const inputRefPhone = useRef();
  const inputRefCpf = useRef();
  const Dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  
  var image = null

  if(props.location.state){
    const user = props.location.state.user
    image = user.image
  }

  const [formState, setFormState] = useState({
    name: '',
    cpf: '',
    dateBirth: '',
    sexo: '',
    pregnant: ' ',
    phone: '',
    email: '',
    password: '',
    photo: image
  });


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

  const [isFacebook] = useState(localStorage.getItem('loginType') || false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    cpf: false,
    dateBirth: false,
    phone: false,
    name: false,
    sexo: false,
    pregnant: true,
  });

  function setState(event, state, maxLength) {
    const {
      target: { value },
    } = event;
    if (maxLength !== '') {
      if (value.length <= maxLength) {
        setFormState({
          ...formState,
          [state]: value,
        });
      }
    } else {
      setFormState({
        ...formState,
        [state]: value,
      });
    }
  }


  function nextStep() {
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
    } else {
      setLoading(true);
      localStorage.setItem('infosTemp', JSON.stringify(formState));
      window.scrollTo(0, 0);
      history.push('/');
    }
  }

  function onBlurState(el) {
    const nameArray = formState[el].split(' ');

    if (formState[el] === '' || nameArray.length < 2 || nameArray[1] === '') {
      setError({
        ...error,
        [el]: true,
      });
    } else {
      setError({
        ...error,
        [el]: false,
      });
    }
  }
  function validateCpf(type) {
    inputRefCpf.current.type = 'number';
    if (type === 'blur') {
      inputRefCpf.current.maxlength = 10;
      inputRefCpf.current.type = 'text';
      const { cpf } = formState;
      setFormState({
        ...formState,
        cpf: cpf
          ? cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4')
          : cpf,
      });

      if (!cpf || cpf.length > 11 || cpf.length < 11) {
        setError({
          ...error,
          cpf: true,
        });
      } else {
        setError({
          ...error,
          cpf: false,
        });
      }
    } else {
      setFormState({
        ...formState,
        cpf: formState.cpf ? formState.cpf.replace(/[.-]/g, '') : formState.cpf,
      });
    }
  }
  function validateDateBirth(type) {
    const { dateBirth } = formState;
    inputDateBirth.current.type = 'number';
    if (type === 'blur') {
      inputDateBirth.current.type = 'text';
      setFormState({
        ...formState,
        dateBirth: dateBirth
          ? dateBirth.replace(/(\d{2})?(\d{2})?(\d{4})/, '$1/$2/$3')
          : dateBirth,
      });

      if (!dateBirth || dateBirth.length > 8 || dateBirth.length < 8) {
        setError({
          ...error,
          dateBirth: true,
        });
      } else {
        setError({
          ...error,
          dateBirth: false,
        });
      }
    } else {
      setFormState({
        ...formState,
        dateBirth: dateBirth ? dateBirth.replace(/[/]/g, '') : dateBirth,
      });
    }
  }

  function validatePhone(type) {
    inputRefPhone.current.type = 'number';
    const { phone } = formState;
    if (type === 'blur') {
      inputRefPhone.current.type = 'text';
      setFormState({
        ...formState,
        phone: phone
          ? phone.replace(/(\d{2})?(\d{4})?(\d{5})/, '($1) $2-$3')
          : phone,
      });

      if (!phone || phone.length < 10) {
        setError({
          ...error,
          phone: true,
        });
      } else {
        setError({
          ...error,
          phone: false,
        });
      }
    } else {
      setFormState({
        ...formState,
        phone: phone ? phone.replace(/[()-\s/]/g, '') : phone,
      });
    }
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
            setLoading(false);
            history.push('/nextStep', { 
              user: { 
                name: formState.name,
                image: formState.photo
            }})
            window.scrollTo(0, 0);
          } else {
            uidToUse = localStorage.getItem("Uid")
          }
        })
        .catch(error => {
          setErrorMessage(error.message);
          setLoading(false);
        });
    }
  }

  return (
    <Container>
      <Loading open={loading} />
      <HeaderPerfil back={true} user={true} name={formState.name} photo={formState.photo}></HeaderPerfil>
      <Content>
        <p className="description">Agora, precisamos saber um pouco mais sobre você e <spam>seus dados pessoais.</spam></p>
        <Input
          required
          label="Nome Completo"
          error={error.name}
          value={formState.name}
          variant="outlined"
          onChange={event => setState(event, 'name', '')}
          onBlur={() => onBlurState('name')}
          type="text"
        />
        <Input
          required
          label="CPF"
          value={formState.cpf}
          variant="outlined"
          error={error.cpf}
          onChange={event => setState(event, 'cpf', 11)}
          onBlur={() => validateCpf('blur')}
          onFocus={() => validateCpf()}
          type="number"
          inputRef={inputRefCpf}
          inputProps={{
            maxLength: 10,
          }}
        />
        <Input
          required
          label="Data de Nascimento"
          value={formState.dateBirth}
          error={error.dateBirth}
          variant="outlined"
          onChange={event => setState(event, 'dateBirth', 8)}
          onBlur={() => validateDateBirth('blur')}
          onFocus={() => validateDateBirth()}
          inputRef={inputDateBirth}
          type="number"
        />
        <Select
          error={error.sexo}
          label="Sexo"
          value={formState.sexo}
          defaultValue="Não Identificar"
          onChange={event => {
            setFormState({
              ...formState,
              sexo: event && event.target && event.target.value ? event.target.value : null,
              pregnant: null
            });
          }}
        >
          <MenuItem value="Masculino">Masculino</MenuItem>
          <MenuItem value="Feminino">Feminino</MenuItem>
          <MenuItem value="Não Identificar">Não Identificar</MenuItem>
        </Select>
        <Select
          label="Gestante"
          disabled={formState.sexo !== 'Feminino'}
          style={{ background: formState.sexo !== 'Feminino' ? '#e0e0e0' : '' }}
          error={formState.pregnant === ''}
          value={formState.pregnant || ''}
          defaultValue="Sim"
          onChange={event => setState(event, 'pregnant', '')}
        >
          <MenuItem value="Não">Não</MenuItem>
          <MenuItem value="Sim">Sim</MenuItem>
        </Select>
        <Input
          required
          label="Celular"
          value={formState.phone}
          variant="outlined"
          error={error.phone}
          onChange={event => setState(event, 'phone', 11)}
          onBlur={() => validatePhone('blur')}
          onFocus={() => validatePhone()}
          inputRef={inputRefPhone}
        />

        {!isFacebook && (
          <>
            <Input
              required
              label="E-mail"
              error={error.email}
              value={formState.email}
              variant="outlined"
              onChange={event => setState(event, 'email', '')}
              helperText={error.email && 'Digite um e-mail valido!'}
              onBlur={() => validateEmail('blur')}
              onFocus={() => validateEmail()}
            />

            <Input
              variant="outlined"
              label="Password"
              value={formState.password}
              error={error.password}
              helperText="Digite uma senha com mais de 6 caracteres"
              onChange={event => setState(event, 'password', '')}
              onBlur={() => validatePassword('blur')}
            />
          </>
        )}
       
        <Button variant="contained" theme="third" onClick={() => createUser()}>
          Continuar
        </Button>
        {errorMessage !== '' && <Error>{errorMessage}</Error>}
        <ProgressTracking amount={7} position={2}/>
      </Content>
    </Container>
  );
}
