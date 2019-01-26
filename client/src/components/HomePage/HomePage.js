import React, {Component} from 'react';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import axios from 'axios';


class HomePage extends Component {
    state = {
        username: '',
        password: '',
    }


    detectChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginClick = (event) => {
        event.preventDefault()
        console.log('blam');
        // axios.post('/api/log')
    }

    regClick = (event) => {
        event.preventDefault()
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
    }


    render(){
        return(
            <div>
                <Login
                detectChange = {this.detectChange}
                loginClick = {this.loginClick}
                />
                <Register
                detectChange = {this.detectChange}
                regClick = {this.regClick}
                />
            </div>
        )
    }
}

export default HomePage;