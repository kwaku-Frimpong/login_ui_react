import React from 'react';
import './App.css';
import HomePage from './components/home';
import LoginPage from './components/login';
import fire from './config/fire';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      user:{}
    }
    this.authListener = this.authListener.bind(this)
  }

  authListener(){
    fire.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({user:user})
      }else{
        this.setState({user:null})
      }
    })
  }

  componentDidMount(){
    this.authListener()
  }

  render(){
    return(
      <div>
        { this.state.user !== null ? <HomePage/> : <LoginPage/> }
      </div>
    )
  }
}

export default App;
