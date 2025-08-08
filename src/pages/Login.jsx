// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login to D -SERVICES</h2>

//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-2">Email</label>
//             <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" required />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-semibold mb-2">Password</label>
//             <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded" required />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>

//         {/* 👉 New user? Signup */}
//         <p className="mt-6 text-center text-sm">
//           New user?{' '}
//           <Link
//             to="/signup"
//             className="text-blue-500 hover:underline font-semibold"
//           >
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token); // Save token
        setError('');
        navigate('/'); // Redirect to homepage
      } else {
        setError('Login failed. No token received.');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          New user? <a href="/signup" className="text-blue-500">Signup here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
