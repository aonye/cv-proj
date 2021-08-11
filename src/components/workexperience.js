import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

class WorkExperience extends React.Component {
    render() {
        const { workExpCount } = this.props.data;
        const makeID = `workExp${workExpCount}`;
        return (
            <div>
                <Title makeID={makeID} handleChange={this.props.handleChange} />
                <Company makeID={makeID} handleChange={this.props.handleChange} />
                <DateStart makeID={makeID} handleChange={this.props.handleChange} />
                <DateLeft makeID={makeID} handleChange={this.props.handleChange} />
                <Description makeID={makeID} handleChange={this.props.handleChange} />
            </div >
        );
    }
}

//<NewWorkExp id= data={this.props.data} handleChange={this.props.handleChange}
//{this.props.data.AddWEClicked ? <input type='text' /> : null}

export default WorkExperience;