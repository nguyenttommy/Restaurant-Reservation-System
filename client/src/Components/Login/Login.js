import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";


const Login = (props) => {

    const {
        isAuth,
        setIsAuth,
        userID,
        setUserID,
        isAdmin,
        setIsAdmin
    } = props;


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory()
    const submitForm = async e  => {
        e.preventDefault();
        try{
            const body = {email, password};
            const response = await fetch("http://localhost:5001/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                
            });
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.role === "customer"){
                
                window.localStorage.setItem("ID", JSON.stringify(jsonData.userIDs));
                setIsAuth(true)
                setUserID(jsonData.userIDs)

                history.push('/Profile');
                
                
            }
            else if (jsonData.role === "admin"){
                setIsAuth(true)
                setIsAdmin(true)
                history.push('/Admin');
                console.log(isAuth)
                
            }
            else {
                alert("Invalid user or password");
            }
            
        } catch (err) {
            console.error(err.message);
        }
    }




    return (
                <div class="res-background" style={{height:"1000px"}}>
                    <h1 class="title-res">Member Login</h1>
                    
                        <form class = "res-form" onSubmit={submitForm}>
                            
                                <input type="text" class="form1" id= "email" name="Email" placeholder="Email" required="required"
                                value = {email}
                                onChange={e=>setEmail(e.target.value)}/>
                            
                                <input type="password" class="form1" name="password" placeholder="Password" required="required"
                                value = {password}
                                onChange={e=>setPassword(e.target.value)}/> 
                            
                            <button class="btn-submit" style={{width: "20%"}} type="submit" name="Sign-in" onClick={submitForm}>Sign in</button>
                        </form>
                        <p class="Not-Register">Don't have an account? <Link to="/Registration"><u><b>   Register here!   </b></u></Link></p>
                    
                </div>
         
    )
}

export default Login;
