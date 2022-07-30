import React from 'react';
import JobCard from './JobCard';

function JobCardList(props) {
    return (
        <div className="job-card-list">
            {props.jobs.map(job => <JobCard key={job.id} {...job} />)}
        </div>
    );
}

export default JobCardList;