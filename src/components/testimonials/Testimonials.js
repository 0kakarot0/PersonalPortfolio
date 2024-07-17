import React from "react";

import "./Testimonials.css";
import imageavatar2 from "../../assets/imageavatar2.png"; 
import imageavatar from "../../assets/imageavatar.png"; 
import imageavatar5 from "../../assets/imageavatar5.png"; 
import imageavatar4 from "../../assets/imageavatar4.png"; 


function Testimonials(){
    return(
        // <!-- 
        // TESTIMONIALS SECTION
        // -->
        <section class="testimonials" id="testimonials">
            <div class="testimonials-box">
                <h2 class="heading">Testimonials</h2>
                <div class="wrapper">
                    <div class="testimonial-item">
                        <img src={imageavatar2} alt="" />
                        <h2>Martin</h2>
                        <div class="rating">
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet
                            harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda
                            voluptas earum expedita. Nihil, voluptatem eaque!
                        </p>
                    </div>
                    <div class="testimonial-item">
                        <img src={imageavatar} alt="" />
                        <h2>Sarah</h2>
                        <div class="rating">
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet
                            harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda
                            voluptas earum expedita. Nihil, voluptatem eaque!
                        </p>
                    </div>
                    <div class="testimonial-item">
                        <img src={imageavatar5} alt="" />
                        <h2>David</h2>
                        <div class="rating">
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet
                            harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda
                            voluptas earum expedita. Nihil, voluptatem eaque!
                        </p>
                    </div>
                    <div class="testimonial-item">
                        <img src={imageavatar4} alt="" />
                        <h2>Alexandra</h2>
                        <div class="rating">
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                            <i class='bx bxs-star' id="star"></i>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet
                            harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda
                            voluptas earum expedita. Nihil, voluptatem eaque!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;