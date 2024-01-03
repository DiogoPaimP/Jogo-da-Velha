import React from "react";
import Label from "../Label";

const Input = ({id ,value, content, type="text"}) => (
    <>
        <input id={id} type={type} value= {value}/>
        <Label htmlFor="show" content={content} /> 
    </>

);


export default Input;