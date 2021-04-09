import Skeleton from 'react-loading-skeleton';
import React from 'react';

export const PostLoading = () => {
    let titleStyles = {
        margin: 10,
        height: '100%'
    }
    return (
        <div className='post'>
            <div className='inner-post'>
                <div className='rate-container'>
                    <h2>↑</h2>
                    <h3><Skeleton style={{height: 25, width: 25}}/></h3>
                    <h2>↓</h2>
                </div>
                <div className='content-container'>
                    <div className='title' style={titleStyles}>
                        <h3><Skeleton /></h3>
                    </div>
                    <div className='thumbnail' >
                        <Skeleton style={{height: 200}}/>
                    </div>
                    <hr/>
                    <div className='post-footer'>
                        <div className='author'>
                            <p><Skeleton /></p>
                        </div>
                        <div className='post-time'>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}