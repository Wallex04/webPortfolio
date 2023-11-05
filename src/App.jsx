import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills.'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Work/>
        
        <Contact/>
      </div>
  )
}

export default App
