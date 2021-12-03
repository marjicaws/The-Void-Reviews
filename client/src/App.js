import './App.css';
import { Routes , Route, Link } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { grabHorror } from './services/index'
import Detail from './components/Detail'
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {

  const [horrorData, setHorrorData] = useState([])

  useEffect(() => {
    const getAllMovies = async () => {
      const res =  await grabHorror()
      setHorrorData(res.records)
      console.log(res.records)
      
    }
    getAllMovies()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
         { horrorData.map(hd => (
            <Link to={`/detail/${hd.id}`}><img src = {hd.fields.imgURL}/></Link>
          ))}
        </div>
        }/>
        <Route path='/detail/:id' element={<h3>Our Detail Page</h3>} />
      </Routes> 
    </div>
  );
}

export default App;
