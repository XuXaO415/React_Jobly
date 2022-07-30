import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';

function JobCard({id, title, salary, equity, company}) {
    const {applyToJob, alreadyAppliedToJob} = useContext(UserContext);
    const[applied, setApplied] = useState(false);

    useEffect(() => {
        if (alreadyAppliedToJob(id)) {
            setApplied(true);
        }
    }
    , [alreadyAppliedToJob, id]);

    const handleApply = () => {
        applyToJob(id);
        setApplied(true);
    }
    return (
        <div className="job-card">
            <div className="job-card-title">
                <h3>{title}</h3>
            </div>
            <div className="job-card-info">
                <p>Salary: {salary}</p>
                <p>Equity: {equity}</p>
                <p>Company: {company}</p>
            </div>
            <div className="job-card-apply">
                {applied ? <p>You have applied to this job</p> : <button onClick={handleApply}>Apply</button>}
            </div>
        </div>
    );

    export default JobCard;