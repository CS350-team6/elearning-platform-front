import axios from 'axios';
import { useState } from 'react';

async function getData(): Promise<string> {

    
    return axios.post('http://localhost:8000/test', {
        name: 'Dexter',
        email : "dohye0807"
    },{
        headers:{
            'Content-Type' : 'application/json',
        },
    })
    .then((response) => {
        console.log(response); // 서버로부터 받은 응답 데이터를 출력
        return "success";
    })
    .catch((error) => {
        console.error(error); // 에러 발생 시 에러를 출력
        return "fail";
    });

   
  }
   
  export default async function Page() {
    const [data, setData] = useState("default")
    
    const test =  async () => {
        const data_: string = await getData();
        setData(data_)
        console.log(data_);
    }
    return (
        <div>
            <button onClick={() => test()}>

            </button>
           {data}
        </div>
    )
}