import React from 'react';
import Degree from './education/degree';
import School from './education/school';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

class Education extends React.Component {
    render() {
        const { eduCount } = this.props.data;
        const makeID = `edu${eduCount}`;
        return (
            <div>
                <div class='styled-input'>
                    <Degree makeID={makeID} handleChange={this.props.handleChange} />
                </div>
                <div class='styled-input' style={{ float: 'right' }}>
                    <School makeID={makeID} handleChange={this.props.handleChange} />
                </div>
                <div class='styled-input'>
                    <DateStart makeID={makeID} handleChange={this.props.handleChange} />
                </div>
                <div class='styled-input' style={{ float: 'right' }}>
                    <DateLeft makeID={makeID} handleChange={this.props.handleChange} />
                </div>
                <div class='styled-input wide'>
                    <Description makeID={makeID} handleChange={this.props.handleChange} />
                </div>
            </div>
        );
    }
}

export default Education;