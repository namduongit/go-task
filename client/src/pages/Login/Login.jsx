import './Login.css'

import loginImage from '../../images/login.png'
import { useState } from 'react'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-page d-flex justify-content-center align-items-center">
            <div className="login-container container d-flex justify-content-between align-items-center flex-wrap">

                <div className="login-item image-login">
                    <img src={loginImage} alt="Login Thumbnail" className='login-image' />
                </div>

                <div className="login-item login-form d-flex justify-content-center">
                    <div className="login-form-container rounded-4 shadow">
                        <div className="login-form__title mb-4 fw-bold">Login</div>
                        <form action="" method='post'>
                            <div className="mb-3">
                                <label htmlFor="email-input" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password-input" className="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="password-input" placeholder="Enter your password" />
                            </div>

                            <div className='mb-5'>
                                <input type="checkbox" class="form-check-input me-2" id="show-password" onChange={(event) => {
                                    setShowPassword(event.target.checked);
                                }} />
                                <label class="form-check-label" for="show-password">Show password</label>
                            </div>

                            <button type='submit' className='button submit-btn text-center rounded-5 w-100 fw-bold'>Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
