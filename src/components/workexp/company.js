import React from 'react';

class Company extends React.Component {
    render() {
        return (
            <div>
                <label>Company: </label>
                <br></br>
                <input id='company' type='text' value={this.props.value} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default Company;