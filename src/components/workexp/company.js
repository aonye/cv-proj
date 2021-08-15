import React from 'react';

const Company = (props) => {
    return (
        <div>
            <label> Company Name: </label>
            <br></br>
            <input name='company' type='text' value={props.value || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default Company;