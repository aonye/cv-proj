import React from 'react';
import Degree from './education/degree';
import School from './education/school';
import DateStart from './education/startdate';
import DateLeft from './education/leftdate';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = { degree: '', school: '', dateStart: '', dateLeft: '', clicked: true };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        // var joinedArr = this.state.tasks.concat(this.state.value);
        // this.setState({ tasks: joinedArr });
        // this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <Degree value={this.state.firstName} handleChange={this.handleChange}></Degree>
                <School value={this.state.lastName} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></School>
                <DateStart value={this.state.address} handleChange={this.handleChange}></DateStart>
                <DateLeft value={this.state.email} handleChange={this.handleChange}></DateLeft>
            </div>
        );
    }
}

export default Education;