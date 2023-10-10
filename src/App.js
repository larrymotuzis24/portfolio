import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { Footer } from "./Components/Footer";

import About from "./Components/About";
import Contact from "./Components/Contact";
import WorkProjectsDisplayPage from "./Pages/WorkProjectsDisplay";

function App() {
  return (
    <div>
    <Layout>
      <Routes>
        <Route path="/portfolio" element={<About />} />
        <Route path="/projects" element={<WorkProjectsDisplayPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    <Footer />

    </div>
  );
}

export default App;
