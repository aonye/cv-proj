import React from 'react';

class Company extends React.Component {
    render() {
        return (
            <div>
                <label> Company Name: </label>
                <br></br>
                <input name='company' type='text' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

export default Company;