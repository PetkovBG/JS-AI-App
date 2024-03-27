import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <div className="title">
                    <span>Login Form</span>
                </div>
                <form className="login-form">
                    <div className="row">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="username" required />
                    </div>
                    <div className="row">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="password" required />
                    </div>
                    <div className="row">
                        <button className="login-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;