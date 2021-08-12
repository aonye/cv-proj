import React from 'react';

class PhoneNumber extends React.Component {
    render() {
        return (
            <div class='styled-input'>
                <label> Phone number: </label>
                <br></br>
                <input id='phone' type='tel' placeholder='XXX-XXX-XXXX' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={this.props.phone} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default PhoneNumber;