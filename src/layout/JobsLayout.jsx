import React from 'react';
import { Outlet } from 'react-router-dom';

const JobsLayout = () => {
    return (
        <div className="jobs-layout">
            <div className="jobs-header">
                <h2 className="jobs-title">Job Openings</h2>
                <p className="jobs-description">
                    List of current job openings in our company. 
                    Join our team and help shape the future.
                </p>
            </div>
            <div className="jobs-content">
                <Outlet />
            </div>
        </div>
    );
};

export default JobsLayout;