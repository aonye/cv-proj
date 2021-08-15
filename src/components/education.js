import React from 'react';
import Degree from './education/degree';
import School from './education/school';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

const Education = (props) => {
    const { degree, school, dateStart, dateLeft, description } = props.item;
    const [id, index] = props.id.split(/(\d+)/g, 2);
    return (
        <div>
            {props.submit ?
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
                    <br></br>
                </div>
                :
                <div>
                    <div className='styled-input'>
                        <Degree id={id} index={index} value={degree} handleChange={props.handleChange} />
                    </div>
                    <div className='styled-input' style={{ float: 'right' }}>
                        <School id={id} index={index} value={school} handleChange={props.handleChange} />
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
                </div>}
        </div>
    );
};

export default Education;

