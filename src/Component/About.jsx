import React from "react";
import { FaCheckCircle } from "react-icons/fa"; 
const About = () => {
  return (
    <div className="w-full mx-auto p-8 bg-gray-100 rounded-lg shadow-lg mt-2">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About Promise Land Global Resources
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        At <strong>Promise Land Global Resources</strong>, we are dedicated to
        delivering exceptional services that cater to your needs. Our mission is
        to provide top-notch solutions across various sectors, ensuring the
        highest level of customer satisfaction.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        With a team of experienced professionals and a commitment to excellence,
        we strive to make a positive impact in our community and the industries
        we serve. Our core values of integrity, reliability, and innovation
        guide our approach to every project.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Our Services
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Hotel and Hospitality: Providing a serene environment for relaxation
            and comfort.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Animal Care and Consultancy: Offering expert guidance and care for
            your beloved pets.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Logistics and Transportation: Efficient and reliable transport
            solutions tailored to your needs.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Agro-Business: Committed to sustainable farming practices and
            agricultural consultancy.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Building Consultancy: Expert advice and solutions for construction
            and real estate projects.
          </span>
        </li>
        <li className="flex items-center mb-2">
          <FaCheckCircle className="text-green-500 mr-2" />
          <span>
            Property Agent: Connecting clients with their dream properties
            through personalized service.
          </span>
        </li>
      </ul>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Our Commitment to You
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We believe that our clients deserve the best. That's why we invest in
        our people, processes, and technology to ensure that we deliver superior
        quality in everything we do. Whether you're looking for a cozy hotel,
        reliable transportation, or expert consultancy, we are here to help you
        succeed.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Our Location
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Visit us at:{" "}
        <strong>No 6, Aro Onigbale Street, Sabo, Sagamu, Ogun State</strong>
        <p>Whatsapp / phone: +234 8034237637</p>
        or Contact us through the form below on any of our services then we
        reach out to you.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        We welcome you to come and experience the excellence of our services
        firsthand. Our dedicated team is always ready to assist you with any
        inquiries.
      </p>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Join Us on Our Journey
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Follow us on our social media channels below to stay updated with our
        latest news, offers, and initiatives. Together, let’s create a better
        future!
      </p>
    </div>
  );
};

export default About;
