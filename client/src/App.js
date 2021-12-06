import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { grabHorror, grabReview } from "./services/index";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";
import Footer from "./components/Footer";
import Review from "./components/Review";

function App() {
  const [horrorData, setHorrorData] = useState([]);
  const [review, setReview] = useState([])


  useEffect(() => {
    const getAllReviews = async () => {
      const resp = await grabReview();
      setReview(resp.records);
      console.log(resp.records)
    }
    getAllReviews();
  }, [])

  useEffect(() => {
    const getAllMovies = async () => {
      const res = await grabHorror();
      setHorrorData(res.records);
      console.log(res.records);
    };
    getAllMovies();
  }, []);

  return (
    <div className="App">
      <head>
        <title><link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;600&display=swap" rel="stylesheet"/></title>
      </head>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className = "imglink">
              {horrorData.map((hd) => (
                <Link to={`/detail/${hd.id}`}>
                  <img src={hd.fields.imgURL} />
                </Link>
              ))}
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={<Detail horrorData={horrorData} review={review} />}
          
        />
        <Route
          path = '/new'
          element = {<Submit />} />

          <Route 
            path = '/detail/:id/edit' 
            element = {<Review />} />


          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
