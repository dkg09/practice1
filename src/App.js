// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './Pages/Jobs';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Navbar from './Components/Common/Navbar';
import Preloader from './Components/Common/Preloader';
import Footer from './Components/Common/Footer';
import Blogdetails from './Pages/blogdetails';
import Jobsingle from './Pages/Jobsingle';
import Jobdetails from './Pages/Jobdetails';



function App() {
  return (
    <>
      <Router>
        {/* <Preloader/> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-details' element={<Blogdetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/job-details' element={<Jobdetails />} />
          <Route path='/job-single' element={<Jobsingle />} />
        </Routes>
        <Footer />
      </Router>

    
    </>
  );
}

export default App;
