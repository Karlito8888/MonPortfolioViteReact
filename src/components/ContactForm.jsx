import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (res) => {
        console.log(res.text);
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setFeedback({ message: "Message envoyé !", type: "success" });
      },
      (err) => {
        console.log(err.text);
        setFeedback({
          message: "Une erreur s'est produite, veuillez réessayer",
          type: "error",
        });
      }
    );
  };

  // Effacer le message après un délai
  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(
        () => setFeedback({ message: "", type: "" }),
        2000
      );
      return () => clearTimeout(timer);
    }
  }, [feedback.message]);

  return (
    <div className="form-container">
      <h2>contactez-moi</h2>
      <form onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="on"
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      {feedback.message && (
        <div className={`formMessage ${feedback.type}`} aria-live="polite">
          {feedback.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
