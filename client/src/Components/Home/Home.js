import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const img = [
        'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?cs=srgb&dl=pexels-prince-photos-3054690.jpg&fm=jpg',
        'https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    ]; 

    return (
        <div>
            <div className="img4">
                <div className="img-set1">
                    <img className="img1"src={img[0]} alt="Logo" width="35%" height="15%"/>
                    <div className="title-background">
                        <h1 className="sub-title1">Welcome to Tasty's</h1>
                        <h1 className="sub-title1">Home of the</h1>
                        <h1 className="sub-title1">Best Noodles Around</h1>
                    </div>                    
                </div>
                <div className="img-set2">
                    <div className="btn-containter1">
                        <div className="title-background">
                            <h1 className="sub-title1">We Make Reservations Easier</h1>
                            <h1 className="sub-title1">For</h1>
                            <h1 className="sub-title1">All our Guests</h1>
                        </div>
                    </div>
                    <img className="img1"src={img[1]} alt="Logo" width="30%" height="10%"/>
                </div>
            </div>
        </div>
    )
}

export default Home