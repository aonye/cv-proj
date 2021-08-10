import React from 'react';
import PersonalInfo from './personalinfo';
import WorkExperience from './workexperience';

function objectFact() {
    return {
        title: '',
        company: '',
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
            WorkExpCount: 0,
            WorkExp: [],
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
        let obj = objectFact();
        let count = this.state.WorkExpCount;
        count++;
        this.setState(
            {
                WorkExpCount: count,
                [`WorkExp${count}`]: obj,
            }, function () {
                const newWE = <WorkExperience key={count} data={this.state} handleChange={this.handleChange} />
                let workexp = this.state.WorkExp.slice();
                workexp.push(newWE);
                this.setState({
                    WorkExp: workexp,
                });
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <PersonalInfo data={this.state} handleChange={this.handleChange} />
                <div>
                    {this.state.WorkExp}
                    <button onClick={this.handleAdd}>Add</button>
                </div>
                <input type='submit'></input>
            </form>
        );
    }
}



export default Container;
