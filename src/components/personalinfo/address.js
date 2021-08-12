import React from 'react';

class Address extends React.Component {
    render() {
        return (
            <div class='styled-input wide'>
                <label> Street Address: </label>
                <br></br>
                <input id='address' type='text' value={this.props.address} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Address;