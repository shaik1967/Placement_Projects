import React from "react";
import "./AppDownload.css"
import { Assets } from "../../Assets/Assets";
const AppDownload =() => {
  return (
  <div className="app-download" id="app-download">
        <p>For Better Experience Download <br/>Health Care App<br/></p>  
        <div className="app-downlod-platforms">
            <img src={Assets.google_play_store} className="google" alt="" />
            <img src={Assets.Appstore} alt="" />
        </div>  
  </div>
  )
}
export default AppDownload