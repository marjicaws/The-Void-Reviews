import './App.css';
//import { Routes , Route } from 'react-router-dom'
import { useEffect , useState } from 'react'
import axios from 'axios'
import {BASE_URL, config} from './services/index'


function App() {

  const [horrorData, setHorrorData] = useState({})

  useEffect(() => {
    
  }, [])


  return (
    <div className="App">
      
      {/* <Routes>

      </Routes> */}
    </div>
  );
}

export default App;
