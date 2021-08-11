import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <div>
                <label> Description: </label>
                <br></br>
                <input name='description' type='text' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

export default Description;