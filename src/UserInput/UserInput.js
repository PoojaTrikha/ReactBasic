import React, { Component } from 'react';

class UserInput extends Component {
    render() {
        return (
            <div>
                Name:<input type="text" onChange={this.props.changed} value ={this.props.userName}/>
            </div>
        );
    }
}

export default UserInput;