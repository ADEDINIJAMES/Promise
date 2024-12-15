// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_yi1027m", // Replace with your actual Service ID
//         "template_bza44ls", // Replace with your actual Template ID
//         {
//           name: formData.name,
//           email: formData.email,
//           service: formData.service,
//           message: formData.message,
//         },
//         "94khjgkcPomew4Dk7" // Replace with your actual Public Key
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully:", response.text);
//           setIsModalOpen(true); // Show success modal
//         },
//         (error) => {
//           console.error("Failed to send email:", error.text);
//         }
//       );

//     // Reset form after submission
//     setFormData({
//       name: "",
//       email: "",
//       service: "",
//       message: "",
//     });
//   };

//   // Close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-6 w-full bg-gray-100 rounded-lg shadow-lg mt-4">
//       <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-2" htmlFor="service">
//             Choose a Service
//           </label>
//           <select
//             id="service"
//             name="service"
//             value={formData.service}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           >
//             <option value="" disabled>
//               Select a service
//             </option>
//             <option value="Hotel and Hospitality">Hotel and Hospitality</option>
//             <option value="Animal Care and Consultancy">
//               Animal Care and Consultancy
//             </option>
//             <option value="Logistics and Transportation">
//               Logistics and Transportation
//             </option>
//             <option value="Agro-Business">Agro-Business</option>
//             <option value="Building Consultancy">Building Consultancy</option>
//             <option value="Property Agent">Property Agent</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="5"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Success Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <h3 className="text-xl font-bold mb-4">
//               Thank you for reaching out!
//             </h3>
//             <p className="mb-4">
//               We will get in touch with you shortly. You can also contact us
//               via:
//             </p>
//             <p className="mb-2">
//               <strong>Email:</strong> lukedotun@gmail.com
//             </p>
//             <p className="mb-4">
//               <strong>Phone:</strong> +234 8034237637
//             </p>
//             <button
//               onClick={closeModal}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ContactUs;
import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    phone: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

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

    // Send the form data via EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Corrected access to env variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Corrected access to env variable
        formData, // Form data sent as an object
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Corrected access to env variable
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.text);
          setIsModalOpen(true); // Show success modal
        },
        (error) => {
          setIsModalOpen(true);
          console.error("Failed to send email:", error.text);
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
      phone: "",
    });
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 w-full bg-gray-100 rounded-lg shadow-lg mt-4">
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
          <label className="block mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
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

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">
              Thank you for reaching out!
            </h3>
            <p className="mb-4">
              We will get in touch with you shortly. You can also contact us
              via(Please reach out to us if you don't hear from us in the next
              30 minutes to 1 hour). :
            </p>
            <p className="mb-2">
              <strong>Email:</strong> lukedotun@gmail.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +234 8034237637
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
