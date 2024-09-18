import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { AllProducts } from "./General_state";

function Slider() {
  const [products, setProducts] = useRecoilState(AllProducts);
  const [loading, setLoading] = useState(true);

  const apiLink =
    "https://ecommerce-backend-nkc0.onrender.com/api/products?populate=*&filters[slider_show][$eq]=true";

  useEffect(() => {
    async function fetch_products() {
      await axios
        .get(apiLink)
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


  const getCategoryDescription = (category) => {
    switch (category) {
      case "electronics":
        return `Discover the Latest in Electronics: From high-performance laptops 
                to innovative gadgets, elevate your tech experience with our exclusive collection.`;
      case "home":
        return `Transform Your Home: Explore our range of home essentials 
                designed to bring comfort and style to your living space.`;
      case "books":
        return `Get Lost in a Book: Whether it's a classic or a new release, 
                our selection has something for every book lover.`;
      case "sports":
        return `Gear Up for Action: Check out our latest sports equipment 
                to elevate your game, from running to cycling and more.`;
      case "automotive":
        return `Drive in Style: Browse our automotive products to upgrade your vehicle 
                with the latest accessories and gadgets.`;
      case "health":
        return `Enhance Your Well-Being: From fitness trackers to medical devices, 
                our health products are here to support your journey.`;
      case "kitchen":
        return `Cook Like a Pro: Discover high-quality kitchen tools and appliances 
                to enhance your cooking experience.`;
      case "garden":
        return `Your Garden Paradise: Explore tools and furniture to create a 
                beautiful and functional outdoor space.`;
      case "furniture":
        return `Stylish Furniture for Every Room: Find the perfect pieces to 
                complement your home with our modern and classic furniture options.`;
      case "office":
        return `Boost Productivity: Explore our range of office furniture 
                and supplies to create the perfect work environment.`;
      default:
        return `Explore Our Collection: Find products that match your style, 
                preferences, and needs across various categories.`;
    }
  };




  const slider_components = products?.map((product) => {
    return (
      <SwiperSlide key={product.id}>
        <div className="slider-div" key={product.id}>
          <img
            src={`${product.attributes.image.data[0].attributes.url}`}
            alt={`Slider img`}
          />
          <div className="details">
            <p>
              {getCategoryDescription(product.attributes.category)}
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slider_components}
    </Swiper>
  );
}

export default Slider;
