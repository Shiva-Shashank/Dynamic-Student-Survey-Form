import './App.css';
import React from 'react';

import HomePage from './home/HomePage';
import SurveyPage from './survey/SurveyPage';
import SurveysListPage from './surveys-list/SurveysListPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/surveys-list" element={<SurveysListPage />} />
      </Routes>
    </Router>
    // </>
  );
}

export default App;
