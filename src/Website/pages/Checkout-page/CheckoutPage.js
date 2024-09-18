import CheckoutProducts from "./CheckoutProducts";
import "./checkout.css"
function CheckoutPage(props) {
  if (sessionStorage.getItem("products") == null) {
    sessionStorage.setItem("products", JSON.stringify([]));
  }
  return (
    <>
      <CheckoutProducts />
    </>
  );
}

export default CheckoutPage;
