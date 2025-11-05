import { Link } from 'react-router-dom';

const AdSpaceCard = ({ space }) => {
  return (
    <div className="card">
      <div className="relative overflow-hidden h-64">
        <img
          src={space.image}
          alt={`Advertising hoarding space available for rent in ${space.location}, Hyderabad - ₹${space.rate}/${space.rateType}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          ₹{space.rate.toLocaleString('en-IN')}/{space.rateType}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {space.location}
            </h3>
            <p className="text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {space.visitors} visitors/day
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {space.nearbyLandmarks.slice(0, 2).map((landmark, index) => (
              <span
                key={index}
                className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
              >
                {landmark}
              </span>
            ))}
            {space.nearbyLandmarks.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{space.nearbyLandmarks.length - 2} more
              </span>
            )}
          </div>
        </div>
        <Link
          to={`/property/${space.id}`}
          className="block w-full text-center btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AdSpaceCard;

