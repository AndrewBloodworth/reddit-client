import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectFeed } from './feedSlice';
import { Post } from '../post/Post';

export const Feed = () => {
    const { feed, isLoadingPosts } = useSelector(selectFeed);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        dispatch(getPosts());
    }, [dispatch])

    const makePosts = () => {
        if (!feed.data) return
        console.log('Feed', feed.data.children)
        return feed.data.children.map(post => {
            console.log('Post', post, 'Hint', post.data.post_hint)
            const { title,
                    thumbnail,
                    thumbnail_height,
                    thumbnail_width,
                    id,
                    ups,
                    author,
                    secure_media,
                    post_hint } = post.data;
            return (
                <Post
                    key={id}
                    post_hint={post_hint}
                    post_data={post.data}
                    title={title}
                    thumbnail={{img: thumbnail, h: thumbnail_height, w: thumbnail_width}}
                    ups={ups}
                    author={author}
                    media={secure_media} />
            )
        })
        
    }

    return (
        <div className='feed'>
            {isLoadingPosts ? <h2>Loading...</h2> : makePosts()}
        </div>
    )

}