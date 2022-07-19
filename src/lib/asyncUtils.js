// 💚 thunk 함수
// ⭐⭐ 리팩터링(refactoring) - 반복되는걸 줄이겠다. - 결과의 변경 없이 코드의 구조를 재조정함 ⭐⭐

// GET_POSTS --> type에 담겨있음
export const createPromiseThunk = (type, promiseCreator) => {
    const [ SUCCESS, ERROR ] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        dispatch({ type, param }) // 요청 시작
        
        try{
            const payload = await promiseCreator(param); // API호출
            console.log("여기에요",payload);
            dispatch({ type : SUCCESS, payload }); // 요청 성공 , posts 전달
        }
        catch(e) {
            dispatch({ type : ERROR, payload : e, error : true }) // 요청 실패 , error 전달
        }
    }
}

// 🔻 리듀서에서 사용할 수 있는 유틸함수
export const reducerUtils = {
    initial : (initialData = null) => ({ // {} 객체 리턴, ()로 한 번 감싸주기
        loading : false,
        data : initialData,
        error : null
    }),
    loading : (prevState = null) => ({
        loading : true,
        data : prevState,
        error : null
    }),
    success : payload => ({
        loading : false,
        data : payload,
        error : null
    }),
    error : error => ({
        loading : false,
        data : null,
        error : error
    })
}