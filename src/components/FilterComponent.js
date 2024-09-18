import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebsiteNavbar from "./WebsiteNavbar";
import Rating from "./RatingStars";
import recent_viewed from "./setRecentProducts";

function FilterComponent() {
  const [sessionStorageData, setSessionStorage] = useState(
    JSON.parse(sessionStorage.getItem("products")) || []
  );
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((categories_data) => setCategories(categories_data.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://ecommerce-backend-nkc0.onrender.com/api/products?populate=*&pagination[limit]=10000`
        );
        const data = await response.json();
        if (category === "") {
          setProducts(data.data);
        } else {
          const filteredProducts = data.data.filter(
            (product) => product.attributes.category === category
          );
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category]);

  async function price_filter(category, minPrice, maxPrice) {
    setLoading(true);
    await fetch(`http://localhost:1337/api/products?populate=*${
      category !== "" ? `&filters[category][$eq]=${category === ""}` : ""
    }&filters[price][$gte]=${minPrice}&filters[price][$lte]=${maxPrice}
`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      });
  }

  function addProductHandler(product, productImage) {
    let sessionProducts = JSON.parse(sessionStorage.getItem("products")) || [];
    const existingProductIndex = sessionProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      if (
        sessionProducts[existingProductIndex].count <
        sessionProducts[existingProductIndex].available
      ) {
        sessionProducts[existingProductIndex].count += 1;
      }
    } else {
      sessionProducts.push({
        id: product.id,
        title: product.attributes.title,
        description: product.attributes.description,
        price: product.attributes.price,
        available: product.attributes.available,
        count: 1,
        image: productImage,
      });
    }

    sessionStorage.setItem("products", JSON.stringify(sessionProducts));
    setSessionStorage(sessionProducts);
  }

  const filterElements = categories.map((cat) => (
    <li
      key={cat.id}
      value={cat.attributes.category_title}
      onClick={(e) => {
        setCategory(cat.attributes.category_title.toLowerCase());
        document
          .querySelectorAll(".products-filter .sidebar ul li")
          .forEach((item) => {
            item.style.backgroundColor = "transparent";
          });
        e.target.style.backgroundColor = "#e3e3e3";
        setLoading(true);
      }}
    >
      {cat.attributes.category_title}
    </li>
  ));

  const finalElements = products?.map((product) => {
    const productImage = product.attributes.image.data
      ? product.attributes.image.data[0].attributes.url
      : "";
    return (
      <div key={product.id} className="card products-cards">
        <div className="card-header">
          <img src={productImage} alt="card-image" className="card-img" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.attributes.title}</h5>
          <p className="card-text">
            {product.attributes.description?.length <= 50
              ? product.attributes.description
              : `${product.attributes.description.slice(0, 50)}....`}
          </p>
        </div>
        <div className="card_info">
          <span className="rating">
            <Rating rating={product.attributes.rating} />
          </span>
          <span>{product.attributes.price}$</span>
        </div>
        <div className="card-footer">
          <Link
            to={`/all-products/${product.id}`}
            className="card-button"
            onClick={() => {
              recent_viewed(product);
            }}
          >
            Read More
          </Link>
          <button
            onClick={() => addProductHandler(product, productImage)}
            disabled={product.attributes.available === 0 || !productImage}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <WebsiteNavbar
        search={true}
        block={true}
        cart={true}
        users={false}
        sessionstorage={sessionStorageData}
        setsessionstorage={setSessionStorage}
      />
      <div className="filter-component">
        <div className="products-filter">
          <div className="sidebar">
            <h2>Categories</h2>
            <ul>
              <li
                style={{ backgroundColor: "#e3e3e3" }}
                onClick={(e) => {
                  setCategory("");
                  document
                    .querySelectorAll(".products-filter .sidebar ul li")
                    .forEach((item) => {
                      item.style.backgroundColor = "transparent";
                    });
                  e.target.style.backgroundColor = "#e3e3e3";
                }}
              >
                All products
              </li>
              {filterElements}
            </ul>
          </div>
          <div className="sidebar price-filter">
            <h2>Price</h2>
            <input
              type="number"
              id="from"
              onChange={(e) => {
                document.querySelector(".price-filter-span span").textContent =
                  "Price: " +
                  e.target.value +
                  " - " +
                  document.querySelector(".sidebar #to").value;
              }}
            />
            <br />
            <label htmlFor="to">To</label>
            <br />
            <input
              type="number"
              id="to"
              onChange={(e) => {
                document.querySelector(".price-filter-span span").textContent =
                  "Price: " +
                  document.querySelector(".sidebar #from").value +
                  " - " +
                  e.target.value;
              }}
            />
            <button
              onClick={(e) => {
                const minPrice = document.querySelector(".sidebar #from").value;
                const maxPrice = document.querySelector(".sidebar #to").value;
                price_filter(category, minPrice, maxPrice);
                const filteredProducts = products.filter(
                  (product) =>
                    product.attributes.price >= minPrice &&
                    product.attributes.price <= maxPrice
                );
                if (filteredProducts.length === 0) {
                  e.target.parentElement.querySelector("span").textContent =
                    "No products found in this range";
                  if (minPrice === "" || maxPrice === "") {
                    e.target.parentElement.querySelector("span").textContent =
                      "Invalid input value, please enter a valid price";
                  }
                  e.target.parentElement.querySelector("span").style.display =
                    "block";
                } else {
                  setProducts(filteredProducts);
                  e.target.parentElement.querySelector("span").style.display =
                    "none";
                  document.querySelector(".price-filter-span").style =
                    "display: inline-block";
                }
              }}
            >
              Apply
            </button>
            <span></span>
          </div>
        </div>
        <div className="filter-spans">
          <span>Filters:</span>
          <div>
            <span className="category-filter">
              <span>{category === "" ? "All products" : category}</span>
            </span>
            <span className="price-filter-span" style={{ display: "none" }}>
              <span></span>
            </span>
          </div>
        </div>
        <div className="products">
          {loading ? <div className="loader"></div> : finalElements}
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
