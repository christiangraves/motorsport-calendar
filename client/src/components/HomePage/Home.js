import React, {Component} from 'react';
import Login from './Login';
import Register from './Register';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class Home extends Component {
    state = {
        username: '',
        password: '',
        confirmPass:'',
        needReg: false
    }


    detectChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClick = (event) => {
        event.preventDefault()
        const {username, password} = this.state;

        axios.post('/api/login', {username, password})
            .then((res) => {
                console.log(res.data);
                if(res.data.username === username && res.data.password === password){
                    this.props.history.push('/landing')
                }
                else if(res.data.username !== username){
                    alert('Username not found!');
                    console.log('login error')
                }
                else if(res.data.username === username && res.data.password !== password){
                    alert('Wrong password!');
                    console.log('login error')
                }
            }).catch(error => {
                console.log('Login server error')
                console.log(error)
            })
    } 

    regClick = (event) => {
        event.preventDefault()
        const {password, confirmPassword} = this.state;

        if (password !== confirmPassword){
            alert("Passwords do not match!")
        }else{
        axios.post('/api/reg', { username: this.state.username, password:this.state.password})
            .then(res => {
                console.log(res);
                if (res.data) {
                    console.log('success');
                   // this.setState({ redirectTo: '/login' })
                }
                else {
                    console.log('Register Error');
                }
            }).catch(error => {
                console.log('Register server error')
                console.log(error);
            })
            this.setState({needReg: false});
        }
    }

    regDisplay = (event) => {
        event.preventDefault()
        this.setState({needReg: true})

    }


    render(){
        const {needReg} = this.state
        return(
            <div>
            {
                !needReg ?
                <Login
                detectChange = {this.detectChange}
                loginClick = {this.loginClick}
                regDisplay = {this.regDisplay}
                />
                :
                <Register
                detectChange={this.detectChange}
                regClick={this.regClick}
                
                />
            }
            </div>
        )
    }
}

export default withRouter (Home);