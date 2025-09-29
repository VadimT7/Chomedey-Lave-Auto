'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  Sparkles, 
  Droplets, 
  Shield, 
  Wrench, 
  Zap,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  DollarSign
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 'exterior-wash',
      title: 'Exterior Car Wash',
      description: 'Complete exterior cleaning with premium soap and protective wax',
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      duration: '30-45 min',
      price: 'Starting at $25',
      features: [
        'Hand wash with premium soap',
        'Wheel and tire cleaning',
        'Tire shine application',
        'Quick dry with microfiber',
        'Windows and mirrors cleaning',
        'Basic wax protection'
      ],
      images: [
        '/photos-before-and-after/before-car-dirty-1.jpg',
        '/photos-before-and-after/after-carpet-treatment.jpg'
      ],
      process: [
        'Pre-rinse to remove loose dirt',
        'Apply premium soap with soft brush',
        'Clean wheels and tires thoroughly',
        'Rinse with high-pressure water',
        'Apply tire shine and wax',
        'Final inspection and dry'
      ]
    },
    {
      id: 'interior-detailing',
      title: 'Interior Detailing',
      description: 'Deep cleaning and protection for your car\'s interior surfaces',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      duration: '60-90 min',
      price: 'Starting at $45',
      features: [
        'Complete vacuum and steam cleaning',
        'Leather conditioning and protection',
        'Dashboard and console cleaning',
        'Carpet and upholstery treatment',
        'Odor elimination',
        'UV protection application'
      ],
      images: [
        '/photos-before-and-after/before-carpet-treatment.jpg',
        '/photos-before-and-after/after-carpet-treatment.jpg'
      ],
      process: [
        'Remove all personal items',
        'Vacuum all surfaces thoroughly',
        'Steam clean carpets and seats',
        'Clean and condition leather',
        'Treat dashboard and console',
        'Apply protective coatings'
      ]
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with advanced ceramic coating technology',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      duration: '3-4 hours',
      price: 'Starting at $299',
      features: [
        'Paint correction and preparation',
        'Professional ceramic coating',
        'UV and chemical protection',
        'Easy maintenance for 2+ years',
        'Enhanced gloss and shine',
        'Warranty included'
      ],
      images: [
        '/photos-before-and-after/before-car-dirty-2.jpg',
        '/photos-before-and-after/after-leather-treatment.jpg'
      ],
      process: [
        'Thorough paint inspection',
        'Paint correction if needed',
        'Surface preparation and cleaning',
        'Apply ceramic coating',
        'Cure time and inspection',
        'Final quality check'
      ]
    },
    {
      id: 'wax-polish',
      title: 'Wax & Polish',
      description: 'Professional waxing and polishing for showroom-quality shine',
      icon: Droplets,
      color: 'from-orange-500 to-red-500',
      duration: '90-120 min',
      price: 'Starting at $65',
      features: [
        'Paint correction and polishing',
        'Premium carnauba wax',
        'Buffing and shine enhancement',
        'Paint protection',
        'Scratch and swirl removal',
        'Long-lasting results'
      ],
      images: [
        '/photos-before-and-after/before-car-dirty-1.jpg',
        '/photos-before-and-after/after-carpet-treatment.jpg'
      ],
      process: [
        'Wash and dry vehicle',
        'Clay bar treatment',
        'Polish with compound',
        'Apply premium wax',
        'Buff to perfect shine',
        'Final inspection'
      ]
    },
    {
      id: 'engine-bay',
      title: 'Engine Bay Cleaning',
      description: 'Complete engine bay cleaning and detailing service',
      icon: Wrench,
      color: 'from-gray-500 to-slate-500',
      duration: '45-60 min',
      price: 'Starting at $35',
      features: [
        'Safe degreasing and cleaning',
        'Steam cleaning process',
        'Protection coating application',
        'Battery and electrical safety',
        'Dressing and shine',
        'Safety inspection'
      ],
      images: [
        '/photos-before-and-after/before-carpet-treatment.jpg',
        '/photos-before-and-after/after-carpet-treatment.jpg'
      ],
      process: [
        'Protect electrical components',
        'Apply degreaser',
        'Steam clean thoroughly',
        'Rinse carefully',
        'Apply protection coating',
        'Final safety check'
      ]
    },
    {
      id: 'full-detailing',
      title: 'Full Detailing Package',
      description: 'Complete inside and out transformation package',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      duration: '4-6 hours',
      price: 'Starting at $199',
      features: [
        'Everything included',
        'Premium products used',
        'Expert craftsmanship',
        'Guaranteed results',
        'Before/after photos',
        'Satisfaction guarantee'
      ],
      images: [
        '/photos-before-and-after/before-car-dirty-2.jpg',
        '/photos-before-and-after/after-leather-treatment.jpg'
      ],
      process: [
        'Complete exterior wash',
        'Interior deep cleaning',
        'Paint correction',
        'Wax and protection',
        'Engine bay cleaning',
        'Final quality inspection'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white/20 rounded-full animate-bubble"
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
              <Star className="h-4 w-4" />
              <span>Professional Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Our Premium{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From basic washes to complete transformations, we offer comprehensive car care services 
              that bring your vehicle back to showroom condition.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`card-premium cursor-interactive group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                      selectedService === index
                        ? 'border-primary-500 bg-primary-50 shadow-lg'
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedService(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{service.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service Details */}
            <div className="lg:sticky lg:top-24">
              <div className="card-premium bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Service Image */}
                <div className="image-premium relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={services[selectedService].images[0]}
                    alt={services[selectedService].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {services[selectedService].title}
                    </span>
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{services[selectedService].duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-semibold text-primary-600">{services[selectedService].price}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {services[selectedService].description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {services[selectedService].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Our Process:</h4>
                    <ol className="space-y-2">
                      {services[selectedService].process.map((step, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="btn-premium cursor-interactive w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold text-center flex items-center justify-center space-x-2"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <Link
                      href="/gallery"
                      className="btn-premium cursor-interactive w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-center flex items-center justify-center space-x-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Transformations</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Contact us today to schedule your service and experience the Lave-Auto Chomedey difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="btn-premium cursor-interactive bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2"
            >
              <span>Book Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+14506860016"
              className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 flex items-center space-x-2"
            >
              <span>Call +1 450-686-0016</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
