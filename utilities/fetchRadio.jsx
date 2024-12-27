import axios from "axios";


export async function fetchRadio() {
  try {
    const response = await axios.get(
      "https://api.radioparadise.com/api/now_playing"
    );
    const nowPlaying = response.data;
    
    //console.log("**********", nowPlaying);
    return { nowPlaying };
  } catch (error) {
    console.error("Error fetching now playing:", error);
  }
}

