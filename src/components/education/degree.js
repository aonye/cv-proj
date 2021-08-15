import React from 'react';

const Degree = (props) => {
    return (
        <div>
            <label> Degree: </label>
            <br></br>
            <input name='degree' type='text' value={props.value || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default Degree;