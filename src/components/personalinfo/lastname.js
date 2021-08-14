import React from 'react';

class LastName extends React.Component {
    render() {
        return (
            <div>
                <label> Last Name: </label>
                <br></br>
                <input id='lastName' type='text' value={this.props.lastName} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default LastName;