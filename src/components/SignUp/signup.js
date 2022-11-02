import React, { useState } from 'react';
import style from './signup.module.css';
import InputComponent from '../InputCompenent/inputComponent';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: '',
    password: ""
  })
  const [error, setError] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!value.name || !value.email || !value.password) {
      setError("pls fill all the details")
    }
    setError('');
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, value.email, value.password)
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
        <h1 className={style.heading}>Sign-Up</h1>

        <InputComponent
          lable="Name"
          placeholder="Enter the Name"
          onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))} />

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
          <button onClick={handleSubmit} disabled={submitButtonDisable}>SignUp</button>
          <p>Already have an account ?<span><Link to="/signup">SignUp</Link></span></p>

        </div>
      </div>

    </div>
  )
}

export default SignUp