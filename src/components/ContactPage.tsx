'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  Send,
  CheckCircle,
  Navigation,
  MessageCircle,
  Calendar
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'phone'
      });
    }, 3000);
  };

  const services = [
    'Exterior Car Wash',
    'Interior Detailing',
    'Ceramic Coating',
    'Wax & Polish',
    'Engine Bay Cleaning',
    'Full Detailing Package'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Location',
      details: ['3987 Av. de la Renaissance', 'Laval, QC H7L 3X2', 'Canada'],
      action: 'Get Directions',
      href: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us Now',
      details: ['+1 450-686-0016', 'Quick response guaranteed'],
      action: 'Call Now',
      href: 'tel:+14506860016'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@laveautochomedey.com', 'We respond within 24 hours'],
      action: 'Send Email',
      href: 'mailto:info@laveautochomedey.com'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat-Sun: 9:00 AM - 5:00 PM', 'Closed ⋅ Opens 8 AM Mon'],
      action: 'View Hours',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Contact{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Us Today
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vehicle? Get in touch with us today. We're here to answer 
              your questions and help you choose the perfect service for your car.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.title}
                  className="card-premium cursor-interactive bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={info.href}
                    className="link-premium cursor-interactive inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    <span>{info.action}</span>
                    <Navigation className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+1 450-686-0016"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="phone">Phone Call</option>
                      <option value="email">Email</option>
                      <option value="text">Text Message</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-field-premium w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your car and what service you're interested in..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-premium cursor-interactive w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="card-premium bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Find Us Here
                </h3>
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for actual map integration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-gray-500 text-sm">3987 Av. de la Renaissance, Laval</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-premium cursor-interactive inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-premium bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+14506860016"
                    className="card-premium cursor-interactive flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100"
                  >
                    <Phone className="h-6 w-6 text-primary-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Call Now</div>
                      <div className="text-sm text-gray-600">+1 450-686-0016</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:info@laveautochomedey.com"
                    className="card-premium cursor-interactive flex items-center space-x-3 p-4 bg-accent-50 rounded-lg hover:bg-accent-100"
                  >
                    <Mail className="h-6 w-6 text-accent-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Send Email</div>
                      <div className="text-sm text-gray-600">info@laveautochomedey.com</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-gray-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Book Online</div>
                      <div className="text-sm text-gray-600">Coming soon</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offer */}
              <div className="card-premium bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Car className="h-6 w-6" />
                  <span className="font-semibold">Special Offer</span>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  First-Time Customer Discount
                </h4>
                <p className="text-white/90 mb-4">
                  Get 20% off your first service when you mention this website!
                </p>
                <div className="text-2xl font-bold">
                  Save up to $50
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
