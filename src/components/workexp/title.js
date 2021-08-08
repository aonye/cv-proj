import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <label> Title: </label>
                <br></br>
                <input id='title' type='text' value={this.props.value} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default Title;