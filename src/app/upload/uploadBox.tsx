// 'use client';
// import React, { useState, useRef, useEffect} from 'react';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
// import { setLectureList} from '@/redux/features/videoSearchSlice';
// import { useUploadVideoMutation } from '@/redux/services/uploadApi';
// import { Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// export default function UploadBox() {
//   const [semester, setSemester] = useState<string>('');
//   const [year, setYear] = useState<string>('');
//   const [lecture, setLecture] = useState<string>('');
//   const lectureList = useAppSelector((state) => state.searchReducer.lectureList);
//   const dispatch = useAppDispatch();

//   const [uploadVideo, { isLoading, error }] = useUploadVideoMutation();
//   const [selectedFile, setSelectedFile] = useState<File>();
  
//   const [title, setTitle] = useState<string>('');
//   const [description, setDescription] = useState<string>('');
//   const [isFormVisible, setFormVisible] = useState<boolean>(false);

//   const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // upload 서버 통신 -> upload URL 찾기
//     // thumbnail 만들기

//     if (selectedFile) {
//       const instructor = "hello";
//       const response = await uploadVideo({file: selectedFile, title });
//       console.log("?",response);
//     }

//     setFormVisible(false);
//   };

 

//   return (
//     <div className='uploadBoxMain'>
//       {!isFormVisible && (
//         <Button variant="contained" color="primary" onClick={() => setFormVisible(true)}>
//           New Video
//         </Button>
//       )}
//       {isFormVisible && (
//         <form onSubmit={handleUpload}>
//           <input
          
//             id="upload-file"
//             type="file"
//             accept="video/*"
//             onChange={(e) => setSelectedFile(e.target.files?.[0])}
//           />
//           <TextField
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Enter video title"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Enter video description"
//             variant="outlined"
//             fullWidth
//             multiline
//             rows={4}
//             margin="normal"
//           />

//           <FormControl variant="filled" fullWidth margin="normal">
//             <InputLabel id="year-label">Year</InputLabel>
//             <Select
//               labelId="year-label"
//               id="year"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//             >
//               <MenuItem value=""><em>Select a year</em></MenuItem>
//               <MenuItem value={"2020"}>2020</MenuItem>
//               <MenuItem value={"2021"}>2021</MenuItem>
//               <MenuItem value={"2022"}>2022</MenuItem>
//               <MenuItem value={"2023"}>2023</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl variant="filled" fullWidth margin="normal">
//             <InputLabel id="semester-label">Semester</InputLabel>
//             <Select
//               labelId="semester-label"
//               id="semester"
//               value={semester}
//               onChange={(e) => setSemester(e.target.value)}
//             >
//               <MenuItem value=""><em>Select a semester</em></MenuItem>
//             <MenuItem value={"1"}>Spring</MenuItem>
//             <MenuItem value={"2"}>Summer</MenuItem>
//             <MenuItem value={"3"}>Fall</MenuItem>
//             <MenuItem value={"4"}>Winter</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl variant="filled" fullWidth margin="normal">
//             <InputLabel id="lecture-label">Lecture</InputLabel>
//             <Select
//               labelId="lecture-label"
//               id="lecture"
//               value={lecture}
//               onChange={(e) => setLecture(e.target.value)}
//             >
//               {lectureList.map((lecture) => (
//                 <MenuItem key={lecture} value={lecture}>
//                   {lecture}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Button variant="contained" color="primary" type="submit" style={{ marginTop: '15px' }}>
//             Upload
//           </Button>
//         </form>
//       )}
//     </div>
//   );
// }