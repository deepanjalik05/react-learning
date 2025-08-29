import { useState } from 'react'
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";
import './App.css'

function App() {
    const[isLoggedIn , setLoggedin] = useState(true);
    // return(
    //   <div>
    //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    //   </div>
    // )




    //IF ELSE CONDITION RENDERING
    // if(isLoggedIn){
    //   return(
    //     <LogoutBtn/>
    //   )
    // }else{
    //   return(
    //     <LoginBtn/>
    //   )
    // }
  
}

export default App
