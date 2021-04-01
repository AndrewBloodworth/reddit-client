import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className='main-nav'>
            <Link to='/'>
                <h1>Reddit Client</h1>
            </Link>
        </nav>
    )
}