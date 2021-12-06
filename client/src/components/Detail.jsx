import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Detail(props) {
  const params = useParams();
  

  const horrors = props.horrorData.find((hd) => {
    return params.id === hd.id;
  });

//   const reviews = props.review.find((rv) => {
//       return params.id === rv.id;
//   });

 

  return (
    <div className = "detail">
      <h2>{horrors.fields.movie}</h2>
      <p>{horrors.fields.synopsis}</p>
      <img src={horrors.fields.imgURL}></img>
    
   <Link to = '/detail/:id/edit'><button>Leave a review for this movie!</button></Link>
    </div>
    
    
  );
}
