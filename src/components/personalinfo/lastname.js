import React from 'react';

const LastName = (props) => {
    return (
        <div>
            <label> Last Name: </label>
            <br></br>
            <input name='lastName' type='text' value={props.lastName} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default LastName;