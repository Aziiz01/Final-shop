import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Products from "./Pages/Product";

function App() {
    return (
        <BrowserRouter>
            <nav>
              <Navbar/>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <div>
              <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
