import './Register.css';

import registerImage from '../../images/register.png';
import { useState } from 'react';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register-page d-flex justify-content-center align-items-center">
            <div className="register-container container d-flex justify-content-between align-items-center flex-wrap">

                <div className="register-item image-register">
                    <img src={registerImage} alt="register Thumbnail" className='register-image' />
                </div>

                <div className="register-item register-form d-flex justify-content-center">
                    <div className="register-form-container rounded-4 shadow">
                        <div className="register-form__title mb-4 fw-bold">Register</div>
                        <form action="" method='post'>
                            <div className="mb-3">
                                <label htmlFor="email-input" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password-input" className="form-label">Password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="password-input" placeholder="Enter your password" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="repeat-password-input" className="form-label">Repeat password</label>
                                <input type={showPassword ? "text" : "password"} className="form-control" id="repeat-password-input" placeholder="Repeat your password" />
                            </div>

                            <div className='mb-5'>
                                <input type="checkbox" className="form-check-input me-2" id="show-password" onChange={(event) => {
                                    setShowPassword(event.target.checked);
                                }} />
                                <label className="form-check-label" htmlFor="show-password">Show password</label>
                            </div>

                            <button type='button' className='button submit-btn text-center rounded-5 w-100 fw-bold' onClick={() => {}}>Register</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;
