const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AdHood</h1>
            <p className="text-xl text-primary-100">
              Connecting space owners with advertisers to create win-win opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AdHood is revolutionizing the advertising space rental market in Hyderabad by creating a seamless platform that connects property owners with businesses seeking visibility. We believe that every unused space has the potential to generate income while providing valuable advertising opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to democratize advertising space ownership and make it accessible to everyone in Hyderabad - from individual homeowners to commercial property owners - while helping businesses find the perfect locations for their marketing campaigns across the city.
              </p>
            </div>

            {/* What We Do */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Space Listing Platform</h3>
                    <p className="text-gray-700">We provide a user-friendly platform where property owners can list their available advertising spaces, complete with photos, location details, and pricing.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advertiser Matching</h3>
                    <p className="text-gray-700">We connect businesses and advertisers with ideal locations based on their target audience, budget, and campaign requirements.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Transactions</h3>
                    <p className="text-gray-700">We facilitate secure and transparent transactions between space owners and advertisers, ensuring both parties benefit from the arrangement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">List Your Space</h3>
                  <p className="text-gray-600 text-sm">Upload photos and details of your available advertising space on our platform</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Connected</h3>
                  <p className="text-gray-600 text-sm">We match your space with interested advertisers looking for locations like yours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Start Earning</h3>
                  <p className="text-gray-600 text-sm">Receive regular payments for renting out your advertising space</p>
                </div>
              </div>
            </div>

            {/* MVP Notice */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">MVP Version - More Coming Soon!</h3>
                  <p className="text-gray-700 mb-4">
                    You're currently viewing the Minimum Viable Product (MVP) version of AdHood. We're actively developing new features and improvements to make the platform even better.
                  </p>
                  <p className="text-gray-700">
                    <strong>Upcoming features include:</strong> Advanced filtering options, real-time availability calendars, integrated payment processing, analytics dashboard for space owners, mobile app, and much more!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Available Spaces</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Areas in Hyderabad</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">480K+</div>
                <div className="text-gray-600">Daily Impressions</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

