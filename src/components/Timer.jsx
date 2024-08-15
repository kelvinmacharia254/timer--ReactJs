import {useRef, useState} from "react";

export default function Timer() {
    const [time, setTime] = useState(0)
    const timerRef = useRef(null)
    const [buttonText, updateButtonText] = useState('Start')

    function handleTimer(buttonIdentity){
        if(!timerRef.current){ // if no timer is running
            if (buttonIdentity === 'Start') {
                console.log(`Time started: ${timerRef.current}`)
                timerRef.current = setInterval(()=>{
                setTime((prevTime)=>prevTime+1000)
                },1000)
                updateButtonText('Stop')
            }else{
                console.log(`Timer resumed: ${timerRef.current}`)
                timerRef.current = setInterval(()=>{
                setTime((prevTime)=>prevTime+1000)
                },1000)
                updateButtonText('Stop')
            }
        }else{ // if there is a time
            console.log(`Timer stopped before clearing interval: ${timerRef.current}`)
            clearInterval(timerRef.current)
            timerRef.current = null
            updateButtonText('Resume')
            console.log(`Timer stopped after clearing interval: ${timerRef.current}`)
        }
    }

    function handleResetTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null
        setTime(0)
        updateButtonText('Start')
    }
    return(
        <>
            <div id="time-container">
                <h1 id="time-head">{time / 1000}</h1>
            </div>
            <div>
                <button onClick={() => {
                    handleTimer(buttonText)
                }} value={buttonText.current}>{buttonText}</button>
                <button onClick={handleResetTimer}>Reset</button>
            </div>
        </>
    )
}