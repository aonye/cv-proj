import React from 'react';
import Title from './workexp/title';
import Company from './workexp/company';
import Description from './education/description';
import DateStart from './education/startdate';
import DateLeft from './education/leftdate';


class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', company: '', description: '', dateStart: '', dateLeft: '', clicked: true };
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
                <Title value={this.state.title} handleChange={this.handleChange}></Title>
                <Company value={this.state.company} handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Company>
                <DateStart value={this.state.dateStart} handleChange={this.handleChange}></DateStart>
                <DateLeft value={this.state.dateLeft} handleChange={this.handleChange}></DateLeft>
                <Description value={this.state.description} handleChange={this.handleChange}></Description>
            </div>
        );
    }
}

export default WorkExperience;