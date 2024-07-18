import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";
import Puja from "../pages/Puja";
import PanchangPage from "../pages/PanchangPage";
import Temples from "../pages/Temples";
import PujaHistory from "../pages/PujaHistory";

function AllRoutes() {
 
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puja" element={<Puja />} />
        <Route path="/panchang" element={<PanchangPage />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/puja/history" element={<PujaHistory />} />
        {/* Add more route below */}
     </Routes>
  );
}

export default AllRoutes;