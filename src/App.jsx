import Home from "./Pages/Home";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CategoryPage from "./Pages/CategoryPage";
import Navigation from "./Components/Navigation/Navigation";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navigation />
          <Cart />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/productdetailpage" element={<ProductDetailPage />} />
            <Route path="/categorypage" element={<CategoryPage />} />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
