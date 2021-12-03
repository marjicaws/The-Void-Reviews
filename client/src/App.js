import './App.css';
import { Routes , Route , Link } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { grabHorror } from './services/index'
import Detail from './components/Detail'


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
      
      <Routes>
        <Route path='/' element={
          <div>
            {horrorData.map(hd => (
              <Link to={`/detail/${hd.id}`}>{hd.fields.imgURL}</Link>
            ))}
          </div>
        }/>
      </Routes> 
    </div>
  );
}

export default App;
