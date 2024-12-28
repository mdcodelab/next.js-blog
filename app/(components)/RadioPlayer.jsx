
import { fetchRadio } from "../../utilities/fetchRadio"; // Asigură-te că importi corect funcția

async function RadioPlayer() {
  const data = await fetchRadio();

  console.log("++++++++++++++++++++", data);

  if (data.nowPlaying) {

    return (
      <div className="container-player">
        <h1>Radio Paradise</h1>
        <audio controls autoPlay>
          <source
            src="https://stream.radioparadise.com/flac"
            type="audio/flac"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="div-now-playing">
          <h2>Now Playing:</h2>
          <div>
            <p>
              <strong>Artist:</strong> {data.nowPlaying.artist}
            </p>
            <p>
              <strong>Title:</strong> {data.nowPlaying.title}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="text-white">Loading...</div>;
  }
}

export default RadioPlayer;
