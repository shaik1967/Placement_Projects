import React,{ createContext,useEffect,useState} from "react"
import specialization_people, { specialization_list } from "../../Assets/Assets"
export const StoreContext =createContext(null)

const StoreContextProvider =(props) =>{
    const url="http://localhost:4000"
    const [token,settoken]=useState("");
    const ContextValue ={
        specialization_list,
        specialization_people,
        url,
        token,
        settoken,
    }
    useEffect(()=>{
      if(localStorage.getItem("token")){
        settoken(localStorage.getItem("token"));
      }
    },[])
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;