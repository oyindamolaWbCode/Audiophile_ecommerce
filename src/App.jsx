import Home from "./Pages/Home";
import CheckoutPage from "./Pages/CheckoutPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import CategoryPage from "./Pages/CategoryPage";
import Navigation from "./Components/Navigation/Navigation";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speakers from "./Components/Speaker/Speakers";
import Headphones from "./Components/HeadPhones/Headphones";
import Earphones from "./Components/Earphones/Earphones";
import SingleProductPage from "./Components/SingleProductName/SingleProductPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navigation />
          {/* <Cart /> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />

            <Route path="/productdetailpage" element={<ProductDetailPage />} />
            <Route path="/categorypage" element={<CategoryPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
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
