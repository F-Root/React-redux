/* store 하나만 사용 (react-redux 사용) */
// import { createStore } from 'redux';

// //state: 현재 상태값 / action: 사용자가 dispatch로 보낸 값
// const reducer = (state, action) => {
//   if (action.type === 'UP') {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };

// //initialState: 초기상태(값)
// const initialState = {
//   value: 0,
// };

// //store: reducer(기능)와 state(값)를 저장하는 데이터
// const store = createStore(reducer, initialState);

// export default store;

/* slice 사용 (redux toolkit 사용) */
import { configureStore } from '@reduxjs/toolkit';
import counterUp from './countUpSlice';
import countDown from './countDownSlice';

const store = configureStore({
  reducer: {
    countUp: counterUp.reducer,
    countDown: countDown.reducer,
  },
});
export default store;
