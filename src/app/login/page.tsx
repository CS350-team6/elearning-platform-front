import axios from 'axios';
import Main from './display';

export default function Login() {

  async function getData(id: string, pw: string): Promise<object> {
    "use server"
  
    try {
      // response를 boolean 형태로 받아와서 return response으로 바꾸기.
      // const response = await axios.post('https://elearning-back.fly.dev/user_account/login', {
      //   userId: id,
      //   userPw: pw,
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // console.log("login page : ", response.data);
      // return response.data;
      return {result: "true"};
      
    } catch (error) {
      console.error(error);
      type MyObject = {
        result: boolean,
        error: string,
        
      }
      const errorMsg: MyObject = {
        result : false,
        error : "error"
      } 
      return errorMsg;
    }
    
  }
  
  return (
    <div>
      <Main getData={getData}/>
    </div>
  );
}
