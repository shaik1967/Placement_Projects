import React, { useEffect, useState,useContext } from "react";
// import {useNavigate,Link} from "react-router-dom";
import './LoginPopup.css';
import { StoreContext } from "../StoreContext/StoreContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../../redux/features/alertslice.js";
const LoginPopup = ({setshowLogin}) => {
  const {url,settoken} = useContext(StoreContext);
  const [currState, setcurrState] = useState("Login");
  const[data,setdata]=useState({
    name:"",
    email:"",
    password:"",
    Specialization:""
  })
  const dispatch= useDispatch();
  const onLogin =async(event)=>{
     event.preventDefault();
     try{
      dispatch(showLoading());
      let newUrl=url;
      if(currState==="Login"){newUrl+="/api/doctorRouter/logindoctor"}
      else {newUrl+="/api/doctorRouter/registerdoctor"}
      const response=await axios.post(newUrl,data)
      dispatch(hideLoading());
      if(response.data.success){
          settoken(response.data.token);
          localStorage.setItem("token",response.data.token);
          setshowLogin(false);
      }
      else{ alert(response.data.message)};
    }
    catch(error){
      dispatch(hideLoading());
      console.log(error)
      // message.error("Something went wrong");
    }
  }
  const onChangehandler = (event) =>{
    const name=event.target.name;
    const value=event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <div className="LoginPopup">
      <form  onSubmit={onLogin} className="LoginPopup-Container">
        <div className="LoginPopup-title">
          <h2>{currState}</h2>
          <i onClick={() => setshowLogin(false)} className="fa-solid fa-xmark"></i>
        </div>
        <div className="Login-popup-inputs">
              {currState !== "Login" && (
                <input type="text" name="name" onChange={onChangehandler} value={data.name} placeholder="Your Name" required />
              )}
              <input type="email" name="email"  onChange={onChangehandler} value={data.email} placeholder="Your email" required/>
              <input type="password" name="password" onChange={onChangehandler} value={data.password} placeholder="Password" required />
              {currState !== "Login" && (
                <input type="text" name="Specialization" onChange={onChangehandler}  value={data.Specialization} 
                placeholder="Your Specialization" required />
              )}
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
