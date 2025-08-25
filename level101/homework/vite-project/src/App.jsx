import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import HomeCreate from "./pages/HomeCreate";
import User from "./pages/User";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* მთავარი გვერდი */}
        <Route path="/" element={<Home />}>
          <Route path="create" element={<HomeCreate />} />
        </Route>

        {/* About გვერდი */}
        <Route path="/about" element={<About />}>
          <Route path="create" element={<HomeCreate />} />
        </Route>

        {/* დინამიური User */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}
