import React, { Component } from 'react';
import "./AuthPage.css";
import AuthContext from '../context/auth-context'
class AuthPage extends Component {
    state={
    isLogin: true
    }
    static contextType = AuthContext;
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.passwordEl=React.createRef();
}
switchMode = () => {
    this.setState(prevState => {
        return { isLogin: !prevState.isLogin };
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;
        //13
        if (email.trim().length === 0 || password.trim().length === 0)
            return;
        let requestBody = {
            query: `
                query{
                    login(email: "${email}", password:"${password}"){
                        userId
                        token
                        tokenExpiration
                    }
                }`
        }
        if (!this.state.isLogin) {
            requestBody = {
                query: `
                    mutation{
                        createUser(userInput:{email: "${email}", password: "${password}"}){
                            email
                            _id
                        }
                    }
                `
            }     
        }
        
        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 200 & res.status !== 201) {
                throw  new Error('Failed')
            }
            return res.json();
        }).then(resData => {
            if (resData.data.login.token) {
                this.context.login(
                    resData.data.login.token,
                    resData.data.login.userId,
                    resData.data.login.tokenExpiration
                )
            }
        })
            .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h3>Welcome to {this.state.isLogin ? "Login":"Sign Up" } Page </h3>
                <form className="authForm" onSubmit={this.submitHandler}>
                <div className="inputForm">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" ref={this.emailEl}></input>
                </div>
                < div className="inputForm">
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" ref={this.passwordEl}></input>
                </div>
                <div className="buttonForm">
                    <button type="submit"> Submit</button>
                    <button type="button" onClick={this.switchMode}>{this.state.isLogin ? "Sign Up":"Login"}</button>
                </div>
            </form>
            </div>
            
        );
    }
}

export default AuthPage;