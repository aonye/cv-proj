import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

const WorkExperience = (props) => {
    const { title, company, dateStart, dateLeft, description } = props.item;
    return (
        <div>
            {props.submitStatus ?
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
                    <br></br>
                </div>
                :
                <div>
                    <div className='styled-input'>
                        <Title value={title} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input' style={{ float: 'right' }}>
                        <Company value={company} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input'>
                        <DateStart value={dateStart} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input' style={{ float: 'right' }}>
                        <DateLeft value={dateLeft} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input wide'>
                        <Description value={description} handleChange={props.handleChange} />
                    </div>
                </div >}
        </div>
    );
};

export default WorkExperience;