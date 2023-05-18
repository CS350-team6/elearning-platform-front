

import axios from 'axios';
import Main from './display';
import Send from './Send';





export default function Register() {

  async function getData(name: string, email: string): Promise<number> {
    "use server"
    console.log(name);
    console.log(email);
  
    try {
  
      const response = await axios.post('http://localhost:8000/users', {
        name: name,
        email: email,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("start");
      console.log(response.data); // 서버로부터 받은 응답 데이터를 출력
      console.log("end");
  
      
    } catch (error) {
      console.error(error); // 에러 발생 시 에러를 출력
  
    }
    return 1;
  }
  
  return (
    <div>
      <Main />
      <Send getData={getData} />
      <h1> ? </h1>
    </div>
  );
}
