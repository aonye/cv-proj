import React from 'react';
import PersonalInfo from './personalinfo/personalinfo';
import Education from './education';
import WorkExperience from './workexperience';

class Container extends React.Component {
    render() {
        return (
            <div>
                <PersonalInfo />
                <Education />
                <WorkExperience />
            </div>
        );
    }
}

export default Container;
