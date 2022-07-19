
// 💚 리덕스 모듈에 지정
// 액션타입, 액션 생성함수, 초기값, reducer

// 🔻 초기값
const initialState = 0; // 상태가 꼭 객체일 필요는 없음
 
// 🔻 액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 🔻 (내보내기) 액션 생성함수 = 액션을 return 해주는 함수
export const increase = () => ({ type : INCREASE }) // increase 실행되면 { ... } 리턴해줌
export const decrease = () => ({ type : DECREASE }) // 객체를 리턴함 🧡
// increase() ==> 리턴 ==> { type : INCREASE }

// 🔻 딜레이
export const increaseAsync = () => dispatch => { // 함수를 리턴함 🧡 객체뿐 아닌 함수도 실행시킬 수 있음
    setTimeout(() => dispatch(increase()), 1000);
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
} 

// 두개 똑같음
// dispatch({ type : INCREASE })
// dispatch({ increase() })

// 🔻 (내보내기) reducer
export default function Counter(state = initialState , action) {
    switch(action.type) {
        case INCREASE :
        return state + 1;

        case DECREASE :
        return state - 1;
        
        default :
        return state;
    }
}