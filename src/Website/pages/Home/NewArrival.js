import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../../../components/RatingStars";
import recent_viewed from "../../../components/setRecentProducts";

function NewArrivalcopy() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch_products() {
      await axios
        .get(
          `https://ecommerce-backend-nkc0.onrender.com/api/products?populate=*&filters[new_arrival][$eq]=true`
        )
        .then((response) => {
          setProducts(response.data.data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
    fetch_products();
  }, [setProducts]);

  if (loading) {
    return <div className="loader"></div>;
  }
  const slider_components = products?.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <img
          src={
            product.attributes.image.data
              ? product.attributes.image.data[0].attributes.url
              : ""
          }
          alt={product.attributes.title}
        />
        <h3>{product.attributes.title.slice(0, 13) + "..."}</h3>
        <p>Price: {product.attributes.price} $</p>
        <p style={{ marginTop: "-10px" }}>
          Rating: <Rating rating={product.attributes.rating} />
        </p>
        <Link
          to={`/all-products/${product.id}`}
          onClick={() => {
            recent_viewed(product);
          }}
        >
          See Details
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="new-arrival">
        <Link to="/new-arrival">New Arrival</Link>
        <div className="content">{slider_components}</div>
        <Link className="show-more" to="/new-arrival">
          Show more
        </Link>
      </div>
    </>
  );
}

export default NewArrivalcopy;
