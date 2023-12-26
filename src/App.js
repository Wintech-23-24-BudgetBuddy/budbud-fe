import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home/Home'
import Budget from './pages/Budget/Budget'
import Chatbot from './pages/Chatbot/Chatbot'
import Login from "./Login/Login"
import Signup from './Signup/Signup'

function App() {
  const {user, authIsReady} = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
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
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
