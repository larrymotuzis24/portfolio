import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";

import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/portfolio" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
