import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/cartProduct";
import Login from "./components/login/login";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Search from "./utils/search/saerch";
import PanelPage from './components/userPanel/Panel'
import StorePage from "./pages/storePage";
import DetailProduct from "./components/detailProduct/detailProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginPage" element={<Login />} />
            <Route path="/cartPage" element={<Cart />} />
            <Route path="/storePage" element={<StorePage />} />
            <Route path="/detailProduct" element={<DetailProduct />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/PanelPage" element={<PanelPage />} /> */}

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
