import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import RegisterForm from './pages/RegisterForm'
import Explore from './pages/Explore';
import PrivateRoute from './components/PrivateRoute';
import UserIdContext from './context/UserIdContext';
import { useContext, useState } from 'react';

export default function App() {
  const [userId, setUserId] = useState('');

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/explore' element={<Explore />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserIdContext.Provider>
  );
}
