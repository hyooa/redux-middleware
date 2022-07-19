import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/Counter';

const CounterContainer = (props) => {
    // 스토어에 접근하는 방법, 상태값은 함수 사용해서 받아옴
    // useSelecter = getState 와 같음
    const number = useSelector(state => state.Counter)
    const dispatch = useDispatch();

    // action타입은 누가 만듦?, action객체는 ? 액션생성함수로 리턴 받음
    const onIncrease = () => {
        // dispatch( increase() );
        dispatch( increaseAsync() ); // 딜레이
    }
    const onDecrease = () => {
        // dispatch( decrease() );
        dispatch( decreaseAsync() ); // 딜레이
    }

    return (
        <Counter 
        number={number}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        />
    );
};

export default CounterContainer;