import './Header.css'

import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header-component">
            <div className="header-container container py-2 d-flex justify-content-between align-items-center">
                <div className='header-item'>
                    <img className='header-logo' src={logo} alt="Logo" />
                    <span className='header-title ms-2 fw-bold'>Go - Task</span>
                </div>
                <div className='header-item d-flex'>
                    <div className="header-feature me-4">
                        <i className="fa-solid fa-house me-1"></i>
                        <a href="/">Home</a>
                    </div>
                    <div className="header-feature me-4">
                        <i className="fa-solid fa-right-to-bracket me-1"></i>
                        <a href="/auth/login">Login</a>
                    </div>
                    <div className="header-feature">
                        <i className="fa-solid fa-id-card me-1"></i>
                        <a href="/auth/register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;