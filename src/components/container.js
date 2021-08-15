import React, { useState } from 'react';
import PersonalInfo from './personalinfo';
import WorkExperience from './workexperience';
import Education from './education';
import { workObjFact, eduObjFact } from './objFact';
import editIcon from './../editicon.png';

const Container = () => {
    const [mainState, setMainState] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        linkedin: '',
        email: '',
        location: '',
        workExp: [],
        edu: [],
        submit: false,
    });

    const handleChange = (event, id, index) => {
        if (!id && !index) { //id/index falsy for not-nested state (personalInfo)
            let mainObj = { ...mainState };
            mainObj[event.target.name] = event.target.value;
            setMainState(mainObj);
            return;
        }
        let arr = [...mainState[id]];
        let obj = { ...mainState[id][index] };
        obj[event.target.name] = event.target.value;
        arr[index] = obj;
        setMainState({ ...mainState, [id]: arr });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitStatus = mainState.submit;
        (!submitStatus) ? setMainState({ ...mainState, submit: true }) : setMainState({ ...mainState, submit: false });
        console.log(mainState);
    }

    const addClick = (e) => {
        if (e.target.id === 'WEBtn') {
            const obj = workObjFact();
            const workExp = [...mainState.workExp, obj]; //deconstruct, insert into arr
            setMainState({ ...mainState, workExp }); //deconstruct obj, replace key/value pair
        } else if (e.target.id === 'eduBtn') {
            const obj = eduObjFact();
            const edu = [...mainState.edu, obj];
            setMainState({ ...mainState, edu });
        }
    }

    const handlePrint = () => {
        window.print();
    }

    const removeClick = (i, k) => {
        switch (k) {
            case 'workExp': {
                let workExp = [...mainState.workExp];
                workExp.splice(i, 1);
                setMainState({ ...mainState, workExp });
                break;
            }
            case 'edu': {
                let edu = [...mainState.edu];
                edu.splice(i, 1);
                setMainState({ ...mainState, edu });
                break;
            }
            default: {
                alert('Unknown Error');
            }
        }
    }

    const createUI = (key) => {
        if (key === 'workExp') {
            return mainState.workExp.map((item, index) => {
                return (
                    < div key={index} >
                        <WorkExperience id={`${key}${index}`} item={item} submit={mainState.submit} handleChange={handleChange} />
                        {!mainState.submit ?
                            <div className="btn-lrg submit-btn" style={{ marginBottom: '2vh' }}
                                onClick={() => removeClick(index, key)}>Remove Work Exp</div>
                            : null}
                    </div >
                );
            });
        } else if (key === 'edu') {
            return mainState.edu.map((item, index) => {
                return (
                    < div key={index} >
                        <Education id={`${key}${index}`} item={item} submit={mainState.submit} handleChange={handleChange} />
                        {!mainState.submit ?
                            <div className="btn-lrg submit-btn" style={{ marginBottom: '2vh' }}
                                onClick={() => removeClick(index, key)}>Remove Education</div>
                            : null
                        }
                    </div > //do not render button on submit
                );
            });
        }
    };

    return (
        <div>
            {mainState.submit ?
                <div className='row input-container'>
                    <h4>Personal Information</h4>
                    <div className='printPage'>
                        <div>
                            Name: {`${mainState.firstName} ${mainState.lastName}`}
                        </div>
                        <div>
                            Address: {mainState.address}
                        </div>
                        <div>
                            Phone Number: {mainState.phone}
                        </div>
                        <div>
                            Email Address: {mainState.email}
                        </div>
                        <div>
                            Location: {mainState.location}
                        </div>
                        <div>
                            LinkedIn: {mainState.linkedin}
                        </div>
                    </div>
                    <h4>Work Information</h4>
                    <div className='printPage'>
                        {createUI('workExp')}
                    </div>
                    <h4>Education</h4>
                    <div className='printPage'>
                        {createUI('edu')}
                    </div>
                    <img id='edit' src={editIcon} alt='editIcon' height='32px' width='25px' onClick={handleSubmit} />
                    <button id='print' style={{ float: 'right' }} onClick={handlePrint}>Print Page</button>
                </div>
                :
                <div>
                    <header>
                        Aonye's CV Project
                    </header>
                    <form className='row input-container' onSubmit={handleSubmit}>
                        <div>
                            <h1>Personal Info</h1>
                            <PersonalInfo data={mainState} handleChange={handleChange} />
                        </div>
                        <div id='workexp'>
                            <h1>Work experience</h1>
                            {createUI('workExp')}
                            <div id='WEBtn' className='btn-lrg submit-btn' onClick={addClick}>Add Work Experience</div>
                        </div>
                        <div>
                            <h1>Education</h1>
                            {createUI('edu')}
                            <div id='eduBtn' className="btn-lrg submit-btn" onClick={addClick}>Add Education</div>
                        </div>
                        <input className='styled-input wide' id='submit' type='submit'></input>
                    </form>
                </div>
            }
        </div>
    );
};

export default Container;