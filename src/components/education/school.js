import React from 'react';

const School = (props) => {
    return (
        <div>
            <label> School: </label>
            <br></br>
            <input name='school' type='text' value={props.value || ''} onChange={(event) => props.handleChange(event, props.id, props.index)} required />
        </div>
    );
};

export default School;