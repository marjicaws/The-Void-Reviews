import { useState } from "react";
import { postReview } from "../services";
import { useParams, useNavigate } from "react-router-dom";

export default function Review() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      name,
      review,
    };
    await postReview(newReview, params.id);
    navigate(`/detail/${params.id}`);
  };

  return (
    <div className="revboard">
      <div className="revplate">
        <ul>
          <form onSubmit={handleSubmit}>
            <h3>Submit your Review</h3>
            <li>
              {" "}
              <textarea
                type="text"
                placeholder="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />{" "}
            </li>
            <li>
              {" "}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />{" "}
            </li>

            <button className="subbtn" class="btn btn-secondary" type="submit">
              Submit to the Void
            </button>
          </form>
        </ul>
      </div>
    </div>
  );
}
