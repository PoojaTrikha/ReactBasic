import React, { Component } from 'react';

class  UserOutput extends Component {
    render() {
      return (
         <div>
         <p>My name is {this.props.name}, i am very great </p>
         <p>My name is Atul, i am very cutie pie </p>
         </div>
      );
    }
  }
  
  export default UserOutput;