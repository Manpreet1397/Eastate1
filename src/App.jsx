import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import StoriesPage from './Components/StoriesPage'
import Discover from './Components/Discover'
import NetworkPage from './Components/NetworkPage'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <Navbar/>
    <HeroSection/>
    <Discover/>
    <StoriesPage/>
    <NetworkPage/>
    <Testimonial/>
    <Footer/>
  </div>
  )
}

export default App
