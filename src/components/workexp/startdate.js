import React from 'react';

class DateStart extends React.Component {
    render() {
        return (
            <div>
                <label> Date Start: </label>
                <br></br>
                <input name='dateStart' type='date' value={this.props.value || ''} onChange={(event) => this.props.handleChange(event)} />
            </div>
        );
    }
}

export default DateStart;