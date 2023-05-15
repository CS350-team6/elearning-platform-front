import axios from 'axios';
import Data from './data';
import Second from './second';


async function getData(): Promise<number> {
return axios.post('http://localhost:8000/users', {
    name: 'Dexter',
    email : "dohye0807"
  },{
    headers:{
      'Content-Type' : 'application/json',
    },
  })
  .then((response) => {
    console.log("start")
    console.log(response.data); // 서버로부터 받은 응답 데이터를 출력
    console.log("end")
    return 10;
  })
  .catch((error) => {
    console.error(error); // 에러 ㄴ발생 시 에러를 출력
    return 1;
  });

   
  }

  
   
export default async function Test(){
  const data_: number = await getData();
  console.log(data_);
  console.log("!");

  return (
    <div>
      <Data response={data_}/>
      {/* <Second response={data_}/> */}
    </div>
  )
}