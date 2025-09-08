import { createSlice } from "@reduxjs/toolkit";

const detail = createSlice({
  name: 'detail',
  initialState: {
    cnt: 0,
  },
  reducers: {
    addCnt(state) {
      state.cnt += 1; 
    },
    minusCnt(state) {
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      const regex = /^[0-9]+$/; // 정규표현식 
      if(regex.test(action.payload)) {
        state.cnt = parseInt(action.payload);
      } else {
        console.log('넘버 아님', action.payload);

      // if(typeof(action.payload) === 'number') {
      //   state.cnt = action.payload;
      // } else {
      //   console.log('넘버 아님');
      // }
      }
    },
  }  
});

export const {
  addCnt,
  changeCnt,
  minusCnt
} = detail.actions;

export default detail.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const detail = createSlice({
//   name: 'detail',
//   initialState: {
//     inputValue: '',
//     num: 0,
//   },
//   reducers: { 
//     updateinputValue(state, action) {
//       state.inputValue = action.payload
//     },
//     addNum(state) {
//       state.num += 1;
//     }, 
//     minusNum(state) {
//       state.num -= 1; 
//     },
//     changeNum(state, action) {
//       state.num = action.payload;
//     },
//   }
// });

// export const {
//   updateinputValue,
//   addNum,
//   changeNum,
//   minusNum
// } = detail.actions;

// export default detail.reducer;