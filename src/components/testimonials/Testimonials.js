import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Star } from "lucide-react";
import "./Testimonials.css"; // Preserved
import imageavatar2 from "../../assets/imageavatar2.png"; 
import imageavatar from "../../assets/imageavatar.png"; 
import imageavatar5 from "../../assets/imageavatar5.png"; 
import imageavatar4 from "../../assets/imageavatar4.png"; 

const testimonialsList = [
  {
    name: "Martin",
    image: imageavatar2,
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda voluptas earum expedita. Nihil, voluptatem eaque!"
  },
  {
    name: "Sarah",
    image: imageavatar,
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda voluptas earum expedita. Nihil, voluptatem eaque!"
  },
  {
    name: "David",
    image: imageavatar5,
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda voluptas earum expedita. Nihil, voluptatem eaque!"
  },
  {
    name: "Alexandra",
    image: imageavatar4,
    rating: 5,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A asperiores, provident saepe eveniet harum itaque nemo dolorum dolorem? Impedit culpa voluptatibus reiciendis minima? Assumenda voluptas earum expedita. Nihil, voluptatem eaque!"
  }
];

function Testimonials(){
  return(
    <Section id="testimonials" className="bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          What people are saying about my work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {testimonialsList.map((testi, idx) => (
          <Card key={idx} className="flex flex-col gap-6 md:flex-row items-center md:items-start text-center md:text-left p-8">
            <div className="flex-shrink-0 relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20">
              <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground">{testi.name}</h3>
              <div className="flex justify-center md:justify-start gap-1 my-2 text-yellow-500">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mt-2">
                "{testi.text}"
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;