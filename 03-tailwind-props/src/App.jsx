import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let newArr = [1, 3, 5, 7, 9];

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="amadeusha" myArr={newArr}/> 
      {/* this state only accept object as tag*/}
    </>
  )
}

export default App
