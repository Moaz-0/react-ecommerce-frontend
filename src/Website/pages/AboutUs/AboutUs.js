import React from "react";
import "./AboutUs.css";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import Footer from "../Home/Footer";

const AboutUs = () => {
  return (
    <>
      <WebsiteNavbar search={false} pages_links={true} cart={true} />
      <section className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Welcome to Online Store, your number one source for all things
            electronics, etc. We are
            committed to providing you with top-quality products, excellent
            customer service, and a unique shopping experience.
          </p>
          <p>
            Founded in 2024, Online Store has grown from its humble beginnings
            into a trusted marketplace. Our passion for electronics
            inspired us to conduct extensive research, allowing us to offer you
            reliable and trendy products that meet your needs. We are excited to
            share our passion with you through our website.
          </p>
          <p>
            We hope you love our products as much as we love offering them to
            you. If you have any questions or feedback, feel free to reach out.
          </p>
          <p>Sincerely,</p>
          <p>
            <strong>The Manager</strong>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
