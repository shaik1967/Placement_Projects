import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    // Replace with your upload URL
    axios.post('https://your-upload-url.com/upload', formData)
      .then(response => {
        console.log('File uploaded successfully', response);
      })
      .catch(error => {
        console.error('Error uploading file', error);
      });
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
