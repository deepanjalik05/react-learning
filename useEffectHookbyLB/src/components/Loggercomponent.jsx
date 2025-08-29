import React, {useState, useEffect} from "react";

function Loggercomponent() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("components rendered or count updated:" , count);
    });
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
}

export default Loggercomponent 