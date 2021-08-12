import React from 'react';

class FirstName extends React.Component {
    render() {
        return (
            <div class='styled-input'>
                <label> First Name: </label>
                <br></br>
                <input id='firstName' type='text' value={this.props.firstName} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default FirstName;