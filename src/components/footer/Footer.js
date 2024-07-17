import React from "react";

import "./Footer.css";

function Footer(){
    return(
        // <!-- 
        // Footer SECTION
        // -->   
        <footer class="footer">
            <div class="social">
                <a href="#"><i class='bx bxl-linkedin'></i></a>
                <a href="#"><i class='bx bxl-github'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href="#"><i class='bx bxl-twitter'></i></a>   
            </div>
    
            <ul class="list"> 
                <li>
                    <a href="" >FAQS</a>
                </li>
                <li>
                    <a href="" >Services</a>
                </li>
                <li>
                    <a href="" >About Me</a>
                </li>
                <li>
                    <a href="" >Contact</a> 
                </li>
                <li>
                    <a href="" >Testimonials</a>
                </li>
            </ul>
            <p class="copyright">
                © Ahtisham Ilyas | All Right Reserved
            </p>
        </footer>
    );
}

export default Footer;