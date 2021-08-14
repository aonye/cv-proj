import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

class WorkExperience extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const { title, company, dateStart, dateLeft, description } = this.props.item;
        return (
            <div>
                {this.props.submitStatus ?
                    <div>
                        <div>
                            Job Title: {title}
                        </div>
                        <div>
                            Company Name: {company}
                        </div>
                        <div>
                            Date Started: {dateStart}
                        </div>
                        <div>
                            Date Left: {dateLeft}
                        </div>
                        <div>
                            Responsibilites: {description}
                        </div>
                    </div>
                    :
                    <div>
                        <div className='styled-input'>
                            <Title value={title} handleChange={this.props.handleChange} />
                        </div>
                        <div className='styled-input' style={{ float: 'right' }}>
                            <Company value={company} handleChange={this.props.handleChange} />
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
                    </div >}
            </div>
        );
    }
}

// <div>{this.state.title}</div>
// <div>{this.state.company}</div>
// <div>{this.state.dateStart}</div>
// <div>{this.state.dateLeft}</div>
// <div>{this.state.description}</div>


// this.state = {
//     title: '',
//     company: '',
//     dateStart: '',
//     dateLeft: '',
//     description: '',
// }
// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);

export default WorkExperience;