import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import LocalMarket from "./pages/LocalMarket";
import PostPage from "./pages/PostPage";
import PricesPage from "./pages/PricesPage";

import Upperpart from './Upperpart'
import Upper2 from './Upper2'

function App() {
  return (
    <div>
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
    </BrowserRouter>
        <Upperpart/>
        <Upper2 />
    </div>
  );
}

export default App;