import { useState  } from "react";
import { postReview } from "../services";
import { useParams , useNavigate } from "react-router-dom";

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
    await postReview(newReview, params.id)
    navigate(`/detail/${params.id}`) 
  };

  return (
    <div>
      <ul>
        <form onSubmit={handleSubmit}>
          <li>
            {" "}
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
          </li>
          <li>
            {" "}
            <label>Review Here</label>
            <input
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />{" "}
          </li>

          <button type="submit">Submit to the Void</button>
        </form>
      </ul>
    </div>
  );
}
