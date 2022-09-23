import './App.css';
// import Navbar from './Components/Navbar/Navbar.js';
// import Hero from './Components/Hero/Hero';
// import Showcase from './Components/Showcase/Showcase';
// import Program from './Components/Programs/Program';
// import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Features from './Routes/Features';
import Programs from './Routes/Programs';
import Contact from './Routes/Contact';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      {/* <Home /> */}


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/features' element={<Features />} />
        <Route path='/program' element={<Programs />} />
        <Route path='/contact' element={<Contact/>}/>

      </Routes>


      {/* <Hero/>
      <Showcase/>
      <Program/>
      <Footer/> */}
    </div>
  );
}

export default App;
