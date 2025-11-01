import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src="/adhood-logo.png" 
                alt="AdHood Logo" 
                className="h-10 md:h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Turn your space into an income source. Connect with advertisers and monetize your empty physical spaces effortlessly.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 AdHood. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rent-your-space" className="hover:text-primary-400 transition-colors">
                  Rent Your Space
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@adhood.co</li>
              <li>Phone: +91 8890240404</li>
              <li>Address: Hyderabad, Telangana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Built with ❤️ in India | MVP Version</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

