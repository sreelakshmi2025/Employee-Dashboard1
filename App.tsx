
import React from 'react';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import EmployeeFormPage from './pages/EmployeeFormPage';
// FIX: Import Routes and Route from react-router-dom instead of accessing them from the window object.
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/form" element={<EmployeeFormPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;