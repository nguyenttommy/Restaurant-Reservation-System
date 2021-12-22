import React from 'react'
import './Popup.css'


function Popup3(props) {

    const handleAccept = () => {
        props.setSubmitTrigger(props.submitTrigger + 1)

        if (props.dismissTrigger === false) {
        props.setTrigger(false)
        }
       
    }
    return (props.trigger) ? (
        <div className="popup2">
            <div className="popup-inner2">
                <button className="dismiss-btn" onClick={()=> props.setTrigger(false)}>Cancel</button>
                <button className="accept-btn" onClick={()=> handleAccept()}>Accept</button>
                
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup3