import axios from 'axios';
import Main from './display';
import Send from './Send';

export default function Register() {

  async function getData(id: string, pw: string): Promise<number> {
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

      
    } catch (error) {
      console.error(error); // 에러 발생 시 에러를 출력
  
    }
    return 1;
  }
  
  return (
    <div>
      <Main getData={getData}/>
     
    </div>
  );
}
