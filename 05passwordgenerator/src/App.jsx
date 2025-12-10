import { use, useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const[length, setlength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState(""); 
  
  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+="!@#$%^&*-+={}[]_"
    //to generate password of array length
    for(let i =0; i< length; i++){
      let char = Math.floor(Math.random() * str.length)   //it generates index value
      pass += str.charAt(char) //to store the char at the indexes
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  
  //to copy the text to clipboard
  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
     passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])
 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref = {passwordRef} 
        />
        <button 
        onClick={copypasswordtoclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max ={20}
            value= {length}
            className='cursor-pointer accent-blue-700'
            onChange={(e) =>{setlength(e.target.value)}}
            />
            <label> Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input
         type="checkbox"
         defaultChecked = {numberAllowed}
         id = "numberInput"
         className='accent-blue-700'
         onChange={() =>{
            setNumberAllowed((prev) => !prev);
         }}
         /> 
         <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
         <input
         type="checkbox"
         defaultChecked = {charAllowed}
         className='accent-blue-700'
         id = "characterInput"
         onChange={() =>{
            setCharAllowed((prev) => !prev);
         }}
         /> 
         <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
