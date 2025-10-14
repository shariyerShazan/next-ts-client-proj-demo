"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="flex justify-center items-center pb-16 pt-[8%] bg-gray-50">
      <div className="bg-white w-full max-w-4xl shadow-sm border rounded-md p-10">

        <h2 className="text-2xl text-center font-semibold text-[#b59b58] mb-8 border-b pb-3">
          Contact Form
        </h2>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-[#b59b58] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-[#b59b58] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-[#b59b58] focus:outline-none text-gray-600"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="BD">Bangladesh</option>
                <option value="IN">India</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone no
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-[#b59b58] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:ring-1 focus:ring-[#b59b58] focus:outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#cba65f] hover:bg-[#b8964a] text-white px-8 py-2 rounded-md font-medium transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
