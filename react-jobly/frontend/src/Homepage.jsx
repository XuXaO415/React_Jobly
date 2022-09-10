import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Users/UserContext';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const userContext = useContext(UserContext);
    const { currentUser } = userContext;
    console.debug("Homepage", currentUser);

    return (
        <div className="Homepage">
            <h1>Jobly</h1>
            <p className='lead'>Your next job awaits here.</p>
            {currentUser ? (
                <p>
                    Welcome, {currentUser.first_name}!
                    <Link to="/jobs">Find a job</Link>
                </p>
            ) : (
                <p>
                    <Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link>
                </p>
            )}
        </div>
    );
}
export default Homepage;