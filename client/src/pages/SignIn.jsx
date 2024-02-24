import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserIdContext from '../context/UserIdContext';
import { useContext } from 'react';

export default function SignIn() {
  const { setUserId } = useContext(UserIdContext);
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setUserId(data._id);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message); 
        return;
      }
      dispatch(signInSuccess(data));
      setUserId(data._id);
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message); 
    }
  };
  return (
    <div className='w-full flex'>
      <div className='p-3 w-1/2 h-screen flex flex-col justify-center items-center border-r border-[#1f1f21]'>
        <div className="my-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
          Log In
        </div>      
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className="text-[#e2e2e2]">
              Email Address
            </label>
            <input
              type='email'
              placeholder='Email'
              className='p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email" className="text-[#e2e2e2]">
              Password
            </label>
            <input
              type='password'
              placeholder='Password'
              className='p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]'
              id='password'
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-center'>
            <button
              disabled={loading}
              className='flex w-56 p-3 cursor-pointer font-bold text-md items-center justify-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 hover:text-white hover:shadow-md hover:bg-green-700'
            >
              {loading ?<div className="animate-spin rounded-full border-t-4 border-white border-solid h-5 w-5"></div> : 'Sign In'}
            </button>
          </div>
          <div className='flex justify-center'>
            <OAuth/>
          </div>
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Dont have an account?</p>
          <Link to={'/sign-up'}>
            <span className='text-green-700'>Sign up</span>
          </Link>
        </div>
        <div className='w-full flex'>
          <ToastContainer />
        </div>      
      </div>
    </div>
  );
}
