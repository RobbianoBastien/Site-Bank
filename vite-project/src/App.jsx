
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Header from './Component/Header';
import Home from "./Page/Home";
import Footer from './Component/Footer';



function App(){
  return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
  </Router>
  )
  }


export default App
