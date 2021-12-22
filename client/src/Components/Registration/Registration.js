import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator'
import './Registration.css';


const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState("");
    const [confirmedPassword, setCPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    

    const submitForm = async e  => {
        e.preventDefault();
        if (validator.isEmail(email)) {
            setEmailError('');            
        } else {
            setEmailError('Not Valid Email');
        }

        if (confirmedPassword !== password){
            alert("Confirm password not match");
        } else{
            try{                                
                const body = {name, email, password, address, city, state, zip};
                const response = await fetch("http://localhost:5001/Registration",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                const jsonData = await response.json();
                if (jsonData === "existed email"){
                    alert("The email has been used. Please choose another one");
                    window.location = "/Registration";
                }
                if (jsonData === "user registered"){
                    window.location = "/login";
                }
            } catch (err) {
                console.error(err.message);
            }
        }
        
    }


    return (
              

            <div class="res-background">
                <h1 class="title-res">New Member</h1>
                
                    <form class = "res-form" onSubmit={submitForm}>
                        
                            <label id="name-label" for="name">Name</label>
                            <input type="text" name="name" id="name" class="form1" placeholder="Enter your name" required
                            value={name} onChange={e => setName(e.target.value)}/>
                        
                        
                            <label id="email-label" for="email">Email</label>
                            <input type="text" class="form1"  name="email" placeholder="Enter your email" required="required" 
                            value={email} onChange={e => setEmail(e.target.value)}/> <span style={{
                                fontWeight: 'bold', color: 'red'
                            }}>{emailError}</span>
                        
                        
                            <label id="password-label" for="password">Password</label>
                            <input type="password" class="form1" id= "password" name="password" placeholder="Enter your password" required="required"
                            value={password} onChange={e => setPassword(e.target.value)}/> 
                            
                        
                            <label id="confirmedPassword-label" for="confirmedPassword">Confirm Password</label>
                            <input type="password" class="form1" id= "confirmedPassword" name="confirmedPassword" placeholder="Confirm  your password" required="required"
                            value={confirmedPassword} onChange={e => setCPassword(e.target.value)}/>
                            
                        
                        <h3>Mailing Address</h3>
                 
                            <label id="address-label" for="address">Address</label>
                            <input type="text" name="address" id="address" class="form1" placeholder="789 Hennessey Dr" required
                            value={address} onChange={e => setAddress(e.target.value)}/>
                        
                            <label id="city-label" for="city">City</label>
                            <input type="text" name="city" id="city" class="form1" placeholder="fineWine" required
                            value={city} onChange={e => setCity(e.target.value)}/>
                        
                            <label id="state-label" for="state">State</label>
                            <input type="text" name="state" id="state" class="form1" placeholder="TX" required
                            value={state} onChange={e => setState(e.target.value)}/>
                        
                            <label id="zip-label" for="zip">Zip code</label>
                            <input type="text" name="zip" id="zip" class="form1" placeholder="77467" pattern="[0-9]*" maxlength="9" minlength="5" size = "10" required
                            value={zip} onChange={e => setZip(e.target.value)}/>
                      
                        <div class="checkAddress">
                            <input type="hidden" name="differentAddress" value="no"/>
                            <input type="checkbox" name="sameAddress" value="yes"/> 
                            <label for="billingAddress" >Billing address same as mailing</label>
                        </div>         
                        <button type="submit" class="btn-submit" style={{width: "20%"}}>Create</button>
                    </form>
                    <p class="Registered">Already have an account? <Link to="/login"><u><b>   Login here!   </b></u></Link></p>
                </div>

       
    )
}

export default Registration;