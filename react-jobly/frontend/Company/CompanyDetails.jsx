import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";

function CompanyDetails(props) {
  const [company, setCompany] = useState(null);
  const [jobs, setJobs] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCompany() {
      const { data } = await JoblyApi.getCompany(props.match.params.handle);
      setCompany(data);
      setJobs(data.jobs);
    }
    getCompany();
  }, [props.match.params.handle]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <p>
        <Link to={`/companies/${company.handle}/jobs`}>View Jobs</Link>
      </p>
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default companyDetails;