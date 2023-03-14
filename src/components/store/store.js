import { useState } from "react";
import "./storeStyle.css";
import data from "../../DataBase/db";
import { NavLink } from "react-router-dom";

const Store = () => {
  const [products, setProducts] = useState(data);

  return (
    <div className="store-container">
      {products.map((product) => (
        <div className="product-container">
          <div className="product-container-image">
            <img src={product.images[0]} />
          </div>
          <div></div>
          <div className="AddandPrice-product-container">
            <p className="price" >  {product.price} تومان</p>
            <NavLink to="/detailProduct" className="addToCart">مشاهده و سفارش</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
