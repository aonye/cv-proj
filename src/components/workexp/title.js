import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <label> Job Title: </label>
                <br></br>
                <input name='title' type='text' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default Title;