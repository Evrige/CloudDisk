import React from 'react'
import './registration.scss';
import Input from "../../utils/input/Input.jsx";

const Registration = () => {
  return (
    <div>
        <div className="registration__header">
            Регистрация
        </div>
        <Input type="text" placeholder="Enter name"/>
        <Input type="text" placeholder="Enter lastname"/>
        <Input type="text" placeholder="Enter email"/>
        <Input type="text" placeholder="Enter password"/>
        <button className='registration__button'>Войти</button>

    </div>
  )
}

export default Registration;
