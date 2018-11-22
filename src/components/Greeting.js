import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        const {id, name} = this.props;
        return (
            <p>Hello {name}</p>
        );
    }
}

export default Greeting;
