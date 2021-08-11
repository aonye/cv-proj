import React from 'react';

class School extends React.Component {
    render() {
        return (
            <div>
                <label> School: </label>
                <br></br>
                <input name='school' type='text' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

export default School;