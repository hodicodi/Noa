import React, { ChangeEvent, FC, useState } from "react";
import { ipAdress, routeInServer } from "./audioUpload.consts.tsx";

type SongData = {
  title: string;
  artist: string;
  genre: string;
};

const AudioUpload: FC = () => {
  const [mp3File, setMp3File] = useState<File | null>(null);
  const [songData, setSongData] = useState<SongData>({
    title: "song4",
    artist: "amgosha",
    genre: "Rock",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMp3File(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mp3File) return alert("Please select an mp3 file");

    const formData = new FormData();
    formData.append("audioFile", mp3File);

    formData.append("title", songData.title);
    formData.append("artist", songData.artist);
    formData.append("genre", songData.genre);

    try {
      const response = await fetch(`${ipAdress}` + `${routeInServer}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Upload successful!");
      }
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".mp3" onChange={handleFileChange} />
      <input type="text" placeholder="Title" onChange={(e) => setSongData({ ...songData, title: e.target.value })} />
      <button type="submit">Upload Song</button>
    </form>
  );
};

export default AudioUpload;
