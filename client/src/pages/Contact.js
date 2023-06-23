import { MailOutlined } from "@ant-design/icons";
import { MessageOutlined } from "@ant-design/icons";
import {StyledContactContainer, StyledContactBottom, StyledContactForm} from '../styled/Contact.styled';

const ContactPage = () => {
  return (

   <StyledContactContainer>
      <h2>Get in touch with us</h2>
        {/* FORM */}
        <StyledContactForm>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
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
          <br />
          <button type="submit" className="button">
            Send Message
          </button>
        </StyledContactForm>
        <StyledContactBottom>
          <article>
            <MessageOutlined className="contact_icon" />
            <h3>
            <a href="https://m.me/dummymessenger" target="_blank" rel="noreferrer" >
            Messenger
            </a></h3>
          </article>
          <article>
            <MailOutlined className="contact_icon" />
            <h3><a href="mailto:ihavenoemail@email.com" target="_blank" rel="noreferrer" >
              Email
            </a></h3>
          </article>
          </StyledContactBottom>
      </StyledContactContainer>
  );
};

export default ContactPage;
