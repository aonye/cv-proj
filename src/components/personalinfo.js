import React from 'react';
import FirstName from './personalinfo/firstname';
import LastName from './personalinfo/lastname';
import Address from './personalinfo/address';
import LinkedIn from './personalinfo/linkedin';
import Email from './personalinfo/email';
import PhoneNumber from './personalinfo/phonenum';
import Location from './personalinfo/location';

const PersonalInfo = (props) => {
    const { firstName, lastName, address, phone, linkedin, email, location } = props.data;
    return (
        <div>
            <div className='styled-input'>
                <FirstName firstName={firstName} handleChange={props.handleChange} />
            </div>
            <div className='styled-input' style={{ float: 'right' }}>
                <LastName lastName={lastName} handleChange={props.handleChange} />
            </div>
            <div className='styled-input wide'>
                <Address address={address} handleChange={props.handleChange} />
            </div>
            <div className='styled-input'>
                <PhoneNumber phone={phone} handleChange={props.handleChange} />
            </div>
            <div className='styled-input' style={{ float: 'right' }}>
                <LinkedIn linkedin={linkedin} handleChange={props.handleChange} />
            </div>
            <div className='styled-input wide'>
                <Email email={email} handleChange={props.handleChange} />
            </div>
            <div className='styled-input wide'>
                <Location location={location} handleChange={props.handleChange} />
            </div>
        </div >
    );
};

export default PersonalInfo;
