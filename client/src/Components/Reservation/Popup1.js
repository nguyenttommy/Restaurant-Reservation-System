import React from 'react'
import './Popup.css'
import { Link } from 'react-router-dom';

function Popup1(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="dismiss-btn" onClick={()=> props.setTrigger(false)}>Dismiss</button>
                <Link to="/Registration"> <button className="popReg-btn">Register</button> </Link>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup1
