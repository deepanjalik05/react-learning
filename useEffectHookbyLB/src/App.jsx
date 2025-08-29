import { useEffect, useState } from 'react'
import './App.css'
import Loggercomponent from './components/Loggercomponent'
import Timercomponent from './components/Timercomponets';
import Datafetcher from '.components/Datafetcher';
function App() {
   const [count, setCount] = useState(0);
   const [total, setTotal] = useState(1);
  //first -> side-effect function
  //second-> clean-up function
  //third -> comma separated dep list
  
  //variation 1
  //runs on every render 
  //  useEffect(() =>{
  //    alert("i will run on each render")
  //  })

  //variation 2
  //that runs on only first render
  //  useEffect(() =>{
  //    alert("i will run on each render")
  //  }, [])
  
  //variation 3
  //that runs on every render when count isupdated
  //  useEffect(() =>{
  //    alert("i will run on each render when count is updated")
  //  }, [count])

  //variation 4
  //multiple dependencies
  //useEffect(()=>{
  //   alert("i will run every time when count/total is updated")
  // }, [count, total])

  //variation 5
//  lets add a cleanup function
  // useEffect(()=>{
  //   alert("count is updated")
  //   return () =>{
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])
   
  //  function handleClick(){
  //   setCount(count+1);
  //  }
  //  function handleclickTotal(){
  //   setTotal(total+1);
  //  }
   
  return (
   <div>
    {/* <Loggercomponent/> */}
    {/* <Timercomponent/> */}


    {/* <button onClick={handleClick}>
      Update Count
    </button>
    <br/>
    count is : {count}
    <br/>
    <br/>
    <button onClick={handleclickTotal}>
      Update total
    </button>
    <br/>
    total is : {total} */}
   </div>
  )
}

export default App
