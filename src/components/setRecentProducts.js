function recent_viewed(product) {
    let products_array = JSON.parse(sessionStorage.getItem("recent-products"));
    products_array.push(product);
    sessionStorage.setItem("recent-products", JSON.stringify(products_array));
  }

  export default recent_viewed;