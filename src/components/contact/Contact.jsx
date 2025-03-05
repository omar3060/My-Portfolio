import React, { useRef } from "react";
import "./contact.css";
import TopSection from "../topSection/TopSection";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "omarmahmoudcs@gmail.com",
    link: "mailto:omarmahmoudcs@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Omar Mahmoud",
    link: "https://m.me/omarmahmoud",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01012306019",
    link: "https://api.whatsapp.com/send?phone=201012306019",
  },
];
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_j655mcb", "template_tbvunyn", form.current, {
      publicKey: "JhkV0cCDpNyaMXknT",
    }).then(()=> {
      e.target.reset()
    }).catch((error) => {
      console.error("Email sending failed:", error)
    })
  };
  return (
    <section className="contact" id="contact">
      <TopSection heading2="Contact Me" heading5="Get In Touch" />

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            rows={10}
            name="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
