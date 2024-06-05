import Layout from "./Layout/Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Footer, ScrollToTop } from "./components";
import "./App.css";
import TokenDeveloper from "./Pages/TokenDeveloper";
import Myapes from "./Pages/Myapes";
import NewPairs from "./Pages/NewPairs";
const App = () => {
  return (
    <div className="transition">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<NewPairs />} />
            <Route path="/tokendeveloper" element={<TokenDeveloper />} />
            <Route path="/myapes" element={<Myapes />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

// Just for testing purposes

export default App;
