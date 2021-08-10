import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import DateStart from './workexp/startdate';
import DateLeft from './workexp/leftdate';
import Description from './workexp/description';

class WorkExperience extends React.Component {
    render() {
        const { WorkExpCount } = this.props.data;
        const makeID = `WorkExp${WorkExpCount}`;
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
