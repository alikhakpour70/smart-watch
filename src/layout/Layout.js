import TabBar from "../components/TabBar/TabBar";
import Footer from "./Footer";
import Header from "./Header";
import "./layoutStayle.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      {children}
      <TabBar />
      <Footer />
    </div>
  );
};

export default Layout;
