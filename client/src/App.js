import './App.css';
//import { Routes , Route } from 'react-router-dom'
import { useEffect , useState } from 'react'
import { grabHorror } from './services/index'


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
      
      {/* <Routes>

      </Routes> */}
    </div>
  );
}

export default App;
