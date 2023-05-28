'use client';
import React, { useState, useRef, useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setLectureList, setYear, setLecture, setSemester } from '@/redux/features/videoSearchSlice';

interface MyProps{
  uploadVideo: (video:File, title:string, desc:string, lecture:string, year:string, semester:string) => Promise<{result:boolean }>;
  children?: React.ReactNode;
}

export default function UploadBox({uploadVideo}:MyProps) {
  const semester = useAppSelector((state) => state.searchReducer.semester);
  const year = useAppSelector((state) => state.searchReducer.year);
  const lecture = useAppSelector((state) => state.searchReducer.lecture);
  const lectureList = useAppSelector((state) => state.searchReducer.lectureList);
  const dispatch = useAppDispatch();

  let formData: FormData = new FormData();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [video, setVideo] = useState<File>();
  // const [video, setVideo] = useState<string>('');
  // const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [isFormVisible, setFormVisible] = useState<boolean>(false);

  
  
  const handleUploadClick = () => {
    setFormVisible(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      setVideo(file);
      // generateThumbnail(file);
      setSelectedFile(file || null);   
    }  
  };

  // const generateThumbnail = (videoFile: File) => {
  //   const videoElement = document.createElement('video');
  //   videoElement.src = URL.createObjectURL(videoFile);

  //   videoElement.addEventListener('loadeddata', () => {
  //     const canvas = document.createElement('canvas');
  //     canvas.width = videoElement.videoWidth;
  //     canvas.height = videoElement.videoHeight;
  //     const context = canvas.getContext('2d');

  //     if (context) {
  //       context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  //       const thumbnailUrl = canvas.toDataURL();
  //       setThumbnail(thumbnailUrl);
  //     }
  //   });
  // };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      
      formData.append('file', selectedFile);
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, selectedFile]);
    }
    
    // server로 비디오 파일 업로드 요청 보내기
    
    try {
      console.log(video);
      if (video){
          const response: {result: boolean} = await uploadVideo(video, title, description, lecture, year,semester)
      }
          
    } catch (error){
      console.error("error")
    }

    
    console.log("useState selectedfile : ", selectedFile);
    
    setSuccess(true);
    setSelectedFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    dispatch(setYear(''));
    dispatch(setSemester(''));
    dispatch(setLecture(''));
    setFormVisible(false);
    setDescription('')
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value)
  }


  return (
    <div className='uploadBoxMain'>
      {!isFormVisible &&(
        <button onClick={() => setFormVisible(true)}> New Video </button>
      )}
      {isFormVisible && (
        <form onSubmit={handleUpload}>
          
          <input type="file" accept="video/*" onChange={handleFileChange} />
          <textarea value={title} onChange={handleTitleChange} placeholder="Enter video title"/>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter video description"
          />
        <br/>
        <label htmlFor="year">year:</label>
        <select id="year" name="year" value={year} onChange={(e) => dispatch(setYear(e.target.value))}>
          <option value="">Select a year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <br />
        <label htmlFor="semester">semester:</label>
        <select id="semester" value={semester} onChange={(e) => dispatch(setSemester(e.target.value))}>
          <option value="">Select a semester</option>
          <option value="1">Spring</option>
          <option value="2">Summer</option>
          <option value="3">Fall</option>
          <option value="1">Winter</option>
        </select>
        <br />
        <label htmlFor="lecture">lecture:</label>
        <select id="lecture" value={lecture} onChange={(e) => dispatch(setLecture(e.target.value))}>
          <option value="">Select a Lecture</option>
          {lectureList.map((lecture) => (
            <option key={lecture} value={lecture}>
              {lecture}
            </option>
          ))}
        </select>

          <button type="submit">Submit</button>
        </form>
      )}
      {/* {
        success &&
        selectedFiles.map((file, index) => (
          <div key={index}>
            <p>Uploaded File: {file.name}</p>
            {video && <video src={video} controls style={{ width: '33.33%', height: '33.33%' }}/>}
            {thumbnail && <img src={thumbnail} alt="Thumbnail" style={{ width: '33.33%', height: '33.33%' }}/>}
          </div>
        ))
      } */}
    
    </div>
  )
}