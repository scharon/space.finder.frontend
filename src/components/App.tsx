import React from 'react';
import logo from './logo.svg';
import './App.css';

// il ya 2 facons de creer un componemt soit avec une class soit une function
export class App extends React.Component {
  
  render(){
    return (<div> App from class Works </div>
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
