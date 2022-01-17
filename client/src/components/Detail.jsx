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
      <div className="detail-synp">
        <h2 class="font-weight-normal" className="detail-synp-title">{horrors.fields.movie}</h2>
        <p className="detail-synp-p">{horrors.fields.synopsis}</p>
        <img className="detail-img" src={horrors.fields.imgURL}></img>
        <div className='detail-btn'>
        <Link to={`/detail/${params.id}/edit`}>
        <button className='detail-review-btn' class="btn btn-light text-center border border-secondary" >Post a Review</button>
      </Link>
      </div>
      </div>

     
      <div className="review-table">
      <h2 className='review-title'>Reviews</h2>
        {reviews.map((rev) => (
          <div class="border border-dark " className="review-sec-p">
            <div className='title-area-rev'>
            <p className = 'review-p'class="font-weight-light font-italic">{rev.fields.review}</p>
            </div>
            <div className='paragraph-rev'>
            <h6 className='review-author'>-{rev.fields.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
