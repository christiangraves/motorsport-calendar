import React from 'react';


const Login = (props) => (
    <div>

    <form>
        <input value={props.username} onChange={props.detectChange} name="username" placeholder="Username"/>
        <input value={props.password} onChange={props.detectChange} name="password" placeholder="Password"/> 
        <button onClick={props.loginClick}>Login</button>
    </form>
    <p>Click <a href="#" onClick={props.regDisplay}>here</a> to Register.</p>
    </div>
)

export default Login; 