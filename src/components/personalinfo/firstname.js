import React from 'react';

const FirstName = (props) => {
    return (
        <div>
            <label> First Name: </label>
            <br></br>
            <input name='firstName' type='text' value={props.firstName || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default FirstName;