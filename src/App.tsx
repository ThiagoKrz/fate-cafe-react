import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Traducoes from "./pages/Traducoes";
import Footer from "./components/footer/Footer";
import { Sidebar } from "./components/sidebar/Sidebar";
import ProjectDetails from "./pages/ProjectDetails";
import ServantsPage from "./components/servant/ServantsPage";
import ServantProfile from "./components/servant/ServantProfile";

function App() {
  return (
    <HashRouter>
      <div className="flex h-screen w-full bg-[#2A2320] overflow-hidden">
        <div className="h-screen shrink-0">
          <Sidebar />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/traducoes" element={<Traducoes />} />
              <Route path="/traducoes/:slug" element={<ProjectDetails />} />
              <Route path="/servos" element={<ServantsPage />} />
              <Route path="/servos/:id" element={<ServantProfile />} />

            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
