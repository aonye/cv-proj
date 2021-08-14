import React from 'react';
import Degree from './education/degree';
import School from './education/school';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

class Education extends React.Component {
    render() {
        const { degree, school, dateStart, dateLeft, description } = this.props.item;
        return (
            <div>
                {this.props.submitStatus ?
                    <div>
                        <div>
                            Degree: {degree}
                        </div>
                        <div>
                            School Name: {school}
                        </div>
                        <div>
                            Date Started: {dateStart}
                        </div>
                        <div>
                            Date Left: {dateLeft}
                        </div>
                        <div>
                            Description: {description}
                        </div>
                    </div>
                    :
                    <div>
                        <div className='styled-input'>
                            <Degree value={degree} handleChange={this.props.handleChange} />
                        </div>
                        <div className='styled-input' style={{ float: 'right' }}>
                            <School value={school} handleChange={this.props.handleChange} />
                        </div>
                        <div className='styled-input'>
                            <DateStart value={dateStart} handleChange={this.props.handleChange} />
                        </div>
                        <div className='styled-input' style={{ float: 'right' }}>
                            <DateLeft value={dateLeft} handleChange={this.props.handleChange} />
                        </div>
                        <div className='styled-input wide'>
                            <Description value={description} handleChange={this.props.handleChange} />
                        </div>
                    </div>}
            </div>

        );
    }
}

export default Education;

