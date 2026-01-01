import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]=useState('')
    return (
     <div className='flex flex-col items-center h-screen justify-center bg-linear-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>
        <h2 className='font-serif text-3xl text-white '>Employee management system</h2>
       <div className='border shadow p-6 w-80 bg-white '>
        <h3 className='text-2xl font-bold mb-4 text-center'>Login Now</h3>
        <form action="">
            <div className='mb-4'>
                <label htmlFor="email" className='block text-gray-700 '>Email</label>
                <input type="email" className='w-full px-3 py-2 border' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password" className='block text-gray-700'>Password</label>
                <input type="password" className='w-full px-3 py-2 border' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'  htmlFor="">
                <input type="checkbox" className='from-checkbox' />
                <span className='ml-2 text-gray-700'>Remember me!</span>
            </label>
            <a href="#" className='text-teal-600'>Forget password</a>
            </div>
            <div className='mb-4'>
            <button type='submit' className='w-full bg-teal-600 text-white py-2 hover:cursor-pointer '>Login</button>
            </div>
        </form>
        </div>
     </div>
    );
};

export default Login;