import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { initializeStore } from '@/lib/store';
import { AppShell } from '@/components/layout/app-shell';
import Home from '@/pages/home';
import CaseLibrary from '@/pages/case-library';
import CasePlayer from '@/pages/case-player';
import Debrief from '@/pages/debrief';
import Dashboard from '@/pages/dashboard';
import ImportCase from '@/pages/import-case';
import StudyGuide from '@/pages/study-guide';
import Profile from '@/pages/profile';

export default function App() {
  useEffect(() => {
    initializeStore();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<CaseLibrary />} />
          <Route path="/cases/:caseId" element={<CasePlayer />} />
          <Route path="/cases/:caseId/debrief" element={<Debrief />} />
          <Route path="/cases/:caseId/study-guide" element={<StudyGuide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/import" element={<ImportCase />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
