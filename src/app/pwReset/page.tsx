import Main from './display';
import axios from 'axios';

export default async function pwReset(){
  async function getData(email: string): Promise<boolean> {
    "use server"
  
    try {
  
      // const response = await axios.post('https://elearning-back.fly.dev/user_account/pwreset', {
      //   email: email,
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // console.log("res : ",response.data);
      const response = {
        result : "true",
        temp_password : "abcd"
      }
      return Boolean(response.result);
      
    } catch (error) {
      console.error(error); // 에러 발생 시 에러를 출력
  
    }
    return false;
  }
  
    return (
      <div>
        <Main getData={getData}/>
      </div>
    )
  }