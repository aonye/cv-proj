import React from 'react';

class DateStart extends React.Component {
    render() {
        return (
            <div>
                <label> Date Start: </label>
                <br></br>
                <input id='dateStart' type='text' value={this.props.value} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default DateStart;