import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Header from './Component/Header';
import Home from "./Page/Home";
import Footer from './Component/Footer';
import SignIn from './Page/signIn';



function App(){
  return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-in" element={<SignIn />} />
    </Routes>
    <Footer/>
  </Router>
  )
  }


export default App
