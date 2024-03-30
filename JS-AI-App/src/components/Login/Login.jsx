import { useState } from 'react';
import { AuthContext, useAuthContext } from '../../contexts/AuthContext';
import './Login.css';

const Login = () => {

    const { onLoginSubmit, error, setError } = useAuthContext();

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();
        onLoginSubmit(loginData);
    }

    const onFocusHandler = () => {
        setError(false);
    }

    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <div className="title">
                    <span>Login Form</span>
                </div>
                <form className="login-form" onSubmit={onSubmit}>
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="username" required value={loginData.username} onChange={(e) => setLoginData((state) => ({
                            ...state,
                            username: e.target.value,
                        }))} onFocus={onFocusHandler}/>
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="password" required value={loginData.password} onChange={(e) => setLoginData((state) => ({
                            ...state,
                            password: e.target.value,
                        }))} onFocus={onFocusHandler} />
                    </div>
                        <div className='error-wrapper'>{error && <p>Invalid username or password</p>}</div>
                    <div className="row">
                        <button className="login-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;