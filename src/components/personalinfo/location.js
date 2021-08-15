import React from 'react';

const Location = (props) => {
    return (
        <div>
            <label> Location: </label>
            <br></br>
            <input id='location' type='text' placeholder='City, State or Country' value={props.location} onChange={(event) => props.handleChange(event)} />
        </div>
    );
};

export default Location;