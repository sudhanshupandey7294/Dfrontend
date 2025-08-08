
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
