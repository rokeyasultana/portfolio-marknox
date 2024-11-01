import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Projects from './components/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
