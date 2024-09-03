import React,{ useContext, useState } from 'react'
import './Navbar.css'
import { Assets } from '../../Assets/Assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../StoreContext/StoreContext';
const Navbar = ({setshowLogin}) => {
   const [underline,setunderline]=useState("");
   const {token,settoken} =useContext(StoreContext);
   const navigate=useNavigate();
   const logout = () =>{
      localStorage.removeItem("token");
      settoken("");
      navigate("/")
   }
   console.log('Logout icon path:', Assets.logout_icon);
    return ( 
       <div className='Navbar'>
        <Link to='/'><img src={Assets.logo} alt="" className="logo"/></Link>
        <ul className="Navbar-Menu">
          <Link to="/" onClick={()=>setunderline("home")}className={underline==="home"?"active":""}>Home</Link>
          <a href='#About-us' onClick={()=>setunderline("About-us")} className={underline==="About-us"?"active":""}>About-us</a>
          {/* <a href='#app-download' onClick={()=>setunderline("Mobile-app")}className={underline==="Mobile-app"?"active":""}>Mobile-app</a> */}
          <a href='#Footer' onClick={()=>setunderline("contact-us")} className={underline==="contact-us"?"active":""}>Contact us</a>
        </ul>
          <div className="Navbar-right">
            {!token?<button onClick={()=>setshowLogin(true)}>sign in</button>:
              <div className="navbar-profile">
                <img src={Assets.profile_icon} alt="" />
                <ul className="navbar-profile-dropdown">
                  {/* <li><img src={Assets.bag_icon} alt=""/></li>
                    <hr/> */}
                  <li onClick={logout}><img src={Assets.logout_icon} alt=""/><p>Logout</p></li>
                </ul>
              </div>
            }
          </div>
       </div>
     )
}
 
export default Navbar;