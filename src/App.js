import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    Person: [
      { name: "Pooja", age: "35" },
      { name: "Sushim", age: "65" },
      { name: "Prachi", age: "48" },
      { name: "Neeta", age: "55" }
    ]
  }
  
  nameHandler = (event) =>{
    this.setState({
      Person: [
        { name: event.target.value, age: "35" },
        { name: "Sushim", age: "65" },
        { name: "Prachi", age: "48" },
        { name: "Geeta", age: "55" }
      ]
    })
  }
   
  render() {
    return (
      <div className="App">
      Learn React
      <UserInput changed ={this.nameHandler} userName ={this.state.Person[0].name}/>
      <UserOutput name={this.state.Person[0].name} age={this.state.Person[0].age}/>
      </div>
      
    );
  }
}

export default App;
