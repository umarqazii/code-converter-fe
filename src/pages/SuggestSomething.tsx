import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import toast from 'react-hot-toast';
import axios from 'axios';

const SuggestSomething: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the form data to the console
    console.log('Form Data:', formData);
  
    try {
      const response = await axios.post('http://localhost:5000/suggest', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        toast.success('Suggestion submitted successfully!');
        setFormData({ name: '', email: '', suggestion: '' });
      } else {
        toast.error('Failed to submit suggestion.');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };
  
  

  return (
    <>
      <Navbar />
    <div className="pt-10 flex items-center justify-center bg-transparent  text-white p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Suggest Something</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium">Your Suggestion</label>
            <textarea
              name="suggestion"
              id="suggestion"
              value={formData.suggestion}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Type your suggestion here..."
              rows={4}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold transition duration-200 ease-in-out"
            >
              Submit Suggestion
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SuggestSomething;
