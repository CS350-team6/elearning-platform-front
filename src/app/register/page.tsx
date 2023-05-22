import axios from 'axios';
import Main from './display';



export default function Register() {
  async function getData(id: string, pw: string): Promise<boolean> {
    'use server';


    try {
      // https://elearning-back.fly.dev/
    const response = await axios.post('https://elearning-back.fly.dev/user_account/signup/', {
      "email": id,
      "password": pw,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
       return Boolean(response.data.result);
    
    } catch (error) {
      // console.error(error)
      // console.log("?")

    }
    return false;
  }

  return (
    <div>
        <Main getData={getData}/>
    </div>
  );
}