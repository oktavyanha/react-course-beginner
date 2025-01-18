import React from 'react'
import {Login as LoginComponent} from '../components/Login'
// use '{}' because we did not use 'export default'


function Login() {
  return (
    <div className='py-8'>
      <LoginComponent />
    </div>
  )
}

export default Login