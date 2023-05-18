"use client"

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


interface MyProps{
  getData: (name: string, email: string) => Promise<number>;
}

export default function Send({getData}:MyProps) {
  
  const requestName = useAppSelector((state) => state.registerNameReducer.value);
  const requestEmail = useAppSelector((state) => state.registerEmailReducer.value);
  console.log(requestName);
  console.log(requestEmail);

  const [data, setData] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      const data_ = await getData(requestName, requestEmail);
      console.log("send.tsx : ", data_);
      setData(data+1);
      console.log("hello");
    }
    
    fetchData();
    
  }, [requestName, requestEmail]);

  return(
    <div>
      <h2> ?? </h2>
      <h1> hello : {data} </h1>
    </div>
  ) 
}
