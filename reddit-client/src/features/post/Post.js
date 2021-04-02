import React from 'react';

export const Post = ({post_data, post_hint, title, thumbnail, ups, author, media}) => {
    let titleStyles = {
        margin: 10,
        height: '100%'
    }
    const getUrl = (imgUrl) => {
        let encoded = imgUrl.replace('amp;s', 's')
        let doubleEncoded = encoded.replace('amp;', '')
        let tripleEncoded = doubleEncoded.replace('amp;', '')
        return tripleEncoded
    }

    const getMediaType = () => {
        switch (post_hint) {
            case 'image':
                const imgSource = post_data.preview.images[0].source;
                let imgUrl = getUrl(imgSource.url)
                return (
                    <img src={imgUrl} style={{width: '100%'}} alt='' />
                )
            case 'hosted:video':
                const videoSource = post_data.media.reddit_video;
                const { fallback_url } = videoSource
                return (
                    <video style={{width: '100%'}} autoPlay muted controls>
                        <source src={fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            case 'link':
                break;
            case 'self':
                break;
            case undefined:
                break;
            default:
                break;
        }
    }
    return (
        <div className='post'>
            <div className='inner-post'>
                <div className='rate-container'>
                    <h2>↑</h2>
                    <h3>{ups}</h3>
                    <h2>↓</h2>
                </div>
                <div className='content-container'>
                    <div className='title' style={titleStyles}>
                        <h3>{title}</h3>
                    </div>
                    <div className='thumbnail' hidden={thumbnail.img === 'self'}>
                        {getMediaType()}
                    </div>
                    <hr/>
                    <div className='post-footer'>
                        <div className='author'>
                            <p>Posted by: {author}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}