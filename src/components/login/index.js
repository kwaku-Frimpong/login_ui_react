import React, { Component } from 'react'
import './style.css'

export default class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            isLogin:true,
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleCreateAccoutBtn = ()=>{
        this.setState((prevState)=>{
            return{
                isLogin:!prevState.isLogin,
                email:'',
                password:''
            }
        })
    }

    handleChange = (e)=>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.email,this.state.password)
    }

    render() {
        return (
            <div className="main-container centered">
                
                <div className={`auth-container centered ${this.state.isLogin ?'':'sign-up'}`}>
                    
                    <div className="form-container centered vertical">
                        {this.buildLoginForm()}
                    </div>

                    <div className="form-container centered vertical">
                        {this.buildSignUpForm()}
                    </div>

                    <div className="form-container movable centered vertical bg-colored">
                        {this.buildSocialMediaButton()}
                    </div>

                </div>

            </div>
        )
    }

    buildLoginForm(){
        return(
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} className="centered vertical">
                    <input 
                        type="email"
                        name='email'
                        placeholder="Email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Password"
                        value={this.state.password}
                        required
                    />
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        )
    }

    buildSignUpForm(){
        return(
            <div className="signup-form">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit} className="centered vertical">
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Email address"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" className="btn btn-success">Sign up</button>
                </form>
            </div>
        )
    }

    buildSocialMediaButton(){
        return(
            <div className="centered vertical">
                <button className="btn btn-fb">Facebook</button>
                <button className="btn btn-google">Google</button>
                <div className="centered divider">
                    <div></div>
                    <strong>OR</strong>
                    <div></div>
                </div>
                <button
                    onClick={this.handleCreateAccoutBtn} 
                    className="btn btn-outline">
                        {this.state.isLogin?'Create an account':'Already have an account'}
                    </button>
            </div>
        )
    }
}
