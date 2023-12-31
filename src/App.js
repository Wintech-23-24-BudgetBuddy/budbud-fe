import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Box from '@mui/material/Box';

import Home from './pages/Home/Home'
import Budget from './pages/Budget/Budget'
import Chatbot from './pages/Chatbot/Chatbot'
import Login from "./pages/Login/Login"
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Container from '@mui/material/Container';

function App() {
  const {user, authIsReady} = useAuthContext();

  return (
    <Container sx={{display: "flex", height: "100vh"}}>
      {authIsReady && (
      <BrowserRouter>
      <Navbar />
      <Container sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <Menu/>
 
      <Box component="section" sx={{  flexGrow: 1, border: '1px dashed grey' }}>
        <Routes>
          <Route
            path='/'
            element = {user ? <Home /> : <Navigate to='/login' />}
          />

          <Route
            path='/budget'
            element={user ? <Budget/> : <Navigate to='/login' />}
          />

          <Route
            path='/chatbot'
            element={user ? <Chatbot/> : <Navigate to='/login' />}
          />

          <Route
            path='/login'
            element={user ? <Navigate to='/' /> : <Login/>}
          />

          <Route
            path='/signup'
            element={user ? <Navigate to='/' /> : <Signup/>}
          />        

        </Routes>
      </Box>
      </Container>

      </BrowserRouter>
      )}
    </Container>
  );
}

export default App;
