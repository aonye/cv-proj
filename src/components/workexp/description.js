import React from 'react';

class Description extends React.Component {
    render() {
        return (
            <div>
                <label> Description: </label>
                <br></br>
                <input name='description' type='text' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Description;