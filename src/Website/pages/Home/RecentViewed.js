import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../../../components/RatingStars";
function RecentViewed() {
  const [recentViewed, setRecentViewed] = useState(
    JSON.parse(sessionStorage.getItem("recent-products"))
  );
  const [swiperRef, setSwiperRef] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

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

  const slider_components = recentViewed?.map((product) => {
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
          <Link to={`/all-products/${product.id}`}>See Details</Link>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="recent-viewed-products">
      <h2 className="main-title">
        Recent Viewed
      </h2>
      {slider_components.length!==0?<Swiper
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
      </Swiper>:<h2 className="main-title" style={{color:"gray"}}>'There is no products veiwed'</h2>}
    </div>
  );
}

export default RecentViewed;
