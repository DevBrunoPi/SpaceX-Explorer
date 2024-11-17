import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaunchSearch from './components/LaunchSearch';
import LaunchDetail from './components/LaunchDetails';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LaunchSearch />} />
          <Route path="/launch/:id" element={<LaunchDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
