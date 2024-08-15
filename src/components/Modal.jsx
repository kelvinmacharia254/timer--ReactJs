import {useEffect, useRef} from "react";

export default function Modal({open, onClose, onCancel, onConfirm}) {
    const dialogRef = useRef(null);

    useEffect(()=>{
        // use effect applies after the component is rendered and if the dependency is updated
        // the dialogRef is applied to the <dialog> element after initial render.
        // We need the component to render for the ref to refer to the <dialog> element
        if(open){
        dialogRef.current.showModal();
        }else{
        dialogRef.current.close();
        }
    },[open])

    return(
    <dialog ref={dialogRef} onClose={onClose}>
        <div id="modal-div">
            <button id="modal-x-button" onClick={onCancel}>X</button>
            <p>Are you sure you want to reset timer?</p>
            <div id="modal-buttons-div">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Yes</button>
            </div>
        </div>
    </dialog>
    )
}



