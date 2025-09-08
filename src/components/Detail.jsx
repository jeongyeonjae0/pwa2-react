import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail';
import { useState } from 'react';

function Detail() {
  const dispatch = useDispatch();

  const cnt = useSelector(state => state.detail.cnt); 

  const [inputNum, setInputNum] = useState(0);

  // const convertAndSetNumber = (val) => {
  //   if(!isNaN(val)) {
  //     setInputNum(parseInt(val));
  //   } else {
  //     console.error('숫자 아니다.');
  //   }
  // }
  const convertAndSetNumber = (e) => {
    if(!isNaN(e.target.value)) {
      setInputNum(parseInt(e.target.value));
    } else {
      console.error('숫자 아니다.');
    }
  }

  // const inputValue = useSelector(state => state.detail.inputValue) 
  // const handleChange = (e) => {updateinputValue(e.target.value)}
  // const Num = useSelector(state => state.detail.num) 
  // const dispatch = useDispatch();

  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange= {convertAndSetNumber}/>
      {/* <input type="number" onChange={(e) => { convertAndSetNumber(e.target.value) }}/> */}
      <button type="button" onClick={() => { dispatch(changeCnt(inputNum))}}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;