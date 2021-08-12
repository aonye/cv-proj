import React from 'react';

class Location extends React.Component {
    render() {
        return (
            <div class='styled-input wide'>
                <label> Location: </label>
                <br></br>
                <input id='location' type='text' placeholder='City, State or Country' value={this.props.location} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default Location;