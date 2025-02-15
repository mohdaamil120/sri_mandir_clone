import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Puja from "../pages/Puja";
import PanchangPage from "../pages/PanchangPage";
import Temples from "../pages/Temples";
import PujaHistory from "../pages/PujaHistory";
import PujaDetail from "../pages/PujaDetail";
import CartPage from "../pages/CartPage";
import UserDetailsPage from "../pages/UserDetailsPage";

function AllRoutes() {
 
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/panchang" element={<PanchangPage />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/puja/history" element={<PujaHistory />} />
        <Route path="/puja/:id" element={<PujaDetail />} />
        <Route path="/puja/cart/:id/:userId" element={<CartPage />} />
        <Route path="/puja/sankalp" element={<UserDetailsPage />} />
        {/* Add more route below */}
     </Routes>
  );
}

export default AllRoutes;