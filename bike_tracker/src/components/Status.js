import React, { Component } from 'react';

class Status extends Component {
    render() {
        return (
            <td>{this.props.name}</td>
        );
    }
}

export default Status;
