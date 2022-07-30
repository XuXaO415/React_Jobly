import React, { useState, useEffect } from 'react';


function JobSearchForm({ searchJobs }) {
    const [search, setSearch] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        searchJobs(search);
    }
    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <div className="job-search-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        className="form-control"
                        id="search"
                        value={search}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    );
}

export default JobSearchForm;
