import React from 'react';

class DateLeft extends React.Component {
    render() {
        return (
            <div>
                <label> Date Left: </label>
                <br></br>
                <input name='dateLeft' type='date' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} required />
            </div>
        );
    }
}

export default DateLeft;