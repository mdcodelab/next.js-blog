"use client";

import { useState, useEffect } from "react";

function RadioPlayer() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchRadio = async () => {
      try {
        
          const response = await fetch("https://api.allorigins.win/raw?url=http://api.radioparadise.com/api/now_playing");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const nowPlaying = await response.json();
        setData(nowPlaying);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching radio data:", error);
        setLoading(false);
      }
    };

    fetchRadio();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (data) {
    return (
      <div className="container-player">
        <h1>Radio Paradise</h1>
        <audio controls autoPlay>
          <source
            src="http://stream.radioparadise.com/flac"
            type="audio/flac"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="div-now-playing">
          <div>
            <p>
              <strong>Artist:</strong> {data.artist || "Unknown"}
            </p>
            <p>
              <strong>Title:</strong> {data.title || "Unknown"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div className="text-white">No data available.</div>;
}

export default RadioPlayer;
