import React, {useState, useEffect} from "react";

function Timercomponent() {
    const[seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(()=>{
        console.log("setinterval started")
        setSeconds(prevSeconds => prevSeconds+1)
      }, 1000);
    
      return () => {
        console.log("time is stop");
        clearInterval(intervalId);
      };
    }, []);
    
    return(
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    );
}
export default Timercomponent