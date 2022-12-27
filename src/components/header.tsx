import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

export const Logo = () => {
    return (
        <Link to='/' className='text-decoration-none'>
            <h5 className='my-0 mx-3 p-0'>LOGO</h5>
        </Link>
    )
}

export const Header = () => {
    const navigate = useNavigate() // hook!

    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo />
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <span onClick={() => navigate("/about")} className="nav-link px-2 link-dark">About</span>
                        </li>
                        <li>
                            <span onClick={() => navigate("/blog")} className="nav-link px-2 link-dark">Blog</span>
                        </li>
                        <li>
                            <span onClick={() => navigate("/contact")} className="nav-link px-2 link-dark">Contact</span>
                        </li>
                        <li>
                            <span onClick={() => navigate("/todo")} className="nav-link px-2 link-dark">Todo</span>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="dropdown nav text-end">
                        <li>
                            <span onClick={() => navigate("/login")} className="nav-link px-2 link-dark">Login</span>
                        </li>
                        <li>
                            <span onClick={() => navigate("/signup")} className="nav-link px-2 link-dark">Signup</span>
                        </li>
                            
                    </div>
                </div>
            </div>
        </header>
    )
}
