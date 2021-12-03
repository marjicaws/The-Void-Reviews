import { useState } from "react";
import { postHorror } from "../services";

export default function Submit() {
  const [movie, setMovie] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [imgURL, setImgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubmit = {
      movie,
      synopsis,
      imgURL,
    };
    const res = await postHorror(newSubmit);
  };

  return (
    <div>
        <h3>Submit any movie you like, so long as its horror.</h3>
      <form onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input
          type="text"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <label>Synopsis</label>
        <input
          type="text"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <label>Image</label>
        <input
          type="url"
          value={imgURL}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Submit to the Void</button>
      </form>
    </div>
  );
}
