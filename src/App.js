import { Route, Routes } from "react-router-dom";
import Flowdiv from "./components/FlowDiv";
import Home from "./Website/pages/Home/Home";
import Login from "./Website/pages/login-register/Login";
import Register from "./Website/pages/login-register/Register";
import AllProducts from "./Website/pages/All-products/AllProducts";
import ProductDetailsPage from "./Website/pages/product-details-page/ProductDetailsPage";
import CheckoutPage from "./Website/pages/Checkout-page/CheckoutPage";
import ContactUs from "./Website/pages/Contact-page/ContactUs";
import NewArrival from "./Website/pages/Newarrival-page/NewArrivalPage";
import Promotion from "./Website/pages/Promotion-page/Promotion";
import AboutUs from "./Website/pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Flowdiv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path="/new-arrival" element={<NewArrival />} />
        <Route
          path="/all-products/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
