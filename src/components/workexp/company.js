import React from 'react';

class Company extends React.Component {
    render() {
        return (
            <div>
                <label> Company Name: </label>
                <br></br>
                <input name='company' type='text' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Company;