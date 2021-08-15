import React from 'react';

const Address = (props) => {
    return (
        <div>
            <label> Street Address: </label>
            <br></br>
            <input id='address' type='text' value={props.address} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default Address;