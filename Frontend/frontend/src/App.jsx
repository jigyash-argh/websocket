import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4">
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App
