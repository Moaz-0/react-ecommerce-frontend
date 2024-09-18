import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../../../components/RatingStars";
import recent_viewed from "../../../components/setRecentProducts";
function BestSellingProducts() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [products, setProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch_products() {
      await axios
        .get(
          `https://ecommerce-backend-nkc0.onrender.com/api/products?populate=*&filters[best_selling][$eq]=true`
        )
        .then((response) => {
          setProducts(response.data.data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
    fetch_products();
  }, [setProducts]);

  useEffect(() => {
    // Function to update the width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  const slider_components = products?.map((product) => {
    return (
      <SwiperSlide key={product.id}>
        <div className="product-card">
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
      </SwiperSlide>
    );
  });

  return (
    <div className="best-selling-products">
      <Link className="main-link" to="/all-products">
        Best Selling Products
      </Link>

      <Swiper
        className="products-slider"
        onSwiper={setSwiperRef}
        slidesPerView={
          windowWidth >= 700
            ? 4
            : windowWidth < 700 && windowWidth > 630
            ? 3
            : 2
        }
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "custom",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {slider_components}
      </Swiper>
    </div>
  );
}

export default BestSellingProducts;
