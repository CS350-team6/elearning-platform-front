import axios, {AxiosResponse} from 'axios';
import UploadMain from './display';

export default function Upload() {
  async function uploadVideo(video:File,  title:string, desc:string, lecture:string, year:string, semester:string): Promise<{result:boolean }>{
    'use server';
    try {
      // https://elearning-back.fly.dev/
      const bodyData = {
        "video_file": video,
        "title" : title,
        "description" : desc,
        "lecture" : lecture,
        "year" : year,
        "semester": semester
      }
      console.log(bodyData)
    const response = await axios.post('http://127.0.0.1:8000/video/', bodyData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
       return response.data.result;
    
    } catch (error) {
      // console.log(error);
      return {"result": false};
    }
  }

  async function getLectureData(id: string, pw: string, title: string, desc: string): Promise<{ result:boolean, title:[]}> {
    'use server';

    try {
      // https://elearning-back.fly.dev/
    const response = await axios.post('http://127.0.0.1:8000/user_account/searchTest/', {
      "postVideo": id,
      "postThumb": pw,
      "postTitle" : title,
      "postDesc" : desc
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      //  console.log("!");
       return response.data;
    
    } catch (error) {
      // console.error(error)
      // console.log("?")
      return {"result": false, "title":[]};
    }
    
  }

  async function getVideoData(lecture: string): Promise<{result:boolean, video: string[]}> {
    "use server";
    try {
 
      const response: AxiosResponse<string[]> = await axios.get(`http://127.0.0.1:8000/user_account/videoTest/?lecture=${lecture}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      
      console.log(response.data);
      // const blob = new Blob([response.data], { type: 'video/mp4' });
      // const videoUrl: string[] = URL.createObjectURL(blob);
    
  
      return {
        result: true,
        video: response.data
      };

    } catch (error) {
      console.error(error);
      console.log("page.tsx line67 : error")

      return {
        result: false,
        video: []
      };
    }
  }
  return (

    <div>
      
        <UploadMain getLectureData={getLectureData} getVideoData={getVideoData} uploadVideo={uploadVideo}/>      
    </div>
  );
}