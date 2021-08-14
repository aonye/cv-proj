import React from 'react';

class School extends React.Component {
    render() {
        return (
            <div>
                <label> School: </label>
                <br></br>
                <input name='school' type='text' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default School;