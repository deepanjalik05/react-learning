import { useState,useEffect } from 'react'
import Themebtn from './components/Themebtn'
import Card from './components/Card' 
import { Themeprovider } from './contexts/Theme'

function App() {
  const [themeMode, setthemeMode] = useState("light")
  
  const lightTheme = () =>{
    setthemeMode("light")
  }
   const darkTheme = () =>{
    setthemeMode("dark")
  }
  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  




  return (
    <Themeprovider value={{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
         <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                        <Card />
              </div>
          </div>
      </div>
    </Themeprovider>
  )
}

export default App
