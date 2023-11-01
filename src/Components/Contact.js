import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);


  const errorMessageRef = useRef(null);
  const successMessageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;


    emailjs
      .sendForm("service_fci53fm", "contact_form", form, 'TZuIxhsLLVwo22Ok1')
      .then(
        (result) => {
          console.log(result.text);
          successMessageRef.current.innerText = "Message sent successfully!";
          errorMessageRef.current.innerText = "";
        },
        (error) => {
          console.log(error.text);
          errorMessageRef.current.innerText = "An error occurred while sending the message.";
          successMessageRef.current.innerText = "";
        }
      );

 
    form.reset();
  };

  return (
    <div id="contact-section" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
        <form onSubmit={sendEmail} className="space-y-6">
          <p ref={errorMessageRef} className="text-red-500"></p>
          <p ref={successMessageRef} className="text-green-500"></p>
          <div>
            <input
              id="name"
              ref={nameRef}
              type="text"
              required
              placeholder="Your Name"
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <input
              id="email"
              ref={emailRef}
              type="email"
              required
              placeholder="Your Email"
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <input
              id="subject"
              ref={subjectRef}
              type="text"
              required
              placeholder="Subject"
              className="w-full mt-1 p-2 text-black rounded-md border border-gray-300"
            />
          </div>
          <div>
            <textarea
              id="message"
              ref={messageRef}
              rows="5"
              required
              placeholder="Your Message"
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
