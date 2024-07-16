import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home";

function AllRoutes() {
 
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more route below */}
     </Routes>
  );
}

export default AllRoutes;