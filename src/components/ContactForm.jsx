import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          setMessage("Message envoyé !");
          setMessageType("success");
        },
        (err) => {
          console.log(err.text);
          setMessage("Une erreur s'est produite, veuillez réessayer");
          setMessageType("error");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setMessage("");
          setMessageType("");
        }, 2000);
      });
  };

  return (
    <div className="form-container">
      <h2>contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className={`formMessage ${messageType}`} aria-live="polite">
        {message}
      </div>
    </div>
  );
};

export default ContactForm;
