import React from 'react';
import './menu.css'

function Menu() {

        const img = [
            'https://www.haikutokyo.com/uploads/1/1/5/0/115079183/haiku-back07312021ramen_orig.jpg',
           
        ]; 
    
        return (
            <div>
                <div className="about">
                    <div className="img-set10">
                        <div className="title-background11">
                            <h1 className="sub-title11">Menu</h1> 
                        </div>
                        <div className="img-container">
                            <img className="img11"src={img[0]} alt="Logo"/>
                             
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )              
    }

export default Menu