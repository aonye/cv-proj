import React from 'react';

class Degree extends React.Component {
    render() {
        return (
            <div>
                <label> Degree: </label>
                <br></br>
                <input name='degree' type='text' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

export default Degree;