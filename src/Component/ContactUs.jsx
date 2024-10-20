import React, { useState } from "react";

function ContactUs() {
  // State to handle form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to the backend
    console.log("Form Submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto p-6 w-full  bg-gray-100 rounded-lg shadow-lg mt-4">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2" htmlFor="service">
            Choose a Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="Hotel and Hospitality">Hotel and Hospitality</option>
            <option value="Animal Care and Consultancy">
              Animal Care and Consultancy
            </option>
            <option value="Logistics and Transportation">
              Logistics and Transportation
            </option>
            <option value="Agro-Business">Agro-Business</option>
            <option value="Building Consultancy">Building Consultancy</option>
            <option value="Property Agent">Property Agent</option>
          </select>
        </div>

        <div>
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
