import {useEffect, useRef, useState} from "react";

const COUNTDOWN = 4000
export default function Modal({open, onClose, onCancel, onConfirm}) {
    const dialogRef = useRef(null);

    const [modalCountDown,setModalCountDown ] = useState(COUNTDOWN)

    useEffect(()=>{
        // use effect applies after the component is rendered and if the dependency is updated
        // the dialogRef is applied to the <dialog> element after initial render.
        // We need the component to render for the ref to refer to the <dialog> element
        let interval;
        let timer;

        if(open){
            dialogRef.current.showModal();
            interval = setInterval(() => {
            setModalCountDown((prevTime) => prevTime - 1000);
            }, 1000);

            timer = setTimeout(()=>{
                onConfirm()
            },COUNTDOWN)
        }else{
            dialogRef.current.close();
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timer)
            setModalCountDown(COUNTDOWN)
        };
    },[open, onConfirm])

    return(
    <dialog ref={dialogRef} onClose={onClose}>
        <div id="modal-div">
            <button id="modal-x-button" onClick={onCancel}>X</button>
            <p>Are you sure you want to reset timer?</p>
            <div id="progress-bar-div">
                <progress value={modalCountDown} max={COUNTDOWN}/>
            </div>
            <div id="modal-buttons-div">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Yes</button>
            </div>
        </div>
    </dialog>
    )
}



