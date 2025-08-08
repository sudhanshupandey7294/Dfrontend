// // client/src/pages/Signup.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
//       alert(res.data.message); // Optional alert on success
//       navigate('/login'); // ✅ Redirect to login page
//     } catch (err) {
//       if (err.response && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('Signup failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
//         <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

//         {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded"
//           required
//         />
//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // await axios.post('http://localhost:5000/api/auth/signup', form);
      await axios.post('https://dbackend-one.vercel.app/api/auth/signup', form);

      navigate('/login'); // Redirect to login
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full mb-3 border p-2" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full mb-3 border p-2" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full mb-3 border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
}
