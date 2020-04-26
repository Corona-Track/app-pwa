import React, { useState, useEffect } from 'react'
import { SignIn } from '../../services/firebase/Auth';
import { getUser } from '../../services/firebase/User';
import { FiArrowLeft, FiX } from "react-icons/fi";
import './index.css'


export default function Header(props) {
    const { onPressLeft, onPressRight } = props
    const [user, setUser] = useState({
        photo: '',
        name: ''
    })
  
    useEffect(() => {
        getData()
    }, [])
    
    async function getData() {
// TODO, após fazer a tela de login, retirar signIn daqui
        const email = 'Teste3@hotmail.com.br'
        const pass = '123456'
        await SignIn(email, pass)
        const user = await getUser()
        const userData = user.data()
        const { name, photo } = userData
        setUser({ name, photo })
    }

    function onPressLeftIcon(e) {
        e.preventDefault();
        if(onPressLeft)
        onPressLeft()
      }

      function onPressRightIcon(e) {
        e.preventDefault();
        if(onPressRight)
        onPressRight()
      }
   
      function Photo(){
          if(user.photo)
          return <img src={user.photo} alt="userPhoto" className="userPhoto" />

          return null
      }

    return (
        <div className='header'>
            <button onClick={onPressLeftIcon}>
                <FiArrowLeft color={'#0058F4'} size={'22px'} />
             </button>
            <div className='user'>
                <Photo/>
                <span className="userName">{user.name}</span>
            </div>
            <button onClick={onPressRightIcon}>
                <FiX color={'#0058F4'} size={'22px'} />
            </button>
        </div>
    )
}
