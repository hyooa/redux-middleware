// 💚 api 함수 만들어주기, 나중에 받아오기위해

// n 으로 입력한 시간만큼 기다렸다가 동작
// n 밀리세턴드 동안 기다리는 프로미스를 만들어주느 함수
// promise 객체는 resolve reject 받음 , 성공-실패
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id : 1,
        title : "리덕스 미들웨어를 공부하다 !",
        body : "리덕스 미들웨어를 만들다 !",
    },
    {
        id : 2,
        title : "redux-thunk를 사용하자 !",
        body : "redux-thun를 사용해서 비동기 작업을 처리하자 !",
    },
    {
        id : 3,
        title : "redux-saga도 공부하자 !",
        body : "나중엔 redux-saga를 사용해서 비동기 작업을 처리해보자 !",
    }
]

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(500); // 0.5s 쉬고 posts 리턴해죵 !
    return posts;
}

// ID로 포스트를 조회하는 비동기 함수
export const getPostsById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id); // id로 찾아서 반환 // find() 하나만 찾아줌
}