import React , {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/NavBar'
import Login from './Components/Login/Login'
import Admin from './Components/Admin/Admin';
import Menu from './Components/Menu/menu';
import Registration from './Components/Registration/Registration'
import Reservation from './Components/Reservation/Reservation'
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer'
import './App.css';


function App() {

  const [isAuth, setIsAuth] = useState(false);  
  const [userID, setUserID] = useState(100000)
  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <div className="App">
     
        
        <Router>
            <NavBar isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>

            <div className='container'>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />

          <Route path="/login">
             <Login isAuth={isAuth} setIsAuth={setIsAuth} userID={userID} setUserID={setUserID} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
          </Route>

          <Route path="/Admin">
             <Admin isAuth={isAuth} setIsAuth={setIsAuth}/>
          </Route>
            
          <Route exact path="/Registration" component={Registration} />
            
          <Route path="/Reservation">
             <Reservation isAuth={isAuth} setIsAuth={setIsAuth} userID={userID} setUserID={setUserID}/>
          </Route>
          
          <Route path="/Profile">
             <Profile isAuth={isAuth} setIsAuth={setIsAuth}/>
          </Route>
          
            </div>
           
            <Footer />
        </Router>
    
    </div>
  );
}

export default App;
/*  test*/