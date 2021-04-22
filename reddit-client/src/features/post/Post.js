import React from 'react';

export const Post = ({post_data}) => {
    const { post_hint, title, thumbnail, ups, author } = post_data;
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
                const hostedVideoSource = post_data.media.reddit_video;
                return (
                    <video style={{width: '100%'}} autoPlay muted controls>
                        <source src={hostedVideoSource.fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            case 'rich:video':
                const richVideoSource = post_data.preview.reddit_video_preview;
                if (!richVideoSource) return;
                return (
                    <video style={{width: '100%'}} autoPlay muted controls>
                        <source src={richVideoSource.fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            case 'link':
                return (
                    <a href={post_data.url} target="_blank">Link</a>
                )
            case 'self':
                break;
            case undefined:
                return (
                    <p>{post_data.selftext}</p>
                )
            default:
                break;
        }
    }
    const getHourDiff = () => {
        let now = new Date().getHours();
        let oldD = new Date(post_data.created).getHours()
        let ugh = new Date(post_data.created)
    }
    const configureUps = (ups) => {
        let div = Math.floor(ups / 1000)
        let mod = String(ups % 1000)[0]
        return `${div}.${mod}k`
    }
    return (
        <div className='post'>
            <div className='inner-post'>
                <div className='rate-container'>
                    <h2 id='up-arrow'>↑</h2>
                    <h3>{configureUps(ups)}</h3>
                    <h2 id='down-arrow'>↓</h2>
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
                            <p>Posted by: <span style={{color: 'blue'}}>{author}</span></p>
                        </div>
                        <div className='post-time'>
                            <p>{getHourDiff()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}