import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider> {/* every child will have acces for data provide by 'UserContext' */}
      <h1>React for Context API</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
