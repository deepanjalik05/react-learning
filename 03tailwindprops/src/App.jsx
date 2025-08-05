import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "hitesh",
    age:21
  }
  let myarr =[1,2,3]
  return (
  <>
 
  <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
  Hello Tailwind!
  </div>

  <Card username ="yash" btnText = "click me"/>
  <Card username="deepanjali"    />
  </>
  )
}

export default App
