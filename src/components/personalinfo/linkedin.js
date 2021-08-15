import React from 'react';

const LinkedIn = (props) => {
    return (
        <div>
            <label> LinkedIn: </label>
            <br></br>
            <input name='linkedin' type='text' placeholder='Linkedin.com/in/extension' value={props.linkedin} onChange={(event) => props.handleChange(event)} />
        </div>
    );
};

export default LinkedIn;