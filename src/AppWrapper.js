import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import MoreInfo from './components/MoreInfo';

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/MoreInfo" element={<MoreInfo />} />
    </Routes>
  );
}

export default AppWrapper;