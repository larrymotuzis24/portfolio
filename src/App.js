import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout'; 
import Home from './Components/Home'; 
import About from './Components/About';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;