import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router";
import Review from "./Review";

export default function Detail(props) {
  const params = useParams();
  const horrors = props.horrorData.find((hd) => {
    return params.id === hd.id;
  });

  return (
    <div>
      <h2>{horrors.fields.movie}</h2>
      <p>{horrors.fields.synopsis}</p>
      <img src={horrors.fields.imgURL}></img>

    <Routes>
        <Route path="/detail/:id" element={<Review />}/>
    </Routes>
    </div>

    
  );
}
