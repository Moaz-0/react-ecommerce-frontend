import { useLocation } from "react-router-dom";
import { NotificationMenuState, ProfileMenuState } from "./General_state";
import { useRecoilState } from "recoil";

function Flowdiv() {
  const current_location = useLocation();
  // let [profile_menu, setProfileMenu] = useRecoilState(ProfileMenuState);
  // let [notification, setNotification] = useRecoilState(NotificationMenuState);
  function flow_div() {
    // document.querySelector(".profile_menu").style.display = "none";
    // document.querySelector(".notification_menu").style.display = "none";
    // setProfileMenu(0);
    // setNotification(0);
    document.querySelector(".flow-div").style.display = "none";
    if (current_location.pathname === "/") {
      document.querySelector(".website-nav .links-menu").style.left = "-100%";
    }
    if (current_location.pathname === "/under-delivery") {
      document.querySelector(".product-details").style.display = "none";
    }
    if (current_location.pathname === "/users-accounts") {
      document.querySelector(".product-details").style.display = "none";
    }
    if (current_location.pathname === "/products") {
      document.querySelector(".product-details").style.display = "none";
      document.querySelector(".product-form").style.display = "none";
    }
    if (
      current_location.pathname === "/all-products" ||
      current_location.pathname === "/new-arrival" ||
      current_location.pathname === "/contact-us" ||
      current_location.pathname === "/"
    ) {
      document.querySelector(".cart-container").style.right = "-100%";
    }
    if (current_location.pathname === "/checkout") {
      document.querySelector(".flow-div").style.display = "none";
    }
  }
  return (
    <div
      className="flow-div"
      onClick={() => {
        flow_div();
      }}
    ></div>
  );
}

export default Flowdiv;
