import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBarStyle.css";

const categoryInitial = [
  {
    id: 1,
    isShow: false,
    category: [
      { brand: "اپل واچ", id: 1, to: "" },
      { brand: " شیائومی", id: 2, to: "" },
      { brand: "سامسونگ", id: 3, to: "" },
      { brand: "هواوی ", id: 4, to: "" },
    ],
  },
  {
    id: 2,
    isShow: false,
    categoryBlog: [
      { blog: "اخرین اخبار ساعت", id: 1, to: "" },
      { blog: "آخرین اخبار ساعت ", id: 2, to: "" },
      { blog: " آخرین اخبار ساعت", id: 3, to: "" },
    ],
  },
];

const NavBar = ({ show, setShow, ShowHandler }) => {
  const [category, setCategory] = useState(categoryInitial);
  const [blogCategory, setBlogCategory] = useState(categoryInitial);

  const categoryHandler = (id) => {
    const index = category.findIndex((p) => p.id === id);
    const indexCategory = { ...category[index] };
    indexCategory.isShow = !indexCategory.isShow;
    const updateCategory = [...category];
    updateCategory[index] = indexCategory;
    setCategory(updateCategory);
  };

  const blogCategoryHandler = (id) => {
    const index = blogCategory.findIndex((p) => p.id === id);
    const indexblogCategory = { ...blogCategory[index] };
    indexblogCategory.isShow = !indexblogCategory.isShow;
    const updateblogCategory = [...blogCategory];
    updateblogCategory[index] = indexblogCategory;
    setBlogCategory(updateblogCategory);
  };

  return (
    <nav className="navBar-container">
      <ul className="ul-navBar">
        <div className="title-product-category" onClick={() => ShowHandler(3)}>
          خانه
        </div>
        <NavLink to="storePage" className="title-product-category" onClick={() => ShowHandler(3)}>
          فروشگاه
        </NavLink>

        {/* category for products */}

        <div className="product-category-container">
          <div
            onClick={() => categoryHandler(1)}
            className="title-product-category"
          >
            <p>دسته بندی</p>
            <p>{category[0].isShow ? "-" : "+"}</p>
          </div>
        </div>
        <ul className={category[0].isShow ? "product-category" : "notActiv"}>
          {category[0].category.map((item) => (
            <li onClick={() => setShow(!show)} key={item.id} className="product-category-brand">
              {item.brand}
            </li>
          ))}
        </ul>

        {/* category for blogs */}

        <div className="product-category-container">
          <div
            onClick={() => blogCategoryHandler(2)}
            className="title-product-category"
          >
            <p>مقالات</p>
            <p>{blogCategory[1].isShow ? "-" : "+"}</p>
          </div>
          <ul
            className={blogCategory[1].isShow ? "product-category" : "notActiv"}
          >
            {blogCategory[1].categoryBlog.map((item) => (
              <li key={item.id}>{item.blog}</li>
            ))}
          </ul>
        </div>

        <div className="title-product-category">درباره ما</div>
        <div className="title-product-category">ارتباط با ما</div>
      </ul>
    </nav>
  );
};

export default NavBar;
