import React from 'react';

class LinkedIn extends React.Component {
    render() {
        return (
            <div>
                <label> Linkedin: </label>
                <br></br>
                <input id='linkedin' type='text' placeholder='Linkedin.com/in/extension' value={this.props.linkedin} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default LinkedIn;