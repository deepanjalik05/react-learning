import { useState } from 'react'
import './App.css'
import Colorswitch from "./components/Colorswitch"
function App() {
  
// function handleClick(){
//     alert("i am clicked");
//   }

//   function onmouse(){
//     console.log("it was clicked on mouse");
//   }

//   function handleInputChange(e){
//     //console.log("value change inside the input");
//     console.log("value till now:" , e.target.value);
//   }
//   function handlesubmit(e){
//     e.preventdefault();
//   }
const[clicks, setclicks] = useState(0);
function handleclickoutside(){
  setclicks(c=> c+1);
}

function getrandomcolor(){
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
}

function handlechangecolor(){
  let bodystyle = document.body.style;
  bodystyle.backgroundColor = getrandomcolor();
}
  return (
    <>
    <div style={{width: '100%' , height: '100vh'}} onClick={handleclickoutside}>
      <Colorswitch onchangecolor={handlechangecolor}/>
      <br/>
      <br/>
      <h2>Clicks on the page: {clicks}</h2>
    </div>
    {/* <button onClick={()=>alert("button clicked hua hai")}>
      click me
    </button> */}
    {/* <button onClick={handleClick}>
      click me 
    </button>

    <p onMouseOver={onmouse} style={{border:"1px solid black", color:"blue"}}>
      i am a para
    </p>

    <br></br>

    <form onSubmit={handlesubmit}> 
      <input type='text' onChange={handleInputChange}/>
      <button type='submit'>submit</button>
    </form> */}
    </>
  );
}

export default App