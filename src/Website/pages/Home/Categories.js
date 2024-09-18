import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://ecommerce-backend-nkc0.onrender.com/api/categories?populate=*`
    )
      .then((res) => res.json())
      .then((categories_data) => setCategories(categories_data.data));
  }, [setCategories]);
  //   console.log(categories);

  const elements = categories.map((cat) => {
    const category_image = cat.attributes?.category_img?.data?.attributes?.url;
    return (
      <div key={cat.id} className="category">
        <img src={`${category_image}`} alt="category img" />
        <Link to={`/all-products`}>{cat.attributes.category_title}</Link>
      </div>
    );
  });

  return (
    <div className="categories">
      <Link className="all-categories" to={"all-products"}>
        All Categories
      </Link>
      {elements}
    </div>
  );
}

export default Categories;
