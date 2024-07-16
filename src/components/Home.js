import React from "react";

import "./style.css";
import myprofile from "../assets/myproflie.jpeg"; // Correct path to the image


function Home(){
    return(
        // HOME SECTION
        <section class="home" id="home">
            <div class="home-content">
                <h1>Hi, It's <span>Ahtisham</span></h1>
                <h3 class="text-animation">I'm a <span></span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi omnis sapiente velit pariatur sit! Ratione nam rerum magni cum,
                    ipsam veniam debitis, nulla quasi rem corrupti sit, earum eligendi! Natus!
                </p>
    
                <div class="social-icons">
                    <a href="#"><i class='bx bxl-linkedin'></i></a>
                    <a href="#"><i class='bx bxl-github'></i></a>
                    <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                </div>
    
                <div class="btn-group">
                    <a href="#" class="btn">Hire</a>
                    <a href="contact" class="btn">Contact</a>
                </div>
            </div>
    
            <div class="home-img">
                <img src={myprofile} alt=""/>
            </div>
        </section>
    );
}

export default Home;

