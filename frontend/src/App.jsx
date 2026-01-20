import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AdminAddMovie from "./pages/AdminAddMovie";

function App() {
  // ✅ PASTE HERE (inside App, before return)
  const isAdmin = localStorage.getItem("role") === "admin";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/search" element={<Search />} />

        {/* 🔐 ADMIN PROTECTED ROUTE */}
        <Route
          path="/admin/add"
          element={isAdmin ? <AdminAddMovie /> : <div>Access Denied</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
