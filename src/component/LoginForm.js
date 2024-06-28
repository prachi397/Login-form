import React, { useState } from "react";
import './index.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'test@test.com' && password === '123456') {
            alert('Form submitted successfully');
        } else {
            alert('Something went wrong. Please check your credentials.');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
            <h3 className="card-title">Login form</h3>
                <div className="col-md-6">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email ID"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block submit-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
