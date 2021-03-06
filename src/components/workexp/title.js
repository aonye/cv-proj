import React from 'react';

const Title = (props) => {
    return (
        <div>
            <label> Job Title: </label>
            <br></br>
            <input name='title' type='text' value={props.value || ''} onChange={(event) => props.handleChange(event, props.id, props.index)} required />
        </div>
    );
};

export default Title;