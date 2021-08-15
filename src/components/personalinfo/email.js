import React from 'react';

const Email = (props) => {
    return (
        <div >
            <label> Email: </label>
            <br></br>
            <input id='email' type='email' placeholder='fluffycat@mail.com' value={props.email} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default Email;