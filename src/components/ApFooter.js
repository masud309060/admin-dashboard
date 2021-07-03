import React from 'react';
import '../styles/ApFooter.scss';

const ApFooter = () => {
    return (
        <div className="ap_footer">
            <small>2020 &copy; AazzTech</small>
            <ul className="ap_footer_nav">
                <li>
                    <a href="#!">About</a>
                </li>
                <li>
                    <a href="#!">Team</a>
                </li>
                <li>
                    <a href="#!">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default ApFooter;
