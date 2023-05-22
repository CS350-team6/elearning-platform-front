import axios from 'axios';

export async function getData(id: string, pw: string): Promise<boolean> {
    "use server";
    try {
    console.log(id);
    console.log(pw);
    // response는 json 형식으로 response = { result : <boolean>, type: <number>} type : 0->success 1->id 2->pw
    const response = await axios.post('https://elearning-back.fly.dev/user_account/signup', {
      email: id,
      password: pw,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return true;
    
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