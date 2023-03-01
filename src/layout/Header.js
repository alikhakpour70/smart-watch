import "./layoutStayle.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navBar = [
  { title: "خانه", id: 1, to: "/" },
  {
    title: "دسته بندی",
    id: 2,
    dropDownIcon: "+",
    isShow: "false",
    category: [
      { titel: "اپل واچ", id: 1, to: "" },
      { titel: " شیائومی", id: 2, to: "" },
      { titel: "سامسونگ", id: 3, to: "" },
      { titel: "هواوی ", id: 4, to: "" },
    ],
  },
  { title: "مقالات", id: 6, to: "", dropDownIcon: "+" },
  { title: "درباره ما", id: 3, to: "" },
  { title: "ارتباط با ما", id: 4, to: "" },
  { title: "ورود", id: 5, to: "" },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [Category, setCategory] = useState({});

  const menuHamdler = () => {
    setShow(!show);
  };

  //  function to show category

  const categoryHandler = (id) => {
    console.log(id);
  };

  return (
    <header className="header-container">
      <section className="header">
        <section className="right-header">
          <i onClick={menuHamdler}>{!show ? <FiMenu /> : <AiOutlineClose />}</i>

          {/* dropDown of sidbar */}

          <div className={show ? "menuSid" : " menuSid-false"}>
            <div>
              {navBar.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.id}
                  className="navlink-container"
                >
                  <li onClick={menuHamdler}>{item.title}</li>
                  <li className="dropDownIcon">{item.dropDownIcon}</li>
                </NavLink>
              ))}
            </div>
          </div>
          <p className="smartWatch2"> تایــم لنـــد</p>

          {/* navbar of min-Width 765px  */}

          <div className="navBar-header">
            {navBar.map((item) => (
              <div key={item.id} className="navlink-container">
                <NavLink to={item.to}> </NavLink>
                <p
                  className="dropDownIcon"
                  onClick={}
                ></p>
              </div>
            ))}
          </div>

          <p className="smartWatch">تایـــم لنـــــد </p>
        </section>
        <div className="left-header">
          <i>
            <BsBellFill />
          </i>
          <i>
            <FiSearch />
          </i>
        </div>
      </section>
    </header>
  );
};

export default Header;
