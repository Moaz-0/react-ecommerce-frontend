import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import Rating from "../../../components/RatingStars";
import recent_viewed from "../../../components/setRecentProducts";
import "./new-arrival.css";
import Footer from "../Home/Footer";

function NewArrival() {
  const [sessionStorageData, setSessionStorage] = useState(
    JSON.parse(sessionStorage.getItem("products")) || []
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://ecommerce-backend-nkc0.onrender.com/api/products?populate=*&filters[new_arrival][$eq]=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      });
  }, []);

  function addProductHandler(product, productImage) {
    let sessionProducts = JSON.parse(sessionStorage.getItem("products")) || [];
    const existingProductIndex = sessionProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      if (
        sessionProducts[existingProductIndex].count <
        sessionProducts[existingProductIndex].available
      ) {
        sessionProducts[existingProductIndex].count += 1;
      }
    } else {
      sessionProducts.push({
        id: product.id,
        title: product.attributes.title,
        description: product.attributes.description,
        price: product.attributes.price,
        available: product.attributes.available,
        count: 1,
        image: productImage,
      });
    }

    sessionStorage.setItem("products", JSON.stringify(sessionProducts));
    setSessionStorage(sessionProducts);
  }

  const finalElements = products?.map((product) => {
    const productImage = product.attributes.image.data
      ? product.attributes.image.data[0].attributes.url
      : "";
    return (
      <div key={product.id} className="card products-cards">
        <div className="card-header">
          <img src={productImage} alt="card-image" className="card-img" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.attributes.title}</h5>
          <p className="card-text">
            {product.attributes.description?.length <= 50
              ? product.attributes.description
              : `${product.attributes.description.slice(0, 50)}....`}
          </p>
        </div>
        <div className="card_info">
          <span className="rating">
            <Rating rating={product.attributes.rating} />
          </span>
          <span>{product.attributes.price}$</span>
        </div>
        <div className="card-footer">
          <Link
            to={`/all-products/${product.id}`}
            className="card-button"
            onClick={() => {
              recent_viewed(product);
            }}
          >
            Read More
          </Link>
          <button
            onClick={() => addProductHandler(product, productImage)}
            disabled={product.attributes.available === 0 || !productImage}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <WebsiteNavbar
        search={true}
        block={true}
        cart={true}
        users={false}
        sessionstorage={sessionStorageData}
        setsessionstorage={setSessionStorage}
      />
      <h2 style={{textAlign:"center",margin:"20px 0 -60px 0",position:"relative",zIndex:"150"}}>New Arrival</h2>
      <div className="new-arrival-container">
        <div className="products">
          {loading ? <div className="loader"></div> : finalElements}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewArrival;
