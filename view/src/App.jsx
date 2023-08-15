import { useState } from 'react'
import './App.css' 
import Main from './page/Main.jsx'


function App() {
  const [count, setCount] = useState(0)
 


  return (
    <>
      <div className='App'></div>
      <Main></Main> 
    </>
  )
}

export default App

