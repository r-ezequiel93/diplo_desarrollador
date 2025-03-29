import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/layout.css';


import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import ContactoPage from './Pages/ContactoPage';
import HomePage from './Pages/HomePage';
import NosotrosPage from './Pages/NosotrosPage';
import NovedadesPage from './Pages/NovedadesPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Nosotros' element={<NosotrosPage />} />
          <Route path='Novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div >
  );
}

export default App;
