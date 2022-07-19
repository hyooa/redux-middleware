import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getPosts } from '../API/posts';
import { getPosts } from '../modules/posts';
import PostList from './PostList';


const PostListContainer = () => { // 객체구조분해할당
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    // 컴포넌트 마운트 후 포스트 목록 요청하기 useEffect
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    if(loading) return <div>로딩이양</div>;
    if(error) return <div>에러양</div>;
    if(!data) return <div>데이터 없오 !!!!</div>;

    return (
        <PostList posts={data} />
    );
};

export default PostListContainer;