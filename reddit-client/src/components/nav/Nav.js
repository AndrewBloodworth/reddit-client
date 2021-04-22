import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className='main-nav'>
            <Link to='/'>
                <div className="logo-container">
                    <div className="logo-img-container"></div>
                </div>
            </Link>
        </nav>
    )
}