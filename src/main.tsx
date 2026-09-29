import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home.tsx';
import Hadiyah from './pages/Hadiyah.tsx';
import Tafsir from './pages/Tafsir.tsx';
import TafsirFatiha from './pages/TafsirFatiha.tsx';
import Umrah from './pages/Umrah.tsx';
import './index.css';

const ConceptManuscript = lazy(() => import('./pages/concepts/ConceptManuscript.tsx'));
const ConceptSanctuary = lazy(() => import('./pages/concepts/ConceptSanctuary.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hadiyah" element={<Hadiyah />} />
        <Route path="/tafsir-yusuf" element={<Tafsir />} />
        <Route path="/fatiha" element={<TafsirFatiha />} />
        <Route path="/umrah" element={<Umrah />} />
        {/* Private design concepts: unlinked and noindexed */}
        <Route path="/concept-manuscript" element={<Suspense fallback={null}><ConceptManuscript /></Suspense>} />
        <Route path="/concept-sanctuary" element={<Suspense fallback={null}><ConceptSanctuary /></Suspense>} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
