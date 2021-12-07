import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const params = useParams();

  const horrors = props.horrorData.find((hd) => {
    return params.id === hd.id;
  });

  const reviews = props.review.filter((rv) => {
    return params.id === rv.fields.horror[0];
  });

  return (
    <div className="detail">
      <div className="moviedetail">
        <h2 class="font-weight-normal">{horrors.fields.movie}</h2>
        <p>{horrors.fields.synopsis}</p>
        <img id="detimg" src={horrors.fields.imgURL}></img>
      </div>

      <Link to={`/detail/${params.id}/edit`}>
        <button class="btn btn-light">Post a Review</button>
      </Link>
      <div>
        {reviews.map((rev) => (
          <div className="revsec">
            <p class="font-weight-light font-italic">{rev.fields.review}</p>
            <h6>-{rev.fields.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
