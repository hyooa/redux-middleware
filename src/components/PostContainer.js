import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from './Post';

const PostContainer = ({ postId }) => {
    const { data, loading, error } = useSelector(state => state.posts.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost(postId));
    }, [dispatch, postId])
    if(loading) return <div>LOADING 😵</div>;
    if(error) return <div>ERROR 🚨</div>;
    if(!data) return <div>NO DATA 👀</div>;
    
    return (
        <Post post={data}></Post>
    );
};

export default PostContainer;