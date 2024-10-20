import {
  FaHotel,
  FaTruck,
  FaPaw,
  FaSeedling,
  FaBuilding,
  FaHome,
} from "react-icons/fa";

function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hotel and Hospitality */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaHotel className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Hotel and Hospitality
            </h3>
            <p className="text-center text-gray-600 mt-2">
              We provide premium hotel services and world-class hospitality that
              ensure comfort and luxury.
            </p>
          </div>

          {/* Animal Care and Consultancy */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaPaw className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Animal Care & Consultancy
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Expert veterinary services and consultation for the well-being of
              your livestock and pets.
            </p>
          </div>

          {/* Logistics and Transportation */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaTruck className="text-5xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Logistics and Transportation
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Reliable and efficient logistics services, ensuring timely and
              safe transportation of goods.
            </p>
          </div>

          {/* Agro-Business */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaSeedling className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Agro-Business
            </h3>
            <p className="text-center text-gray-600 mt-2">
              We specialize in sustainable farming practices, offering
              high-quality agricultural products.
            </p>
          </div>

          {/* Building Consultancy */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaBuilding className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Building Consultancy
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Professional consulting services for all your building projects,
              from planning to execution.
            </p>
          </div>

          {/* Property Agent */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <FaHome className="text-5xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Property Agent
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Your trusted partner in buying, selling, and renting properties.
              Let us help you find your dream home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
