import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { grabHorror, grabReview } from "./services/index";
import Detail from "./components/Detail";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";
import Footer from "./components/Footer";
import Review from "./components/Review";

function App() {
  const [horrorData, setHorrorData] = useState([]);
  const [review, setReview] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getAllReviews = async () => {
      const resp = await grabReview();
      setReview(resp.records);
      
    };
    getAllReviews();
  }, [toggle]);

  useEffect(() => {
    const getAllMovies = async () => {
      const res = await grabHorror();
      setHorrorData(res.records);
      
    };
    getAllMovies();
  }, [toggle]);

  return (
    <div className="App">
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <title>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;600&display=swap"
            rel="stylesheet"
          />
        </title>
      </head>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="imglink">
              {horrorData.map((hd) => (
                <Link to={`/detail/${hd.id}`}>
                  <img className="image-grid" src={hd.fields.imgURL} />
                </Link>
              ))}
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail horrorData={horrorData} review={review} />}
        />
        <Route path="/new" element={<Submit />} />
          <Route path="/about" element={<About />} />
        <Route path="/detail/:id/edit" element={<Review />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
