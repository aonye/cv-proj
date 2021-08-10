import React from 'react';

class Email extends React.Component {
    render() {
        return (
            <div>
                <label> Email: </label>
                <br></br>
                <input id='email' type='email' placeholder='fluffycat@mail.com' value={this.props.email} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Email;