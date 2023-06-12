import Header from './components/Header';
import './style/index.css';
import Documentation from'./pages/Documentation';
import Tutorials from './pages/Tutorials';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
    <Header name = 'Random'/>
    <main>
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/documentation" element={<Documentation/>} />
        <Route exact path="/tutorials" element={<Tutorials/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </main>
  </>
  );
}

export default App;
