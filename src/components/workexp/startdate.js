import React from 'react';

class DateStart extends React.Component {
    render() {
        return (
            <div>
                <label> Date Start: </label>
                <br></br>
                <input name='dateStart' type='date' onChange={(event) => this.props.handleChange(event, this.props.makeID)} />
            </div>
        );
    }
}

export default DateStart;