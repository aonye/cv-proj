import React from 'react';

const DateLeft = (props) => {
    return (
        <div>
            <label> Date Left: </label>
            <br></br>
            <input name='dateLeft' type='date' value={props.value || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default DateLeft;