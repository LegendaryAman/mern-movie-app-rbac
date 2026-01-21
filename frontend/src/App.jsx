import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AdminAddMovie from "./pages/AdminAddMovie";
import './App.css'
import Header from "./components/header/Header";
function App() {
  // ✅ PASTE HERE (inside App, before return)
  const isAdmin = localStorage.getItem("role") === "admin";

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<h1>Movie detail here</h1>} />
        <Route path="/movies/:type" element={<h1>Movie list here</h1>} />
        <Route path="/*" element={<h1>error</h1>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/search" element={<Search />} />

        {/* 🔐 ADMIN PROTECTED ROUTE */}
        <Route
          path="/admin/add"
          element={isAdmin ? <AdminAddMovie /> : <div>Access Denied</div>}
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
