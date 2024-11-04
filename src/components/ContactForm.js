import React, { useState } from 'react';
import f1 from '../img/f1.png';
import f2 from '../img/f2.png';
import f3 from '../img/f3.png';
import f4 from '../img/f4.png';
import i1 from '../img/i1.png';
import i2 from '../img/i2.png';
import i3 from '../img/i3.png';
import i4 from '../img/i4.png';
import i5 from '../img/i5.png';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center    mt-[-500px]  ">
      <div className="flex  flex-col-reverse md:flex-row  justify-center items-center ">
        {/* Left Part: Image Layout */}
        <div className=" -rotate-90 md:rotate-0 w-[300px]  md:min-w-[475px] mr-8">
          <div className="relative flex items-center justify-center h-auto">
            {/* Image 1 */}
            <img
              src={f4}
              alt="Person 1"
              className="w-auto h-auto rounded-full absolute md:top-10 left-10 z-10 "
            />
             <img
          src={i1}
          alt="Overlay Image"
          className="  absolute rotate-90 md:rotate-0 bottom-[-250px] md:bottom-0 md:top-96 left-[270px] z-50"
        />
            {/* Image 2 */}
            <img
              src={f3}
              alt="Person 2"
              className="w-auto h-auto rounded-full absolute md:top-20 left-28 z-20"
            />
             <img
          src={i2}
          alt="Overlay Image"
          className="  absolute   rotate-90 md:rotate-0 right-14 bottom-[-150px]  md:top-[550px] md:left-[180px] z-50"
        />
            {/* Image 3 */}
            <img
              src={f2}
              alt="Person 3"
              className="w-auto h-auto rounded-full absolute md:top-48 left-48 z-30"
            />
               <img
          src={i3}
          alt="Overlay Image"
          className="  absolute  rotate-90 md:rotate-0  bottom-32 md:top-[300px] left-[100px] z-50"
        />
            {/* Image 4 */}
            <img
              src={f1}
              alt="Person 4"
              className="w-auto h-auto rounded-full absolute md:top-80 left-72 z-40 "
            />
                   <img
          src={i4}
          alt="Overlay Image"
          className="  absolute  rotate-90 md:left-[110px] left-[250px]  bottom-28  md:rotate-0  md:top-[110px]  z-50"
        />
               <img
          src={i5}
          alt="Overlay Image"
          className="  absolute  rotate-90 bottom-[-1/2] md:rotate-0 md:top-[750px] -left-4 md:left-[150px] z-50"
        />
          </div>
        </div>

        <div className=' pb-96 md:pb-0 mt-[750px]'>
        {/* Right Part: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            We would <span className="text-green-500">love</span> to hear from you
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to be contacted
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
