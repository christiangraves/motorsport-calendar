import React from 'react';


const Register = (props) => (
    <form>
        <input value={props.username} onChange={props.detectChange} name="username" placeholder="Username"/>
        <input value={props.password} onChange={props.detectChange} name="password" placeholder="Password"/> 
        <button onClick={props.regClick}>Register</button>
    </form>
)

export default Register;