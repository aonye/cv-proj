import React from 'react';
import PersonalInfo from './personalinfo';
import WorkExperience from './workexperience';
import Education from './education';

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
            workExpCount: 0,
            workExp: [],
            eduCount: 0,
            edu: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(event, id) {
        if (id) {
            let obj = { ...this.state[id] };
            obj[event.target.name] = event.target.value;
            this.setState({ [id]: obj }, () => { console.log(this.state[id]) });
        } else {
            this.setState({ [event.target.id]: event.target.value }, () => { console.log(this.state) });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // var joinedArr = this.state.tasks.concat(this.state.value);
        // this.setState({ tasks: joinedArr });
        // this.setState({ value: '' });
    }

    handleAdd(event) {
        switch (event.target.id) {
            case 'WEBtn': {
                this.addWE(event);
                break;
            }
            case 'eduBtn': {
                this.addEdu(event);
                break;
            }
            default: {
                console.log('never print this');
            }
        }
    }

    addWE(event) {
        const obj = workObjFact();
        let count = this.state.workExpCount;
        count++;
        this.setState(
            {
                workExpCount: count,
                [`workExp${count}`]: obj,
            }, function () {
                const newWE = <WorkExperience key={count} data={this.state} handleChange={this.handleChange} />
                let workExp = this.state.workExp.slice();
                workExp.push(newWE);
                this.setState({
                    workExp: workExp,
                }, () => console.log(this.state)); //check state with CB, erase this
            });
    }

    addEdu(event) {
        const obj = eduObjFact();
        let count = this.state.eduCount;
        count++;
        this.setState(
            {
                eduCount: count,
                [`edu${count}`]: obj,
            }, function () {
                const newEdu = <Education key={count} data={this.state} handleChange={this.handleChange} />
                let edu = this.state.edu.slice();
                edu.push(newEdu);
                this.setState({
                    edu: edu,
                }, () => console.log(this.state)); //erase this
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <PersonalInfo data={this.state} handleChange={this.handleChange} />
                <div id='workexp'>
                    {this.state.workExp}
                    <button id='WEBtn' onClick={this.handleAdd}>Add Work Experience</button>
                </div>
                <div>
                    {this.state.edu}
                    <button id='eduBtn' onClick={this.handleAdd}>Add Education</button>
                </div>
                <input type='submit'></input>
            </form>
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

