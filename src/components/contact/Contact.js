import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import "./Contact.css"; // Preserved old CSS just in case

function Contact() {
  return(
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact <span className="text-primary">Me</span></h2>
          <p className="text-muted-foreground text-lg mb-8">
            I'm currently available for freelance projects and full-time roles. 
            Feel free to reach out if you're looking for a dedicated software engineer or QA professional.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Global / Remote</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8 border-0 bg-secondary/50">
          <form action="" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullname" className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="w-full h-11 rounded-lg bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-11 rounded-lg bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phonenumber" className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  className="w-full h-11 rounded-lg bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full h-11 rounded-lg bg-background/50 border border-white/10 px-4 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Inquiry"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                className="w-full h-32 rounded-lg bg-background/50 border border-white/10 p-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full" size="lg">Send Message</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

export default Contact;