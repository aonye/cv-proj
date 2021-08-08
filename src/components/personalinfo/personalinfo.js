/*
Quick tip: Use the JavaScript function map to map over your tasks array.
You will need to provide a unique key to each item (read the warning, you’ll know it when you see it in the console!).
And there is a difference between handling input fields in plain JavaScript and in React.
If you face a problem with it, attempt to figure it out on your own using tools like the documentation, StackOverflow, Google, or experimenting.
But fear not, we will again provide an overview of our solution below.
*/

//What the app will do: 
//Render an input field and a submit button
//On submit, we want to:
//      -Clear the input
//      -Add the value of the input to a growing list

import React from 'react';

const id = ['First Name: ', 'Last Name: ', 'Address: ', 'Email Address: ', 'Phone: ', 'LinkedIn: '];
let itemList = [];

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', address: '', email: '', phone: '', linkedin: '' };
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

    getKeyNames() {
        let keyName = [];
        for (let keys in this.state) {
            keyName = keyName.concat(keys);
        }
        return keyName;
    }

    createBasicInfoItems() {
        id.forEach((item, index) => {
            const val = Object.keys(this.state)[index];
            itemList.push(
                <div>
                    <label key={index}>{item}</label>
                    <br></br>
                    <input id={val} type='text' value={this.state.val} onChange={(event) => this.handleChange(event)}></input>
                </div>);
        });
        console.log(this.state);
    }

    render() {
        this.createBasicInfoItems();
        return (
            <div>
                {itemList}
            </div>
        );
    }
}

export default PersonalInfo;