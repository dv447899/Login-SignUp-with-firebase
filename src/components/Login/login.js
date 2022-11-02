import React, { useState } from 'react';
import style from './login.module.css';
import InputComponent from '../InputCompenent/inputComponent';
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    password: ""
  })
  const [error, setError] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!value.email || !value.password) {
      setError("pls fill all the details")
    }
    setError('');
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setSubmitButtonDisable(false);
        const user = res.user;
        console.log(user);
        await updateProfile(user, {
          displayName: value.name
        })
        navigate('/')
        console.log(res);
      })
      .catch((err) => {
        setSubmitButtonDisable(false)
        console.log("error", err)
      })
    setValue("")
    console.log(value)
  }
  return (
    <div className={style.container}>
      <div className={style.innerBox}>
        <h1 className={style.heading}>Login</h1>
        <InputComponent
          lable="Email"
          placeholder="Enter the Email"
          onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))} />

        <InputComponent
          lable="password"
          placeholder="Enter the password"
          onChange={(event) => setValue((prev) => ({ ...prev, password: event.target.value }))} />

        <div className={style.footer}>
        <b className={style.error}>{error}</b>
          <button onClick={handleSubmit} disabled={submitButtonDisable}>Login</button>
          <p>Already have an account ?<span><Link to="/signup">SignUp</Link></span></p>

        </div>
      </div>

    </div>
  )
}

export default Login