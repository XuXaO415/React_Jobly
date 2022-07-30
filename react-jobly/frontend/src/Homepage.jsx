import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Homepage() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h1>Homepage</h1>
            <p>Welcome Back, {user.name}!</p>
            <p>
                <Link to="/jobs">View Jobs</Link>
            </p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}
export default Homepage;