import axios from 'axios';

export async function getData(id: string, pw: string): Promise<boolean> {

  "use server";
  try {
    // response는 json 형식으로 response = { result : <boolean>, type: <number>} type : 0->success 1->id 2->pw
    const response = await axios.post('https://elearning-back.fly.dev/user_account/signup', {
      userId: id,
      userPw: pw,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return Boolean(response.data.result);
    
  } catch (error) {
    console.error(error); 

  }
  return false;
}
export default function Register() {
  
  return (
    <div>
        hello
    </div>
  );
}