import React from 'react';
import axios from 'axios';

const Contact = () => {
 
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/send-email', {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    });

    if (response.status === 200) {
      alert('Email sent successfully!');
    } else {
      alert('Error sending email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Error sending email');
  }
};

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
