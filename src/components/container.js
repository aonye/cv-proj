import React, { createElement } from 'react';
import PersonalInfo from './personalinfo';
import WorkExperience from './workexperience';
import Education from './education';
import editIcon from './../editicon.png';

function workObjFact() {
    return {
        title: '',
        company: '',
        dateStart: '',
        dateLeft: '',
        description: '',
    }
}

function eduObjFact() {
    return {
        degree: '',
        school: '',
        dateStart: '',
        dateLeft: '',
        description: '',
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePrint = this.handlePrint.bind(this);
    }

    handleChange(index, arr, event) {
        if (index === null || arr === null) {
            this.setState({ [event.target.id]: event.target.value });
            return;
        }
        let obj = arr[index];
        obj[event.target.name] = event.target.value;
        this.setState({ [arr[0]]: obj });
    }

    handleSubmit(event) {
        event.preventDefault();
        let submitState = this.state.submit;
        if (!submitState) {
            this.setState({ submit: true });
            return;
        }
        this.setState({ submit: false });
    }

    handlePrint(event) {
        window.print();
    }

    createUI(key) {
        if (key === 'workexp') {
            return this.state.workExp.map((item, index) => {
                const arr = this.state.workExp;
                if (this.state.submit === true) {
                    return (
                        < div key={index} >
                            <WorkExperience item={item} submitStatus={this.state.submit} handleChange={this.handleChange.bind(this, index, arr)} />
                        </div > //do not render button
                    );
                } else {
                    return (
                        < div key={index} >
                            <WorkExperience item={item} submitStatus={this.state.submit} handleChange={this.handleChange.bind(this, index, arr)} />
                            <div className="btn-lrg submit-btn" style={{ marginBottom: '2vh' }} onClick={this.removeClickWE.bind(this, item, index)}>Remove Work Exp</div>
                        </div >
                    );
                }
            });
        } else if (key === 'edu') {
            return this.state.edu.map((item, index) => {
                const arr = this.state.edu;
                if (this.state.submit === true) {
                    return (
                        < div key={index} >
                            <Education item={item} submitStatus={this.state.submit} handleChange={this.handleChange.bind(this, index, arr)} />
                        </div > //do not render button
                    );
                } else {
                    return (
                        < div key={index} >
                            <Education item={item} submitStatus={this.state.submit} handleChange={this.handleChange.bind(this, index, arr)} />
                            <div className="btn-lrg submit-btn" style={{ marginBottom: '2vh' }} onClick={this.removeClickEdu.bind(this, index)}>Remove Education</div>
                        </div >
                    );
                }
            });
        }
    }

    addClick(event) {
        if (event.target.id === 'eduBtn') {
            const obj = eduObjFact();
            this.setState((prevState) => ({ edu: [...prevState.edu, obj] }));
        } else if (event.target.id === 'WEBtn') {
            const obj = workObjFact();
            this.setState(prevState => ({ workExp: [...prevState.workExp, obj] }));
        }
    }

    removeClickWE(i) {
        let workExp = [...this.state.workExp];
        workExp.splice(i, 1);
        this.setState({ workExp });
    }

    removeClickEdu(i) {
        let edu = [...this.state.edu];
        edu.splice(i, 1);
        this.setState({ edu });
    }

    render() {
        return (
            <div>
                {this.state.submit ?
                    <div className='row input-container'>
                        <h4>Personal Information</h4>
                        <div className='personalInfo'>
                            <div>
                                Name: {`${this.state.firstName} ${this.state.lastName}`}
                            </div>
                            <div>
                                Address: {this.state.address}
                            </div>
                            <div>
                                Phone Number: {this.state.phone}
                            </div>
                            <div>
                                Email Address: {this.state.email}
                            </div>
                            <div>
                                Location: {this.state.location}
                            </div>
                            <div>
                                LinkedIn: {this.state.linkedin}
                            </div>
                        </div>
                        <h4>Work Information</h4>
                        <div className='personalInfo'>
                            {this.createUI('workexp')}
                        </div>
                        <h4>Education</h4>
                        <div className='personalInfo'>
                            {this.createUI('edu')}
                        </div>
                        <img id='edit' src={editIcon} alt='editIcon' height='32px' width='25px' onClick={this.handleSubmit} />
                        <button id='print' style={{ float: 'right' }} onClick={this.handlePrint}>Print Page</button>
                    </div>
                    :
                    <div>
                        <header>
                            Aonye's CV Project
                        </header>
                        <form className='row input-container' onSubmit={this.handleSubmit}>
                            <div>
                                <h1>Personal Info</h1>
                                <PersonalInfo data={this.state} handleChange={this.handleChange.bind(this, null, null)} />
                            </div>
                            <div id='workexp'>
                                <h1>Work experience</h1>
                                {this.createUI('workexp')}
                                <div id='WEBtn' className='btn-lrg submit-btn' onClick={this.addClick.bind(this)}>Add Work Experience</div>
                            </div>
                            <div>
                                <h1>Education</h1>
                                {this.createUI('edu')}
                                <div id='eduBtn' className="btn-lrg submit-btn" onClick={this.addClick.bind(this)}>Add Education</div>
                            </div>
                            <input className='styled-input wide' id='submit' type='submit'></input>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Container;





// class WorkExperience extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { title: '', company: '', description: '', dateStart: '', dateLeft: '', clicked: true };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ [event.target.id]: event.target.value });
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         console.log(this.state);
//         // var joinedArr = this.state.tasks.concat(this.state.value);
//         // this.setState({ tasks: joinedArr });
//         // this.setState({ value: '' });
//     }

//     render() {
//         return (
//             <div>
//                 <Title value={this.state.title} handleChange={this.handleChange}></Title>
//                 <Company value={this.state.company} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Company>
//                 <DateStart value={this.state.dateStart} handleChange={this.handleChange}></DateStart>
//                 <DateLeft value={this.state.dateLeft} handleChange={this.handleChange}></DateLeft>
//                 <Description value={this.state.description} handleChange={this.handleChange}></Description>
//             </div>
//         );
//     }
// }


// this.createBasicInput();

// createBasicInput() {
//     id.forEach((item, index) => {
//         const val = Object.keys(this.state)[index];
//         itemList.push(
//             <div>
//                 <label key={'UX9' + index}>{item}</label>
//                 <br></br>
//                 <input id={val} type='text' value={this.state.val} onChange={(event) => this.handleChange(event)} required></input>
//             </div>);
//     });
// }

// const id = ['Job title: ', 'Company Name: '];
// let itemList = [];


    //                 constructor(props) {
    //                 super(props);
    //             this.state = {title: '', company: '' };
    //             this.handleChange = this.handleChange.bind(this);
    //             this.handleSubmit = this.handleSubmit.bind(this);
    // }

    //             handleChange(event) {
    //                 this.setState({ [event.target.id]: event.target.value });
    //             console.log(this.state);
    // }

    //             handleSubmit(event) {
    //                 event.preventDefault();
    //             console.log(this.state);
    //     // var joinedArr = this.state.tasks.concat(this.state.value);
    //     // this.setState({tasks: joinedArr });
    //     // this.setState({value: '' });
    // }

