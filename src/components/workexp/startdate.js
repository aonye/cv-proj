import React from 'react';

const DateStart = (props) => {
    return (
        <div>
            <label> Date Start: </label>
            <br></br>
            <input name='dateStart' type='date' value={props.value || ''} onChange={(event) => props.handleChange(event)} required />
        </div>
    );
};

export default DateStart;