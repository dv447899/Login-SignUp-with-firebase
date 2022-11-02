import React from 'react';
import styles from "./input.module.css";

const InputComponent = (props) => {
  return (
    <>
        {props.lable && <label>{props.lable}</label>}
        <br/>
        <input type="text" {...props} />
        <br/>
    </>
  )
}

export default InputComponent