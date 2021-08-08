import React from 'react';

class DateLeft extends React.Component {
    render() {
        return (
            <div>
                <label> Date Left: </label>
                <br></br>
                <input id='dateLeft' type='text' value={this.props.value} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default DateLeft;