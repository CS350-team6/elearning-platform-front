"use client";

import { incrementByAmount } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
interface MyProps{
  response : number;
}



export default function Data({response}:MyProps) {
  console.log("??")
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const apply = () => {
    dispatch(incrementByAmount(response+4))
  }

  // html 컴포넌트
  return(
    <div>
      <button onClick={(e) => console.log(e.target)}>apply</button>
      <div>{response}</div>
      <div>{count}</div>
    </div>
  )
}