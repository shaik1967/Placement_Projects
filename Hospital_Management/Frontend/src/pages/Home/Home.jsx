import {React,useContext,useEffect} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import AppDownload from '../../components/AppDownload/AppDownload'
import axios from "axios" 
import {StoreContext} from '../../components/StoreContext/StoreContext'
const Home =()=> {
    const {url,token,settoken}= useContext(StoreContext)
    const getUserData = async () =>{
      let newUrl=url;
      newUrl+="/api/doctorRouter/getdoctordata"
        try{
          const res= await axios.post(newUrl,{},{
             headers:{
              Authorization:"Bearer "+localStorage.getItem("token"),
             }  
          })
        }
        catch(error){
          console.log(error)
        }
    }  

  useEffect(() =>{
    getUserData()
  },[])
    return(
      <div>
        <Header/>
        <AppDownload/> 
      </div>
    )
}

export default Home;