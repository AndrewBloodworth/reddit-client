import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, selectFeed } from './feedSlice';
import { Post } from '../post/Post';

export const Feed = () => {
    const { feed, isLoadingPosts } = useSelector(selectFeed);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const makePosts = () => {
        if (!feed.data) return
        return feed.data.children.map(post => {
            console.log('Post', post, 'Hint', post.data.post_hint)
            return (
                <Post
                    key={post.data.id}
                    post_data={post.data}
                     />
            )
        })
    }
    return (
        <div className='feed'>
            {isLoadingPosts ? <h2>Loading...</h2> : makePosts()}
        </div>
    )

}