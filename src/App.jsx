
import './App.css'
import Navbar from './Navbar';
import Quotes from './Quotes'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
 

  return (
    <>
    <Router>
     
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Quotes/>} />
          
        </Routes>
        
    </Router>
    
      
    </>
  )
}

export default App
