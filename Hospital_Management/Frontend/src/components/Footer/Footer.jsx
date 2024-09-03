import React from 'react'
import './Footer.css'
 const Footer = () =>{
    return(
        <div id="Footer">
      <footer>
         <div className="Footer">
            <div className="sec-aboutus">
               <h2>About Us</h2> 
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ratione qui esse sed illo nam, sint ut exercitationem quam nesciunt.</p>
               <ul className="sci">
                    <li><a  aria-label="Facebook" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li><a  aria-label="Twitter" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a  aria-label="Instagram" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a  aria-label="LinkedIn" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
               </ul>
            </div>
            <div className="sec-quicklinks">
                <h2>Support</h2>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="sec-contact">
                <h2>Contact Us</h2>
                <ul className="info">
                    <li>
                        <span><i class="fa-solid fa-phone"></i></span><p><a href="tel:+12345678900">+1 234 567 8900</a></p>
                    </li>
                    <li>
                        <span><i class="fa-solid fa-envelope"></i></span><p><a href="mailto:">knowmore@emailto.mee</a></p>
                    </li>
                </ul>
            </div>
         </div>
         <hr/>
      </footer>
        <div className="CopyrightText">
        <p>Copyright 2024 © Health-Care.com-All Rights Reserved. </p>
        </div>
        </div>
    )
 }

 export default Footer