import axios from 'axios';
import Main from './display';

export default function Register() {

  async function getData(id: string, pw: string): Promise<boolean> {
    "use server"
  
    try {
      // response는 json 형식으로 response = { result : <boolean>, type: <number>} type : 0->success 1->id 2->pw
      const response = await axios.post('http://localhost:8000/user_account/signup', {
        userId: id,
        userPw: pw,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // response를 json parse를 통해서 response result를 추출하기

      return Boolean(response.data.result);
      
    } catch (error) {
      console.error(error); 
  
    }
    return false;
  }
  
  return (
    <div>
      <Main getData={getData}/>
    </div>
  );
}