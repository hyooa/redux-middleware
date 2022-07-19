// 액션 타입, 액션 생성함수, 초기값, 리듀서(reducer)
// 프로미스가 시작, 성공, 실패 했을 때 다른 액션을 디스패치 해야함
// 각 프로미스마다 thunk 함수를 만들어 주어야 함
// 리듀서에서 액션에 따라 로딩중, 결과, 에러 상태를 변경 // Async Hook 과 비슷하게 관리

// as는 " postAPI " 이런 이름으로 받겠다 ~
// API/posts 안의 함수 모두 불러오기
import * as postAPI from '../API/posts';
// thunk 함수 // ⭐ 리팩터링(refactoring) ⭐
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// 🔻 초기값
const initialState = {
    // posts : {
    //     loading : false,
    //     data : null,
    //     error : null
    // },
    // post : {
    //     loading : false,
    //     data : null,
    //     error : null
    // }
    // ⭐ 반복되는 초기값 {}를 initial를 실행하여 리턴 받음
    posts : reducerUtils.initial(),
    post : reducerUtils.initial(),
}

// 🔻 액션 타입 지정

// 포스트를 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST"; // 요청 시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS"; // 요청 성공
const GET_POST_ERROR = "GET_POST_ERROR"; // 요청 실패

// 🔻 thunk 함수, getPosts 호출 되면 dispatch

// 여러개 조회하는 함수
// export const getPosts = () => async dispatch => {
//     dispatch({ type : GET_POSTS }) // 요청 시작
//     try{
//         const posts = await postAPI.getPosts(); // API호출
//         dispatch({ type : GET_POSTS_SUCCESS, posts }); // 요청 성공 , posts 전달
//         // dispatch({ type : GET_POSTS_SUCCESS, posts : posts });
//     }
//     catch(e) {
//         dispatch({ type : GET_POSTS_ERROR, error : e }) // 요청 실패 , error 전달
//     }
// }
// ⭐
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);

// 하나만 조회하는 함수
                    // id 받기
// export const getPost = id => async dispatch => {
//     dispatch({ type : GET_POST }) // 요청 시작
//     try{
//         const post = await postAPI.getPostsById(id); // API호출
//         dispatch({ type : GET_POST_SUCCESS, post }); // 요청 성공 , posts 전달
//         // dispatch({ type : GET_POSTS_SUCCESS, posts : posts });
//     }
//     catch(e) {
//         dispatch({ type : GET_POST_ERROR, error : e }) // 요청 실패 , error 전달
//     }
// }
// ⭐
export const getPost =createPromiseThunk(GET_POST, postAPI.getPostsById);

// 🔻 리듀서 만들기
export default function posts(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts : reducerUtils.loading()
                // posts : {
                //     loading : true,
                //     data : null,
                //     error : null
                // }
            }
        case GET_POSTS_SUCCESS :
            return {
                ...state,
                posts : reducerUtils.success(action.payload)
                // posts : {
                //     loading : false,
                //     data : action.posts,
                //     error : null
                // }
            }
        case GET_POSTS_ERROR :
            return {
                ...state,
                posts : reducerUtils.error(action.error)
                // posts : {
                //     loading : false,
                //     data : null,
                //     error : action.error
                // }
            }

        case GET_POST :
            return {
                ...state,
                post : reducerUtils.loading()
                // post : {
                //     loading : true,
                //     data : null,
                //     error : null
                // }
            }
        case GET_POST_SUCCESS :
            return {
                ...state,
                post : reducerUtils.success(action.payload)
                // post : {
                //     loading : false,
                //     data : action.post,
                //     error : null
                // }
            }
        case GET_POST_ERROR :
            return {
                ...state,
                post : reducerUtils.error(action.error)
                // post : {
                //     loading : false,
                //     data : null,
                //     error : action.error
                // }
            }
        
        default :
        return state;
    }
}
