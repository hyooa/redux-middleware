import { combineReducers } from "redux"; // 💚 여러개의 모듈 reducer를 합칠 수 있음
import Counter from './Counter';
import posts from "./posts";

const rootReducer = combineReducers({ Counter, posts })
export default rootReducer; // 합쳐진 reducer