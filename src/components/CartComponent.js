import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartComponent({ setsessionstorage, sessionstorage }) {
  const [cartProducts, setCartProducts] = useState(sessionstorage || []);
  useEffect(() => {
    setCartProducts(sessionstorage || []);
  }, [sessionstorage]);
  // console.log(cartProducts);

  const handleDeleteProduct = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    sessionStorage.setItem("products", JSON.stringify(updatedCart));
    // console.log(updatedCart);

    setCartProducts(updatedCart);
  };
  return (
    <div className="cart-container">
      <i
        className="fa-solid fa-chevron-right"
        onClick={(e) => {
          e.target.parentElement.style.right = "-100%";
        }}
      ></i>
      <h2 className="cart-title">Shopping Cart</h2>
      {cartProducts?.length === 0 ? (
        <div className="cart-empty">Your cart is empty</div>
      ) : (
        <div className="cart-items">
          {cartProducts.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={`${product.image}`}
                alt={product.title}
                className="cart-image"
              />
              <div className="cart-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span style={{ display: "block", marginBottom: "10px" }}>
                  Avail-Amount: {product.available}
                </span>
                <span style={{ marginTop: "25px" }}>
                  Count:{" "}
                  <i
                    style={{
                      fontSize: "15px",
                      margin: "0 10px",
                      backgroundColor: "black",
                      padding: "5px",
                      borderRadius: "100%",
                      cursor: "pointer",
                    }}
                    className="fa-solid fa-minus"
                    onClick={(e) => {
                      const products = sessionstorage;
                      if (product.count > 1) {
                        products.forEach((ele) => {
                          if (ele.id === product.id) {
                            ele.count -= 1;
                          }
                        });
                        sessionStorage.setItem(
                          "products",
                          JSON.stringify(products)
                        );
                        setCartProducts(
                          JSON.parse(sessionStorage.getItem("products"))
                        );
                      }
                    }}
                  ></i>
                  <span>{product.count}</span>
                  <i
                    style={{
                      fontSize: "15px",
                      margin: "0 10px",
                      backgroundColor: "black",
                      padding: "5px",
                      borderRadius: "100%",
                      cursor: "pointer",
                    }}
                    className="fa-solid fa-plus"
                    onClick={(e) => {
                      const products = sessionstorage;
                      if (
                        product.count >= 1 &&
                        product.count < product.available
                      ) {
                        products.forEach((ele) => {
                          if (ele.id === product.id) {
                            ele.count += 1;
                          }
                        });
                        sessionStorage.setItem(
                          "products",
                          JSON.stringify(products)
                        );
                        setCartProducts(
                          JSON.parse(sessionStorage.getItem("products"))
                        );
                      }
                    }}
                  ></i>
                </span>
              </div>
              <button
                className="cart-delete-btn"
                onClick={() => {
                  handleDeleteProduct(product.id);
                  setsessionstorage(
                    JSON.parse(sessionStorage.getItem("products"))
                  );
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartProducts.length !== 0 ? (
        <Link
          to="/checkout"
          className="order-now-btn"
          onClick={() => {
            document.querySelector(".flow-div").style.display = "none";
          }}
        >{`Order Now (${cartProducts.length})`}</Link>
      ) : null}
    </div>
  );
}

export default CartComponent;
