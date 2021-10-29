import React from 'react';
import '../styles/ApBody.scss';
import ApBodyHeader from './ApBodyHeader';
import ApBodyRowFour from './ApBodyRowFour';
import ApBodyRowOne from './ApBodyRowOne';
import ApBodyRowThree from './ApBodyRowThree';
import ApBodyRowTwo from './ApBodyRowTwo';

const ApBody = () => {
    return (
        <div className="ap_body">
            <ApBodyHeader />
            <ApBodyRowOne />
            <ApBodyRowTwo />
            <ApBodyRowThree />
            <ApBodyRowFour />
        </div>
    );
};

export default ApBody;
