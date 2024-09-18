import { useState } from "react";
import Slider from "../../../components/Slider";
import WebsiteNavbar from "../../../components/WebsiteNavbar";
import "../Home/home.css";
import Categories from "./Categories";
import BestSellingProducts from "./BestSellingProducts";
import NewArrival from "./NewArrival";
import RecentViewed from "./RecentViewed";
import SaleProducts from "./SaleProducts";
import Footer from "./Footer";

function Home() {
  if (sessionStorage.getItem("products") === null) {
    sessionStorage.setItem("products", JSON.stringify([]));
  }
  if (sessionStorage.getItem("recent-products") === null) {
    sessionStorage.setItem("recent-products", JSON.stringify([]));
  }
  const [sessionstorage, setSessionStorage] = useState(
    JSON.parse(sessionStorage.getItem("products"))
  );
  return (
    <>
      <WebsiteNavbar
        search={false}
        pages_links={true}
        cart={true}
        sessionstorage={sessionstorage}
        setsessionstorage={setSessionStorage}
      />
      <Slider />
      <Categories />
      <BestSellingProducts />
      <SaleProducts />
      <NewArrival />
      <RecentViewed />
      <Footer/>
    </>
  );
}

export default Home;
