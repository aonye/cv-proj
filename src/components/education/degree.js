import React from 'react';

class Degree extends React.Component {
    render() {
        return (
            <div>
                <label> Degree: </label>
                <br></br>
                <input name='degree' type='text' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Degree;