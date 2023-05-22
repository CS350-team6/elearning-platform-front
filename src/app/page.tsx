import axios from 'axios';

async function getData(): Promise<boolean> {
    'use server';
    console.log("in page.tsx");

    try {
      // https://elearning-back.fly.dev/
    const response = await axios.post('http://127.0.0.1:8000/user_account/signup/', {
      "email": "1",
      "password": "2",
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log("!")
    return true;
    
    } catch (error) {
      // console.error("error")
      console.log("?")

    }
    return false;
  }

export default function Test() {
  
    const fetchData = async () => {
        const result = await getData();
        console.log(result);
    }; 
    fetchData()
     
  return (
    <div>
        client server 
    </div>
  );
}