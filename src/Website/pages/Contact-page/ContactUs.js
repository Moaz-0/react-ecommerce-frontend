import React, { useState } from "react";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import Footer from "../Home/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <WebsiteNavbar pages_links={true} cart={true} />
      <div
        style={{
          maxWidth: "600px",
          margin: "100px auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <h2>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              margin: "10px 0",
              borderRadius: "4px",
              border: "1px solid #ccc",
              height: "100px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "30px" }}>
          <h3>Get In Touch</h3>
          <p>
            <strong>Email:</strong> support@onlinestore.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Address:</strong> 123 Your Street, Your City, Country
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
