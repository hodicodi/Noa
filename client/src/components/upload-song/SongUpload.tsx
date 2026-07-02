import React, { useState, ChangeEvent } from 'react';


interface SongData {
  title: string;
  artist: string;
  genre: string;
}

const AudioUpload: React.FC = () => {
  const [mp3File, setMp3File] = useState<File | null>(null);
  const [songData, setSongData] = useState<SongData>({
    title: "song4",
    artist: "amgosha",
    genre: "Rock"
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // 1. Create a File object directly from the event (or a Blob)
      const file = e.target.files[0];
      setMp3File(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mp3File) return alert('Please select an mp3 file');

    // 2. Initialize FormData and append both file and raw data
    const formData = new FormData();
    formData.append('audioFile', mp3File);
    
    // Append raw body data
    formData.append('title', songData.title);
    formData.append('artist', songData.artist);
    formData.append('genre', songData.genre);

    try {
      const response = await fetch('http://localhost:3000/songs/api/upload', {
        method: 'POST',
        body: formData, // Automatically sets headers for multipart/form-data
      });

      if (response.ok) {
        alert('Upload successful!');
      }
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input implementation */}
      <input type="file" accept=".mp3" onChange={handleFileChange} />
      <input type="text" placeholder="Title" onChange={(e) => setSongData({...songData, title: e.target.value})} />
      <button type="submit">Upload Song</button>
    </form>
  );
};

export default AudioUpload;
