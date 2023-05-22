import axios from 'axios';
import LoginMain from './display';

export default function Login() {
  async function getData(id: string, pw: string): Promise<boolean> {
    'use server';

    try {
      // https://elearning-back.fly.dev/
    const response = await axios.post('https://elearning-back.fly.dev/user_account/login/', {
      "email": id,
      "password": pw,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
       console.log("!");
       return Boolean(response.data.result);
    
    } catch (error) {
      // console.error(error)
      console.log("?")
      return false;
    }
    
  }

  return (
    <div>
        <LoginMain getData={getData}/>
    </div>
  );
}