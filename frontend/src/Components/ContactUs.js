import React from "react";
import '../Assets/css/contactUs.css'

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-us__container">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out the form below to contact us.</p>
        <form action="/contact" method="post">
          <div className="contact-us__form-group">
            <label for="name">Your Name</label>
            <input type="text" name="name" />
          </div>
          <div className="contact-us__form-group">
            <label for="email">Your Email</label>
            <input type="email" name="email" />
          </div>
          <div className="contact-us__form-group">
            <label for="message">Your Message</label>
            <textarea name="message"></textarea>
          </div>
          <div className="contact-us__form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
