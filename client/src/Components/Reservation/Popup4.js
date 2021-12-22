import React from 'react'
import './Popup.css'


function Popup4(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="dismiss1-btn" onClick={()=> props.setTrigger(false)}>Dismiss</button>
                
                
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup4