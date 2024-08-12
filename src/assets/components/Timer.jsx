import {useRef, useState} from "react";

// timeCountInterval = 1000 // milliseconds
export default function Timer() {
    console.log("Render Timer")
    const [time, setTime] = useState(0)
    const timerRef = useRef(null)

    function handleStartTimer(){
        console.log(`At Start: ${timerRef.current}`)
        if(timerRef.current) {
            return
        }
        timerRef.current = setInterval(
        ()=>{
        setTime((prevTime)=>prevTime+1000)
        },1000)
    }

    function handleStopTimer(){
        console.log(`At Stop: ${timerRef.current}`)
        if(timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
        setTime(0)
    }
    return(
    <div>
        <h1>{time/1000}</h1>
        <button onClick={handleStartTimer}>Start</button>
        <button onClick={handleStopTimer}>Stop</button>
    </div>
    )
}