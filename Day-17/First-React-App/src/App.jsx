import { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/Navbar/Navbar'
import Parent from './components/Parent/Parent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <About />
      <Parent />
    </>
  )
}

export default App
