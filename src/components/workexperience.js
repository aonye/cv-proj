import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

const WorkExperience = (props) => {
    const { title, company, dateStart, dateLeft, description } = props.item;
    const [id, index] = props.id.split(/(\d+)/g, 2);
    return (
        <div>
            {props.submit ?
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
                        <Title id={id} index={index} value={title} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input' style={{ float: 'right' }}>
                        <Company id={id} index={index} value={company} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input'>
                        <DateStart id={id} index={index} value={dateStart} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input' style={{ float: 'right' }}>
                        <DateLeft id={id} index={index} value={dateLeft} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input wide'>
                        <Description id={id} index={index} value={description} handleChange={props.handleChange} />
                    </div>
                </div >}
        </div>
    );
};

export default WorkExperience;