import React, {useState} from 'react'
import './authorization.scss';
import Input from "../../utils/input/Input.jsx";
import {registration} from "../../action/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div className="authorization">
        <div className="authorization__header">Регистрация</div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Enter email"/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Enter password"/>
        <button className='authorization__btn'
                onClick={()=> registration(email, password)}>Регистрация</button>
    </div>
  )
}

export default Registration;
