import React from 'react'
import './Popup.css'





function Popup2(props) {

    const handleProceed=()=>{
        props.setTrigger(false)
        props.setTrigger3(true)
    }
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="dismiss-btn" onClick={()=> props.setTrigger(false)}>Cancel</button>
                <button className="popReg-btn" onClick={()=> handleProceed()}>Enter Info</button>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup2
