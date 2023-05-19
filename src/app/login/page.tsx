import axios from 'axios';
import Main from './display';

export default function Login() {

  async function getData(id: string, pw: string): Promise<boolean> {
    "use server"
  
    try {
  
      const response = await axios.post('http://localhost:8000/users', {
        name: id,
        email: pw,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return true;
      
    } catch (error) {
      console.error(error); // 에러 발생 시 에러를 출력
      return false;
    }
    
  }
  
  return (
    <div>
      <Main getData={getData}/>
    </div>
  );
}
