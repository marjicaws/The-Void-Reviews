import './Detail.css'
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
        <h2 class="font-weight-normal" className="synp">{horrors.fields.movie}</h2>
        <p className="synp">{horrors.fields.synopsis}</p>
        <img className="detimg" src={horrors.fields.imgURL}></img>
        <Link to={`/detail/${params.id}/edit`}>
        <button class="btn btn-light text-center border border-secondary" >Post a Review</button>
      </Link>
      
      </div>

     
      <div className="wholethang">
        {reviews.map((rev) => (
          <div class="border border-dark " className="revsec">
            <p class="font-weight-light font-italic">{rev.fields.review}</p>
            <h6>-{rev.fields.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
