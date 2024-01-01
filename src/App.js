import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import './App.css';

import { useAuthContext } from './hooks/useAuthContext';

import Budget from './pages/Budget/Budget';
import Chatbot from './pages/Chatbot/Chatbot';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Transactions from './pages/Transactions/Transactions';

import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

function App() {
  const { user, authIsReady } = useAuthContext();

  const renderProtectedRoute = (path, component) => {
    return user ? component : <Navigate to="/login" />;
  };

  const renderLoginOrSignup = (path, component) => {
    return user ? <Navigate to="/" /> : component;
  };

  const renderRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={renderProtectedRoute('/', <Dashboard />)} />
        <Route path="/budget" element={renderProtectedRoute('/budget', <Budget />)} />
        <Route path="/chatbot" element={renderProtectedRoute('/chatbot', <Chatbot />)} />
        <Route path="/login" element={renderLoginOrSignup('/login', <Login />)} />
        <Route path="/signup" element={renderLoginOrSignup('/signup', <Signup />)} />
        <Route path="/transactions" element={renderProtectedRoute('/transactions', <Transactions />)} />
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      {authIsReady && (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
    
            <>
              <Navbar />
              <Menu />
            </>
         
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            {authIsReady ? renderRoutes() : <p>Loading...</p>}
          </Box>
        </Box>
      )}
    </BrowserRouter>
  );
}

export default App;
