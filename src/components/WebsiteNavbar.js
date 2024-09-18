import { Link } from "react-router-dom";
import logo from "../imgs/_9733ce01-0eef-4411-9d2c-47a739969e85.jpeg";
import SearchInput from "./SearchInput";
// import { useState } from "react";
import CartComponent from "./CartComponent";

function WebsiteNavbar(props) {
  return (
    <>
      <div className="website-nav">
        <div>
          <img
            className={`logo ${props.pages_links === true ? "logo-none" : ""}`}
            src={logo}
            alt="Logo"
          />
          <span>Online store</span>
        </div>

        {props.pages_links === true ? (
          <>
            <i
              className="fa-solid fa-bars"
              onClick={(e) => {
                if (e.target.nextElementSibling.style.left === "0%") {
                  e.target.nextElementSibling.style.left = "-100%";
                } else {
                  e.target.nextElementSibling.style.left = "0%";
                }
                document.querySelector(".flow-div").style.display = "block";
              }}
            ></i>
            <div className="links-menu">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="pages-links">
              <Link to="/all-products">All products</Link>
              <Link to="/promotions">Promotions</Link>
              <Link to="/about-us">About us</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
          </>
        ) : null}
        {props.search === true ? <SearchInput path="main" /> : null}
        {props.users === true ? (
          <div>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        ) : null}
        {props.cart === true ? (
          <div
            className="cart-icon"
            onClick={() => {
              document.querySelector(".cart-container").style.right = "0%";
              document.querySelector(".flow-div").style.display = "block";
            }}
          >
            <i className="fa-solid fa-shopping-cart"></i>
            <span>
              {props.sessionstorage?.length
                ? props.sessionstorage.length
                : JSON.parse(sessionStorage.getItem("products")).length}
            </span>
          </div>
        ) : null}
      </div>
      <CartComponent
        sessionstorage={props.sessionstorage}
        setsessionstorage={props.setsessionstorage}
      />
    </>
  );
}

export default WebsiteNavbar;
