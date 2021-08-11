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
                <Degree makeID={makeID} handleChange={this.props.handleChange} />
                <School makeID={makeID} handleChange={this.props.handleChange} />
                <DateStart makeID={makeID} handleChange={this.props.handleChange} />
                <DateLeft makeID={makeID} handleChange={this.props.handleChange} />
                <Description makeID={makeID} handleChange={this.props.handleChange} />
            </div>
        );
    }
}

export default Education;