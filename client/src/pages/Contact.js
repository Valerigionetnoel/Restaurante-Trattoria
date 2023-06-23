import React from "react";
import "./Contact.css";
import { MailOutlined } from "@ant-design/icons";
import { MessageOutlined } from "@ant-design/icons";

const ContactPage = () => {
  return (
    // CONTACT US
    <section id="contact">
      <h5>Get In Touch with us</h5>
      <h2>Contact us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MessageOutlined className="contact_icon" />
            <h4>Messenger</h4>
            <h5>dummymessenger</h5>
            <a href="https://m.me/dummymessenger" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MailOutlined className="contact_icon" />
            <h4>Email</h4>
            <h5>ihavenoemail@email.com</h5>
            <a href="mailto:ihavenoemail@email.com" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* FORM */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Your Phone Number"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
