import { Link, useParams } from "react-router-dom";
import "./product-details.css";
import { useEffect, useState } from "react";
import Rating from "../../../components/RatingStars";
import RatingsComments from "./Ratings-Comments";
import RelatedProducts from "./RelatedProducts";
function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState({});
  const url_id = useParams();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch(
      `https://ecommerce-backend-nkc0.onrender.com/api/products/${url_id.productId}?populate=*`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setLoading(false);
      });
  }, [setProductDetails, url_id.productId]);

  if (loading) {
    return <div className="loader"></div>;
  }
  const imgs = productDetails?.data?.attributes?.image?.data || [];
  const first_img = productDetails.data.attributes.image.data
    ? productDetails.data.attributes.image.data[0].attributes.url
    : "";

  const product_imgs = imgs.map((data) => {
    // console.log(productDetails.data.attributes.image.data);

    return (
      <img
        key={data.id}
        src={data.attributes.url}
        alt="product img"
        style={
          data.id === productDetails.data.attributes.image.data[0].id
            ? { outline: "3px solid black" }
            : null
        }
        onClick={(e) => {
          e.target.parentElement.parentElement.querySelector(".main-img").src =
            e.target.src;
          e.target.parentElement.querySelectorAll("img").forEach((img) => {
            img.style.outline = "none";
          });
          e.target.style.outline = "3px solid black";
        }}
      />
    );
  });
  return (
    <>
      <h2 className="product-ref">{`${productDetails?.data?.attributes?.category
        ?.slice(0, 1)
        .toUpperCase()}${productDetails?.data?.attributes?.category?.slice(
        1,
        (productDetails?.data?.attributes?.category).length
      )} > ${productDetails?.data?.attributes?.title
        ?.slice(0, 1)
        .toUpperCase()}${productDetails?.data?.attributes?.title?.slice(
        1,
        (productDetails?.data?.attributes?.title).length
      )}`}</h2>
      <div className="product-container">
        <div className="product-details-1">
          <img className="main-img" src={first_img} alt="product img" />
          <div className="product-imgs">{product_imgs}</div>
        </div>
        <div className="product-details-2">
          <h2>{productDetails?.data?.attributes?.title}</h2>
          <p>{productDetails?.data?.attributes?.description}</p>
          <div className="rating">
            Rating: <Rating rating={productDetails?.data?.attributes?.rating} />
          </div>
          <p className="price">
            Price: {productDetails?.data?.attributes?.price}$
          </p>
          <p className="avail-amount">
            Available-Amount: {productDetails?.data?.attributes?.available}
          </p>
          <p className="seller">Seller: Online Store</p>
          <p className="seller-rating">
            Seller-Rating: {productDetails?.data?.attributes?.rating * 20}%
          </p>
          <div className="button-group">
            <button
              className="add-to-cart-btn"
              onClick={() => {
                const cart_array = JSON.parse(
                  sessionStorage.getItem("products")
                );
                if (cart_array.length > 0) {
                  for (let i = 0; i < cart_array.length; i++) {
                    if (productDetails.data.id === cart_array[i].id) {
                      cart_array[i].count += 1;
                      break;
                    }
                    if (i === cart_array.length - 1) {
                      cart_array.push({
                        id: productDetails.data.id,
                        title: productDetails.data.attributes.title,
                        price: productDetails.data.attributes.price,
                        description: productDetails.data.attributes.description,
                        count: 1,
                        image:
                          productDetails.data.attributes.image.data[0]
                            .attributes.url,
                        available: productDetails.data.attributes.available,
                      });
                    }
                  }
                } else {
                  cart_array.push({
                    id: productDetails.data.id,
                    title: productDetails.data.attributes.title,
                    price: productDetails.data.attributes.price,
                    description: productDetails.data.attributes.description,
                    count: 1,
                    image:
                      productDetails.data.attributes.image.data[0].attributes
                        .url,
                    available: productDetails.data.attributes.available,
                  });
                }
                sessionStorage.setItem("products", JSON.stringify(cart_array));
              }}
            >
              Add to Cart
            </button>
            <Link
              to="/checkout"
              className="buy-now-btn"
              onClick={() => {
                const cart_array = JSON.parse(
                  sessionStorage.getItem("products")
                );
                if (cart_array.length > 0) {
                  for (let i = 0; i < cart_array.length; i++) {
                    if (productDetails.data.id === cart_array[i].id) {
                      cart_array[i].count += 1;
                      break;
                    }
                    if (i === cart_array.length - 1) {
                      cart_array.push({
                        id: productDetails.data.id,
                        title: productDetails.data.attributes.title,
                        price: productDetails.data.attributes.price,
                        description: productDetails.data.attributes.description,
                        count: 1,
                        image:
                          productDetails.data.attributes.image.data[0]
                            .attributes.url,
                        available: productDetails.data.attributes.available,
                      });
                    }
                  }
                } else {
                  cart_array.push({
                    id: productDetails.data.id,
                    title: productDetails.data.attributes.title,
                    price: productDetails.data.attributes.price,
                    description: productDetails.data.attributes.description,
                    count: 1,
                    image: productDetails.data.attributes.image.data
                      ? productDetails.data.attributes.image.data[0].attributes
                          .url
                      : "",
                    available: productDetails.data.attributes.available,
                  });
                }
                sessionStorage.setItem("products", JSON.stringify(cart_array));
              }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="rating-comments">
        <RatingsComments />
      </div>
      <RelatedProducts category={productDetails?.data?.attributes?.category} />
    </>
  );
}

export default ProductDetailsPage;
