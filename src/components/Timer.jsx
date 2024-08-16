import {useCallback, useRef, useState} from "react";
import Modal from "./Modal.jsx";
import {formatTime} from "../utils/formatTime.js";
import DisplayLapTimes from "./DisplayLapTimes.jsx";

export default function Timer() {
    const [time, setTime] = useState(0)
    const timerRef = useRef(null)
    const [buttonText, updateButtonText] = useState('Start')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    const [lapTimes, setLapTimes] = useState([])
    const [timerIsRunning, setTimerIsRunning] = useState(false)

    const formattedTime = formatTime(time)

    function handleTimer(buttonIdentifier){
        if(!timerRef.current){ // if no timer is running
            if (buttonIdentifier === 'Start') {
                console.log(`Time started: ${timerRef.current}`)
                timerRef.current = setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
                },1000)
                updateButtonText('Stop')
                setTimerStarted(true)
                setTimerIsRunning(true)
            }else{
                console.log(`Timer resumed: ${timerRef.current}`)
                timerRef.current = setInterval(()=>{
                setTime((prevTime)=>prevTime+1)
                },1000)
                updateButtonText('Stop')
                setTimerIsRunning(true)
            }
        }else{ // if there is a time,stop it
            console.log(`Timer stopped before clearing interval: ${timerRef.current}`)
            clearInterval(timerRef.current)
            timerRef.current = null
            updateButtonText('Resume')
            setTimerIsRunning(false)
            console.log(`Timer stopped after clearing interval: ${timerRef.current}`)
        }
    }

    function handleRequestResetTimer(){
        setModalIsOpen(true)
    }
    const handleConfirmModal = useCallback(function handleConfirmModal(){
        console.log("Modal confirmed")
        setModalIsOpen(false)
        // reset timer logic
        clearInterval(timerRef.current)
        timerRef.current = null
        setTime(0)
        updateButtonText('Start')
        setTimerStarted(false)
        setLapTimes([])
        setTimerIsRunning(false)
    },[timerRef])

    function handleCancelModal(){
        console.log("Modal cancelled")
        setModalIsOpen(false)
    }

    function handleLapTime(){
        if(timerIsRunning){
             setLapTimes(prevLap=>[formattedTime, ...prevLap])
        }
    }

    // console.log(`Lap time: ${lapTimes}`)
    console.log(time)
    console.log(formattedTime)

    return(
        <>
            <Modal
                open={modalIsOpen}
                onCancel ={handleCancelModal}
                onConfirm={handleConfirmModal}
                onClose={handleCancelModal}/>
            <div id="time-container">
                <h1 id="time-head">{formattedTime}</h1>
            </div>
            <div>
                <button onClick={() => {handleTimer(buttonText)}} value={buttonText.current}>{buttonText}</button>
                <button onClick={handleRequestResetTimer} disabled={!timerStarted}>Reset</button>
                <button onClick={handleLapTime}>Lap</button>
            </div>
            <div id="laps-table-container">
                {lapTimes.length>0 && <DisplayLapTimes laps={lapTimes}/>}
            </div>
        </>
    )
}