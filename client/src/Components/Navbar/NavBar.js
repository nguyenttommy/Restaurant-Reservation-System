import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar(props) {

    const {
        isAuth,
        setIsAuth,
        setIsAdmin,
        isAdmin
    } = props;

    const handleSignOut = (e) => {
        setIsAuth(false)
        setIsAdmin(false)
    }

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                   
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/menu" className="nav">Menu</Link>
                    <Link to="/reservation" className="nav">Make A Reservation </Link>
                    
                    
                    {(isAuth === true) ? (
                        <div>

                            {(isAdmin === true) ? (
                                <div>
                                    
                                    <Link to="/Admin" className="nav">Admin Dashboard</Link>
                                    <Link to="/login"><button className="btn-signin" onClick={handleSignOut}>Sign Out</button></Link>
                                    
                        </div>
                            ):(
                                <div>
                                <Link to="/Profile" className="nav">Manage Profile</Link>
                                <Link to="/login"><button className="btn-signin" onClick={handleSignOut}>Sign Out</button></Link>
                                </div>
                            )}
                            
                        </div>
                    ) : (
                        <div>
                            <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                            <Link to="/Registration"> <button className="btn-register">Register</button> </Link>
                        </div>
                    )}
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar