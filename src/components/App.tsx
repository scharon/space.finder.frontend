import React from 'react';
//import './App.css';
import { User } from '../model/Model';
import { AuthenService } from '../services/AuthenService';
import { Login } from './Login';

/* User should be like a globaler part of our application, it will be available 
throughout the whole project and maybe inside our backend 
a user might be available only after log in */
interface AppState{
  user: User | undefined 
}

// il ya 2 facons de creer un componemt soit avec une class soit une function
// App component is the parent to old the component
export class App extends React.Component <{}, AppState> {

  private authenService: AuthenService = new AuthenService(); // service wich can pass to what component might need it
  
  render(){
    return (
  
      // Send/pass Data from a PC into a CC
    <div> App from class Works 
        <Login authenService = {this.authenService}/> 
    </div>
    )
  }
}


/*  the endresult is this HTML
function App() {
  return (
    <div> App from function Works </div> 
  );
}

export default App;*/
