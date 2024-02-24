import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        toast.error(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      toast.success('Account created successfully!');
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast.error(error.message); 
    }
  };
  
  return (
    <div className='w-full flex'>
    <div className='p-3 w-full h-screen flex flex-col justify-center items-center border-r border-[#1f1f21]'>
      <div className="my-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl">
        Sign Up
      </div>       
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
          <label htmlFor="email" className="text-[#e2e2e2]">
            Username
          </label>
          <input
            type='text'
            placeholder='Username'
            className='p-2 mb-4 w-72 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]'
            id='username'
            onChange={handleChange}
          /> 
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className="text-[#e2e2e2]">
            Email
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
        <div className='flex justify-center flex-col gap-4 items-center'>
          <button
            disabled={loading}
            className='flex w-56 p-3 cursor-pointer font-bold text-md items-center justify-center pb-2.5 inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-3 py-2 hover:text-white hover:shadow-md hover:bg-green-700'
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
          <OAuth/>
        </div>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-green-700'>Sign in</span>
        </Link>
      </div>
      <div className='w-full flex'>
        <ToastContainer />
      </div>  
      </div>
    </div>
  );
}
