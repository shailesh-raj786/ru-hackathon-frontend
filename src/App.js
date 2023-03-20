import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import BlogPage from "./pages/BlogPage";
import LandingPage from "./pages/LandingPage";
import LocalMarket from "./pages/LocalMarket";
import PostPage from "./pages/PostPage";
import PricesPage from "./pages/PricesPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Routes>
        <Route path="/prices" element={<PricesPage />} />
      </Routes>
      <Routes>
        <Route path="/market" element={<LocalMarket />} />
      </Routes>
      <Routes>
        <Route path="/posts" element={<PostPage />} />
      </Routes>
      <Routes>
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;