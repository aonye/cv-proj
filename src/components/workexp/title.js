import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <label> Job Title: </label>
                <br></br>
                <input name='title' type='text' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

//value = {this.props.title} onChange = {(event) => this.props.handleChange(event, this.props.id)}

export default Title;