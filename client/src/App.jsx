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
import { useState } from 'react';
import Details from './pages/Details';
import Marketing from './pages/Marketing';
import Sustainables from './pages/Sustainables';

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
            <Route path="/register" element={<RegisterForm />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/sustainables' element={<Sustainables />} />
            <Route path='/item/:id' element={<Details />} />
            <Route path='/marketing' element={<Marketing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserIdContext.Provider>
  );
}
