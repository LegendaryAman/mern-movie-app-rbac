import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/search" element={<div>Search</div>} />
        <Route path="/admin/add" element={<div>Add Movie</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
