// 💚 미들웨어를 우리가 직접 만들 일은 없을거임
// 그냥 어떻게 동작하는지 보기위해

// 전달 받은 액션을 출력하고 다음으로 넘기기
const MyLogger = store => next => action => {
    // console.log(store);
    // console.log(next);
    console.log(action); // 액션을 출력 // ex > {type: 'DECREASE'}
    const result = next(action); // next = 다음 미들웨어 있으면 넘기기, 없으면 리듀서에게 넘기기
    console.log('\t', store.getState()); // ex > {Counter: 0}
    return result; // 여기서 반환하는 값은 dispatch(액션)의 결과물이 됩니다. 기본 : undefined
};

export default MyLogger;