import { createContext, useContext, useState } from "react";

export const Countercontext = createContext({
    count: 0,
    setCount: ()=>{},
});  

export const CounterProvider = (props)=>{
    const[count, setCount] = useState(0);
    return(
        <Countercontext.Provider value ={{count, setCount}}>
            {props.children}
        </Countercontext.Provider>
    )
}

export default function useCount(){
    return useContext(Countercontext)
}