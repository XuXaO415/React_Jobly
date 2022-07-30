import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';


function UserLoginForm ({loginUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const history = useHistory();
    
    useEffect(() => {
        if (error) {
        setEmail('');
        setPassword('');
        }
    }, [error]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({email, password})
        .then(() => {
            history.push('/');
        }).catch(err => {
            setError(err.message);
        }
        );
    }
    
    return (
        <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {error && <p className="error">{error}</p>}
        </form>
        </div>
    );
}

export default UserLoginForm;