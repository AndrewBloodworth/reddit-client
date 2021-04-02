import React from 'react';

export const Post = ({title, thumbnail}) => {
    return (
        <div className='post'>
            <div className='inner-post'>
                <div className='rate-container'>

                </div>
                <div className='content-container'>
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='thumbnail'>
                        <img src={thumbnail} />
                    </div>
                </div>
            </div>
        </div>
    )
}