import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home.tsx';
import Hadiyah from './pages/Hadiyah.tsx';
import Tafsir from './pages/Tafsir.tsx';
import TafsirFatiha from './pages/TafsirFatiha.tsx';
import Umrah from './pages/Umrah.tsx';
import './index.css';

// Internal reference for the Sanctuary design system: unlinked and noindexed.
const DesignSystem = lazy(() => import('./pages/DesignSystem.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hadiyah" element={<Hadiyah />} />
          <Route path="/tafsir-yusuf" element={<Tafsir />} />
          <Route path="/fatiha" element={<TafsirFatiha />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route
            path="/design-system"
            element={
              <Suspense fallback={null}>
                <DesignSystem />
              </Suspense>
            }
          />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>
);
