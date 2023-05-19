import Main from './display';
import axios from 'axios';

export default async function pwReset(){
  async function getData(id: string): Promise<string> {
    "use server"
  
    try {
  
      const response = await axios.post('http://localhost:8000/users', {
        name: id,
        email: '',
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("res : ",response.data);
      return "send email"
      
    } catch (error) {
      console.error(error); // 에러 발생 시 에러를 출력
  
    }
    return "send fail";
  }
  
    return (
      <div>
        <Main getData={getData}/>
        Here Display for pwreset
      </div>
    )
  }