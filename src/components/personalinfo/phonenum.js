import React from 'react';

const PhoneNumber = (props) => {
    return (
        <div>
            <label> Phone number: </label>
            <br></br>
            <input name='phone' type='tel' placeholder='XXX-XXX-XXXX' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={props.phone} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default PhoneNumber;