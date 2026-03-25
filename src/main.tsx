import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Hadiyah from './pages/Hadiyah.tsx';
import Tafsir from './pages/Tafsir.tsx';
import Umrah from './pages/Umrah.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hadiyah" element={<Hadiyah />} />
        <Route path="/tafsir-yusuf" element={<Tafsir />} />
        <Route path="/umrah" element={<Umrah />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
