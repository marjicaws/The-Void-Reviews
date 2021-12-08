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
    await postHorror(newSubmit);
  };

  return (
    <div class="border border-light" class="border-0" className="formblock">
      <h3 className="submitmes">
        Submit any movie you like, so long as its horror.
      </h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <input
                  type="text"
                  value={movie}
                  placeholder="Movie Title"
                  onChange={(e) => setMovie(e.target.value)}
                  class="form-control"
                  id="movietitle"
                  aria-describedby="basic-addon3"
                />{" "}
              </div>
            </div>
          </li>

          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <textarea
                  type="text"
                  value={synopsis}
                  placeholder="Movie Summary No Spoilers!"
                  onChange={(e) => setSynopsis(e.target.value)}
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </li>
          <li>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <input
                  type="url"
                  value={imgURL}
                  placeholder="Image URL"
                  onChange={(e) => setImgUrl(e.target.value)}
                  class="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </li>
          <button type="submit" class="btn btn-secondary">
            Submit to the Void
          </button>
        </ul>
      </form>
    </div>
  );
}
