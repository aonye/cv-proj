import React from 'react';

class DateLeft extends React.Component {
    render() {
        return (
            <div>
                <label> Date Left: </label>
                <br></br>
                <input name='dateLeft' type='date' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

//value = { this.props.data.WorkExp1.dateLeft } ..assigning value when inputs are created does not work

export default DateLeft;