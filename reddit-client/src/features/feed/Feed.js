import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectFeed } from './feedSlice';
import { Post } from '../post/Post';

export const Feed = () => {
    const { feed, isLoadingPosts, failedToLoadPosts } = useSelector(selectFeed);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect')
        dispatch(getPosts());
    }, [dispatch])

    const makePosts = () => {
        if (!feed.data) return
        console.log('Feed', feed.data.children)
        return feed.data.children.map(post => {
            console.log('Post', post)
            const { title, thumbnail, id } = post.data;
            return (
                <Post
                    key={id}
                    title={title}
                    thumbnail={thumbnail} />
            )
        })
        
    }

    return (
        <div className='feed'>
            {isLoadingPosts ? <h2>Loading...</h2> : makePosts()}
        </div>
    )

}