import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  /* function changeColor(color){
    setColor(color)
  } */

  return (
    <>
      <div className='w-full h-screen duration-2000' 
        style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
              onClick={() => setColor('red')}
              style={{backgroundColor:'red'}}
            >Red</button>
            <button
              className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
              onClick={() => setColor('green')}
              style={{backgroundColor:'green'}}
            >Green</button>
            <button
              className=' outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white'
              onClick={() => setColor('blue')}
              style={{backgroundColor:'blue'}}
            >Blue</button>

          </div>
        </div>

      </div>
    </>
    
  )
}

export default App
