import Link from 'next/link';
import { Car, Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary-400" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display">Chomedey Lave-Auto</h3>
                <p className="text-sm text-gray-400">Professional Car Care</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your vehicle with our premium car wash and detailing services. 
              We bring your car back to showroom condition with eco-friendly products 
              and expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold font-display">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold font-display">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Exterior Car Wash</li>
              <li className="text-gray-300 text-sm">Interior Detailing</li>
              <li className="text-gray-300 text-sm">Ceramic Coating</li>
              <li className="text-gray-300 text-sm">Wax & Polish</li>
              <li className="text-gray-300 text-sm">Engine Bay Cleaning</li>
              <li className="text-gray-300 text-sm">Paint Correction</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold font-display">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+14506860016"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  +1 450-686-0016
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@laveautochomedey.com"
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm break-all"
                >
                  info@laveautochomedey.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>3987 Av. de la Renaissance</p>
                  <p>Laval, QC H7L 3X2</p>
                  <p>Canada</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 5:00 PM</p>
                  <p>Closed ⋅ Opens 8 AM Mon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Chomedey Lave-Auto. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
