import React from 'react';
import { Feed } from '../../features/feed/Feed';

export const Home = () => {
    return (
        <div className='home'>
            <div className='feed-container'>
                <Feed />
                <div className='side-bar'>This thing</div>
            </div>
        </div>
    )
}