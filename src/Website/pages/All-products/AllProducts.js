import FilterComponent from "../../../components/FilterComponent";
import Footer from "../Home/Footer";
import "./allproducts.css"

function AllProducts() {
  if(sessionStorage.getItem("products") == null){
    sessionStorage.setItem("products",JSON.stringify([]));
  }
  return (
    <>
    <div className="products-container">
      <FilterComponent/>
    </div>
    <Footer/>
    </>
  );
}

export default AllProducts;
