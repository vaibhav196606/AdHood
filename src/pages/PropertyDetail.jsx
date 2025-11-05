import { useParams, Link } from 'react-router-dom';
import { adSpaces } from '../data/adSpaces';
import { useState } from 'react';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = adSpaces.find((space) => space.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '3ba6d144-5fa0-4ca6-a89e-d00fc50189fc');
    formDataToSend.append('subject', `New Booking Request: ${property.location}`);
    formDataToSend.append('from_name', 'AdHood Booking System');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('start_date', formData.startDate);
    formDataToSend.append('end_date', formData.endDate);
    formDataToSend.append('property_location', property.location);
    formDataToSend.append('property_rate', `₹${property.rate}/${property.rateType}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Error submitting booking. Please try again or contact us directly.');
      }
    } catch (error) {
      alert('Error submitting booking. Please try again or contact us at info@adhood.co');
    }
  };

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Property Not Found</h2>
        <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">Booking Request Submitted!</h2>
            <p className="text-lg text-green-800 mb-6">
              Thank you for your interest in <strong>{property.location}</strong>. We've received your booking request and will contact you shortly.
            </p>
            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">Your Details:</h3>
              <p className="text-gray-700"><strong>Name:</strong> {formData.name}</p>
              <p className="text-gray-700"><strong>Email:</strong> {formData.email}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {formData.phone}</p>
              <p className="text-gray-700"><strong>Duration:</strong> {formData.startDate} to {formData.endDate}</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Browse More Spaces
            </Link>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{property.location}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.location}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {property.location}
              </h1>
              <p className="text-gray-600 mb-6">{property.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Rate</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary-700 break-words">
                    ₹{property.rate.toLocaleString('en-IN')}/{property.rateType}
                  </p>
                </div>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Daily Visitors</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary-700">
                    {property.visitors}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Size</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900 break-words">
                    {property.size}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">
                    {property.city}
                  </p>
                </div>
              </div>

              {/* Nearby Landmarks */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nearby Landmarks</h3>
                <div className="flex flex-wrap gap-2">
                  {property.nearbyLandmarks.map((landmark, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="text-xl font-bold text-gray-900">Location on Map</h3>
              </div>
              <div className="h-96">
                <iframe
                  src={property.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Space</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="+91 8890240404"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    min={formData.startDate || undefined}
                    required
                    className="input-field"
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Submit Booking Request
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

