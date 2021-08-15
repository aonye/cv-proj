import React from 'react';

const Description = (props) => {
    return (
        <div>
            <label> Description: </label>
            <br></br>
            <input name='description' type='text' value={props.value || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default Description;