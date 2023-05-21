import axios from 'axios';
import Main from './display';

export default function Register() {

  async function getData(id: string, pw: string): Promise<boolean> {
    return true;
  }
  
  return (
    <div>
      <Main getData={getData}/>
    </div>
  );
}