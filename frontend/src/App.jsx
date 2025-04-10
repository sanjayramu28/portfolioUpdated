import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero/Hero'
import TechStack from './Components/TechStacks/TechStack'
import Projects from './Components/Projects/Projects'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar  /> 
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
