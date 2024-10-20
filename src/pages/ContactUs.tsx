import React, { useState } from 'react';
import Navbar from '../components/Navbar';
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission, alert for now.
    alert('Message sent! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
    <div className="pt-10 flex items-center justify-center bg-transparent p-6">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 block w-full bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Message"
              rows={4}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold transition duration-200 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
