'use client';
import React, { useState } from 'react';

export default function UploadMain() {
  const [success, setSuccess] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    console.log("!")
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);
      console.log(formData);
    }
    setSuccess(true);
    
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {success &&
        selectedFiles.map((file, index) => (
          <div key={index}>
            <p>Uploaded File: {file.name}</p>
            {/* 추가적인 업로드 정보 또는 UI 요소 */}
          </div>
        ))}
    </div>
  );
}