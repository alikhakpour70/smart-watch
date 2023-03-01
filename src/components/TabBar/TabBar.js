import "./tabbarStyle.css";
import { BiHome, BiStore } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiLogIn } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const tabbar = [
  { title: "cart", icon: <HiOutlineShoppingBag />, to: "/cartPage", id: 5 },
  // { title: "search", icon: <FiSearch />, to: "/search", id: 4, isShow: false },
  { title: "home", icon: <BiHome />, to: "/", id: 3 },
  { title: "store", icon: <BiStore />, to: "/storePage", id: 2 },
  { title: "login", icon: <FiLogIn />, to: "/loginPage", id: 1 },
];

const TabBar = () => {
  const [show, setShow] = useState(tabbar);

  const showHandler = (id) => {
    const index = tabbar.findIndex((p) => p.id === id);
    const icons = { ...tabbar[index] };
    icons.isShow = !icons.isShow;
    const updateIcons = [...tabbar];
    updateIcons[index] = icons;
    setShow(updateIcons);
  };
  return (
    <div className="tabbar-component">
      <div className="tabbar-container">
        {show.map((icon) => (
          <div className="tabbar-icon" key={icon.id}>
            <NavLink to={icon.to}>
              <i onClick={() => showHandler(icon.id)}>{icon.icon}</i>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
