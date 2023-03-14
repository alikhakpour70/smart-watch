import "./layoutStayle.css";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/navigations/Navigation";
import Search from "../utils/search/saerch";

const Header = () => {
  
  const [showComponent, setShowComponent] = useState([
    { bell: false, id: 1 },
    { search: false, id: 2 },
    { menu: false, id: 3 },
  ]);

  const ShowHandler = (id) => {
    switch (id) {

      case 1:
        const indexBell = showComponent.findIndex((i) => i.id === id);
        const componentBell = { ...showComponent[indexBell] };
        componentBell.bell = !componentBell.bell;
        const updatecomponentBell = [...showComponent];
        updatecomponentBell[indexBell] = componentBell;
        updatecomponentBell[1].search = false;
        updatecomponentBell[2].menu = false;
        return setShowComponent(updatecomponentBell);

      case 2:
        const index = showComponent.findIndex((i) => i.id === id);
        const component = { ...showComponent[index] };
        component.search = !component.search;
        const updateComponent = [...showComponent];
        updateComponent[index] = component;
        updateComponent[0].bell = false;
        updateComponent[2].menu = false;
        return setShowComponent(updateComponent);
      
        case 3:
        const indexMenu = showComponent.findIndex((i) => i.id === id);
        const componentMenu = { ...showComponent[indexMenu] };
        componentMenu.menu = !componentMenu.menu;
        const updatecomponentMenu = [...showComponent];
        updatecomponentMenu[indexMenu] = componentMenu;
        updatecomponentMenu[0].bell = false;
        updatecomponentMenu[1].search = false;
        return setShowComponent(updatecomponentMenu);
     
        default:
        return showComponent;
    }
  };

  return (
    <header className="header-container">
      <section className="header">
        <section className="right-header">
          <i onClick={() => ShowHandler(3)}>
            {!showComponent[2].menu ? <FiMenu /> : <AiOutlineClose />}
          </i>
          <p className="smartWatch2"> تایــم لنـــد</p>

          <div className={showComponent[2].menu ? "menuSid" : " menuSid-false"}>
            <NavBar ShowHandler={ShowHandler}/>
          </div>

          <p className="smartWatch">تایـــم لنـــــد </p>
        </section>

        <div className="left-header">
          <i onClick={() => ShowHandler(1)}>
            <BsBellFill />
          </i>
          <i onClick={() => ShowHandler(2)}>
            <FiSearch />
          </i>
        </div>
        {showComponent[0].bell && (
          <div
            style={{
              width: "100%",
              height: "20vh",
              padding: "30px 100px",
              backgroundColor: "#fff",
              position: "absolute",
              top: "65px",
              right: "0",
            }}
          >
            <p>برای اطلاع از پیام ها لازم است لاگین کنید</p>
          </div>
        )}
        {showComponent[1].search && <Search />}
      </section>
    </header>
  );
};

export default Header;
