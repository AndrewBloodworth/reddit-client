import React from 'react';
import { Feed } from '../../features/feed/Feed';

export const Home = () => {
    return (
        <div className='home'>
            <h1>Home Page</h1>
            <Feed />
        </div>
    )
}