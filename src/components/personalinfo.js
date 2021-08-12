import React from 'react';
import FirstName from './personalinfo/firstname';
import LastName from './personalinfo/lastname';
import Address from './personalinfo/address';
import LinkedIn from './personalinfo/linkedin';
import Email from './personalinfo/email';
import PhoneNumber from './personalinfo/phonenum';
import Location from './personalinfo/location';

class PersonalInfo extends React.Component {

    render() {
        const { firstName, lastName, address, phone, linkedin, email, location } = this.props.data;
        return (
            <div>
                <FirstName firstName={firstName} handleChange={this.props.handleChange} />
                <div class='col-md-6 col-sm-12' style={{ float: 'right' }}>
                    <LastName lastName={lastName} handleChange={this.props.handleChange} />
                </div>
                <Address address={address} handleChange={this.props.handleChange} />
                <PhoneNumber phone={phone} handleChange={this.props.handleChange} />
                <div class='col-md-6 col-sm-12' style={{ float: 'right' }}>
                    <LinkedIn linkedin={linkedin} handleChange={this.props.handleChange} />
                </div>
                <Email email={email} handleChange={this.props.handleChange} />
                <Location location={location} handleChange={this.props.handleChange} />
            </div >
        );
    }
}

export default PersonalInfo;

//automate creating base input code (fails with complex inputs -- need to bug fix)
// const id = ['First Name: ', 'Last Name: ', 'Address: ', 'Location', 'LinkedIn: '];
// const placeholder = ['a', 'b', 'c', 'City, State or Country', 'linkedin.com/in/extension/'];
// let itemList = [];

// id.forEach((item, index) => {
//     const val = Object.keys(this.props.data)[index];
//     console.log(val, placeholder[index], this.props.data[val], this.props.handleChange);
//     itemList.push(
//         <div>
//             <label key={index}>{item}</label>
//             <br></br>
//             <input id={val} type='text' placeholder={placeholder[index]} value={this.props.data[val]} onChange={(event) => this.props.handleChange(event)} required />
//         </div>);
// });

//Code for basic form validation below

//Email, Country, Zip Code, Password and Password Confirmation fields.
// const form = document.getElementsByTagName('form')[0];

// const mail = document.getElementById('mail');
// const mailError = document.querySelector('#mail + span');
// const country = document.getElementById('country');
// const countryError = document.querySelector('#country + br + span');
// const zip = document.getElementById('zipcode');
// const zipError = document.querySelector('#zipcode + br + span');
// const password = document.getElementById('password');
// const pwError = document.querySelector('#password + span');
// const pwconfirm = document.getElementById('pwconfirm');
// const pwconfirmError = document.querySelector('#pwconfirm + span');
// const button = document.querySelector('form div button');

// console.log(button);
// console.log(pwconfirm);

// mail.addEventListener('input', mailValidHand);



// country.addEventListener('change', countryValidHand);

// function countryValidHand() {
//     console.log(country.validity.valueMissing);
//     if (!country.validity.valueMissing) {
//         country.setAttribute('style', 'box-shadow: none');
//         countryError.textContent = '';
//         countryError.className = 'error';
//     }
// }

// zip.addEventListener('input', zipValidHand);

// function zipValidHand() {
//     console.log(zip.checkValidity());
//     console.log(zip.validity);
//     if (zip.checkValidity()) {
//         zipError.textContent = '';
//         zipError.className = 'error';
//         zip.setAttribute('style', 'box-shadow: none');
//     } else {
//         zipError.className = 'error active';
//         zipErrors();
//     }

//     function zipErrors() {
//         if (zip.validity.valueMissing) {
//             zipError.textContent = 'Please input a valid zip code.';
//         }
//         else if (zip.validity.tooShort) {
//             zipError.textContent = `Zip code should be ${zip.minLength} characters with dash; you have entered ${zip.value.length} characters.`
//         }
//         else if (zip.validity.patternMismatch) {
//             zipError.textContent = 'Zip-code must be entered in the format XXXXX-XXXX.';
//         }
//     }
// }

// //password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters

// password.addEventListener('input', pwValidHand);

// function pwValidHand() {
//     console.log(password.checkValidity());
//     if (password.checkValidity()) {
//         pwError.textContent = '';
//         pwError.className = 'error';
//         password.setAttribute('style', 'box-shadow: none');
//     } else {
//         pwError.className = 'error active';
//         pwErrors();
//     }

//     function pwErrors() {
//         let lowerCaseLetters = /[a-z]/g;
//         let upperCaseLetters = /[A-Z]/g;
//         let numbers = /[0-9]/g;

//         if (password.validity.valueMissing) {
//             pwError.textContent = 'Please enter a valid password.'
//         }
//         else if (password.validity.tooShort) {
//             pwError.textContent = `Password should be at least ${password.minLength} characters.`
//         }
//         else if (!password.value.match(lowerCaseLetters)) {
//             pwError.textContent = 'Password must contain at least 1 lowercase letter.'
//         }
//         else if (!password.value.match(upperCaseLetters)) {
//             pwError.textContent = 'Password must contain at least 1 uppercase letter.'
//         }
//         else if (!password.value.match(numbers)) {
//             pwError.textContent = 'Password must contain at least one number.'
//         }
//         else if (password.validity.patternMismatch) {
//             pwError.textContent = 'Password must contain at least one lowercase, uppercase letter, number and be at least 8 characters in length.'
//         }
//     }
// }

// pwconfirm.addEventListener('input', confirmHand);

// function confirmHand() {
//     if (pwconfirm.value) {
//         pwconfirm.setAttribute('style', 'box-shadow: none');
//     } else {
//         pwconfirm.setAttribute('style', 'box-shadow: 0px 0px 3px 1px red');
//     }
// }



// button.addEventListener('click', submitHand);

// function submitHand(event) {
//     event.preventDefault();
//     if (pwconfirm.value === password.value) {
//         pwconfirmError.className = 'error';
//         pwconfirmError.textContent = '';
//         pwconfirm.setAttribute('style', 'box-shadow:none');

//     } else {
//         pwconfirm.setAttribute('style', 'box-shadow: 0px 0px 3px 1px red');
//         pwconfirmError.className = 'error active';
//         pwconfirmError.textContent = 'Passwords must match';
//     }
// }
