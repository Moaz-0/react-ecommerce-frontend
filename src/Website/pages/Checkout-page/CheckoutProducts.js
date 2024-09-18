import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

function CheckoutProducts(props) {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);

  useEffect(() => {
    setCheckoutProducts(JSON.parse(sessionStorage.getItem("products")));
  }, []);

  const handleDeleteProduct = (id) => {
    const updatedCart = checkoutProducts.filter((product) => product.id !== id);
    console.log(updatedCart);

    sessionStorage.setItem("products", JSON.stringify(updatedCart));
    setCheckoutProducts(updatedCart);
  };

  const checkout_products = checkoutProducts?.map((product) => (
    <div key={product.id} className="checkoutProduct-container">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <h3>Price: {product.price}$</h3>
        <h3>Available-Amount: {product.available}</h3>
        <span style={{ marginTop: "25px" }}>
          Count:{" "}
          <i
            style={{
              fontSize: "15px",
              margin: "0 10px",
              backgroundColor: "black",
              padding: "5px",
              borderRadius: "100%",
              color: "white",
              cursor: "pointer",
            }}
            className="fa-solid fa-minus"
            /////////i will do for each to update the product count in session storage
            onClick={(e) => {
              const products = checkoutProducts;
              if (product.count > 1) {
                products.forEach((ele) => {
                  if (ele.id === product.id) {
                    ele.count -= 1;
                  }
                });
                sessionStorage.setItem("products", JSON.stringify(products));
                setCheckoutProducts(
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
              color: "white",
              cursor: "pointer",
            }}
            className="fa-solid fa-plus"
            onClick={(e) => {
              const products = checkoutProducts;
              if (product.count >= 1 && product.count < product.available) {
                products.forEach((ele) => {
                  if (ele.id === product.id) {
                    ele.count += 1;
                  }
                });
                sessionStorage.setItem("products", JSON.stringify(products));
                setCheckoutProducts(
                  JSON.parse(sessionStorage.getItem("products"))
                );
              }
            }}
          ></i>
        </span>
        <h3>Total-Price: {product.count * product.price}</h3>
      </div>
      <button
        className="cart-delete-btn"
        onClick={() => {
          handleDeleteProduct(product.id);
        }}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>Checkout</h1>
      {checkout_products.length === 0 ? (
        <h2 className="empty-page">There is no products</h2>
      ) : null}

      {checkout_products.length > 0 && (
        <div className="checkout-products products-arrow">
          <h2
            className="products-arrow-title"
            onClick={(e) => {
              if (showProducts === false) {
                document.querySelector(".products-arrow").style.height =
                  "fit-content";

                document.querySelector(".arrow-i").style.transform =
                  "rotateZ(0deg)";
                setShowProducts(true);
              } else {
                document.querySelector(".products-arrow").style.height = "40px";
                document.querySelector(".arrow-i").style.transform =
                  "rotateZ(-90deg)";
                setShowProducts(false);
              }
            }}
          >
            Products
          </h2>
          {checkout_products}
          <i
            className="fa-solid fa-chevron-down arrow-i"
            onClick={(e) => {
              if (showProducts === false) {
                document.querySelector(".products-arrow").style.height =
                  "fit-content";

                document.querySelector(".arrow-i").style.transform =
                  "rotateZ(0deg)";
                setShowProducts(true);
              } else {
                document.querySelector(".products-arrow").style.height = "40px";
                document.querySelector(".arrow-i").style.transform =
                  "rotateZ(-90deg)";
                setShowProducts(false);
              }
            }}
          ></i>
        </div>
      )}

      {checkout_products.length > 0 && (
        <CheckoutForm checkout_products={checkoutProducts} />
      )}
    </>
  );
}

export default CheckoutProducts;
