import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Header from './Component/Header';
import Home from "./Page/Home";
import Footer from './Component/Footer';
import SignIn from './Page/signIn';
import User from './Page/User';
import NotFound from './Page/NotFound';



function App(){
  return(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/User" element={<User/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </Router>
  )
  }


export default App
