import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSuccessMessage('Email sent successfully');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMessage('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email', error);
      setErrorMessage('Error sending email');
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

