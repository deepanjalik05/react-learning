import { useState } from 'react' //HOOKS
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hooks
  let [counter, setCounter] = useState(0)
  //let counter = 15;
  const addValue = () =>{ 
    // console.log("value added", counter);
      //counter = counter+1;
      if(counter<10){
      setCounter(counter +1);
      }else{
        alert("value can't go above 10!");
      }
  };

  const removeValue = () =>{
    //counter =  counter - 1;
    if(counter>0){
    setCounter(counter -1);
    }else{
      alert("value can't go below 0!");
    }
  };

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}>add value {counter}</button>
      <br/>
      <button onClick={removeValue}>remove button {counter}</button>
    </>
  )
}

export default App
