import { redirect } from 'next/navigation';
export default async function Home() {
    redirect('/home');
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