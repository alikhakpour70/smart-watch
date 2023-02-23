import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/cartProduct";
import Login from "./components/login/login";
import Store from "./components/store/store";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Search from "./utils/search/saerch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginPage" element={<Login />} />
            <Route path="/cartPage" element={<Cart />} />
            <Route path="/storePage" element={<Store />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
