import { useState } from 'react'

import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
 

  return (
    <Usercontextprovider>
      <h1> CONTEXT API</h1>
      <Login />
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
