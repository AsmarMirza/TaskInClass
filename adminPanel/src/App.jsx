import MainLayout from "./layout/main/mainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/main/home";
// import AdminPanel from "./pages/main/adminPanel";
import "./App.css";
import AdminLayout from "./layout/admin/adminLayout";
import AddProducts from "./pages/Admin/addProducts";
import MainSite from "./pages/Admin/mainSite";
import Contact from "./pages/main/Contact";
import Products from "./pages/main/products";
import Product from "./pages/Admin/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>

          <Route path="/adminLayout" element={<AdminLayout />}>
            <Route path="/adminLayout/products" element={<Product />} />
            <Route path="/adminLayout/mainSite" element={<MainSite />} />
            <Route path="/adminLayout/addProducts" element={<AddProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
