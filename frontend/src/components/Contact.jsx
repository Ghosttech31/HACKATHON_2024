import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Registration</h4>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeuAXruUHm91L9XAAmUGOfav7tpTKs2CTc1Ywoc-hUeZzq6A/viewform">
              <button type="submit">Click To Register</button>
            </a>
          </div>
          <div className="item">
            <h4>Contact Us</h4>
            <a href="https://chat.whatsapp.com/GlQTwjiwEhOEVziuJcWGuR">
              <button type="submit">Join our WhatsApp Group</button>
            </a>
          </div>
          <div className="item">
            <h4>Watch Us</h4>
            <a href="https://youtu.be/HUB3FHUFyZE?si=rMpXoH8ZgTo4-EsF">
              <button type="submit">Watch us on Youtube</button>
            </a>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.253580681748!2d77.46326261066542!3d12.891409187364134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38b5e9f6f1d5%3A0xa997a8214d10ef35!2sACS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1732641527664!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
