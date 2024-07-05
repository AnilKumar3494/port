import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Using emailjs-com for sending emails
import "./contactFormStyles.css"; // Import the CSS file for styles

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_your_service_id",
        "template_your_template_id",
        form.current,
        "user_your_user_id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          console.error("Failed to send message. Error:", error);
        }
      );

    // Clear the form fields after submission if needed
    form.current.reset();
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={sendEmail} ref={form}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
