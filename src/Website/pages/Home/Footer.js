import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#2c2c2c", color: "#fff", padding: "40px 0" ,marginTop:"100px"}}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", margin: "20px",minWidth:"300px" }}>
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce store providing top-quality products
            worldwide. Our mission is to deliver the best shopping experience to
            our customers.
          </p>
        </div>

        <div style={{ flex: "1", margin: "20px",minWidth:"100px" }}>
          <h3>Quick Links</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="/shop" style={{ color: "#fff", textDecoration: "none" }}>
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" style={{ color: "#fff", textDecoration: "none" }}>
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: "1", margin: "20px" }}>
          <h3>Follow Us</h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
            }}
          >
            <li>
              <a
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: "1", margin: "20px" }}>
          <h3>Contact Us</h3>
          <p>Email: support@onlinestore.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Your Street, Your City, Country</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #444' }}>
        <p style={{marginBottom:"10px"}}>&copy; 2024 Online Store. All rights reserved.</p>
        <p>Website built by <a href="https://www.linkedin.com/in/moaz-hassan" style={{color:"white",borderBottom:"1px solid white"}}>Moaz Hassan</a></p>
      </div>
    </footer>
  );
};

export default Footer;
