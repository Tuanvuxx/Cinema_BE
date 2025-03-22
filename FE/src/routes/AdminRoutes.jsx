import { Routes, Route } from "react-router-dom";
import AddCategory from "../pages/admin/AddCategory.jsx";
import AddMovie from "@/pages/admin/AddMovie.jsx";
import HomePage from "../pages/admin/HomePage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/addmovie" element={<AddMovie />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AdminRoutes;
