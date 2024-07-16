import React from "react";

import "./style.css";

function Contact() {
    return(
        // <!-- 
        // CONTACT SECTION
        // -->    
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me</span></h2>
            <form action="">
                <div class="input-group">
                    <div class="input-box">
                        <input type="text" name="fullname" id="fullname" placeholder="Full Name"/>
                        <input type="email" name="email" id="email" placeholder="Email"/> 
                    </div>
                    <div class="input-box">
                        <input type="number" name="phonenumber" id="phonenumber" placeholder="Phone Number"/>
                        <input type="text" name="subject" id="subject" placeholder="Subject"/>
                    </div>
                </div>
                <div class="input-group-2">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" class="btn"/>
                </div>
            </form>
        </section>
    );
}

export default Contact;