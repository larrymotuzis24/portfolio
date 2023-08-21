import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Camps from './Components/Camps';
import Tours from './Components/Tours';
import Layout from './Components/Layout';



const App = () => {
  return (
    <Layout>
      <Routes>
          <Route exact path="/" element={HomePage} />
          <Route path="/about" element={AboutUs} />
          <Route path="/camps" element={Camps} />
          <Route path="/tours" element={Tours} />
      </Routes>

    </Layout>
  );
}

export default App;
