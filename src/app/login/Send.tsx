"use client"

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';


interface MyProps{
  getData: (name: string, email: string) => Promise<number>;
}

export default function Send({getData}:MyProps) {
  
  const requestID = useAppSelector((state) => state.registerIDReducer.value);
  const requestPW = useAppSelector((state) => state.registerPWReducer.value);

  const [data, setData] = useState<number>(1);
  console.log("hi");
  
  useEffect(() => {
    async function fetchData() {
      const data_ = await getData(requestID, requestPW);
      console.log("send.tsx : ", data_);
      setData(data+1);
      console.log("hello");
    }
    
    fetchData();
    
  }, [requestID, requestPW]);

  return(
    <div>
      <h2> ?? </h2>
      <h1> hello : {data} </h1>
    </div>
  ) 
}
