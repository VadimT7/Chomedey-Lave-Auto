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
  DollarSign,
  Award,
  Crown,
  Gem,
  Heart
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(0);

  const serviceCategories = [
    {
      id: 'basic-services',
      title: 'Basic Services',
      subtitle: 'Essential car care for everyday maintenance',
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 via-cyan-50 to-blue-50',
      services: [
        {
          id: 'exterior-wash',
          title: 'Exterior Car Wash',
          description: 'Complete exterior cleaning with premium soap and protective wax',
          icon: Car,
          color: 'from-blue-500 to-cyan-500',
          duration: '30-45 min',
          price: '$25',
          originalPrice: '$35',
          rating: 5,
          popular: false,
          features: [
            'Hand wash with premium soap',
            'Wheel and tire cleaning',
            'Tire shine application',
            'Quick dry with microfiber',
            'Windows and mirrors cleaning',
            'Basic wax protection'
          ],
          image: '/photos-before-and-after/before-car-dirty-1.jpg'
        },
        {
          id: 'interior-basic',
          title: 'Interior Clean',
          description: 'Basic interior cleaning and vacuuming service',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          duration: '45-60 min',
          price: '$35',
          originalPrice: '$45',
          rating: 5,
          popular: true,
          features: [
            'Complete vacuum cleaning',
            'Dashboard and console wipe',
            'Window cleaning',
            'Basic leather treatment',
            'Trunk cleaning',
            'Odor neutralization'
          ],
          image: '/photos-before-and-after/before-carpet-treatment.jpg'
        },
        {
          id: 'engine-bay',
          title: 'Engine Bay Cleaning',
          description: 'Complete engine bay cleaning and detailing service',
          icon: Wrench,
          color: 'from-slate-500 to-gray-500',
          duration: '45-60 min',
          price: '$40',
          originalPrice: '$50',
          rating: 5,
          popular: false,
          features: [
            'Safe degreasing and cleaning',
            'Steam cleaning process',
            'Protection coating application',
            'Battery and electrical safety',
            'Dressing and shine',
            'Safety inspection'
          ],
          image: '/photos-before-and-after/after-carpet-treatment.jpg'
        }
      ]
    },
    {
      id: 'premium-services',
      title: 'Premium Services',
      subtitle: 'Advanced detailing for showroom-quality results',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 via-pink-50 to-purple-50',
      services: [
        {
          id: 'interior-detailing',
          title: 'Interior Detailing',
          description: 'Deep cleaning and protection for your car\'s interior surfaces',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
          duration: '90-120 min',
          price: '$85',
          originalPrice: '$120',
          rating: 5,
          popular: true,
          features: [
            'Complete vacuum and steam cleaning',
            'Leather conditioning and protection',
            'Dashboard and console deep clean',
            'Carpet and upholstery treatment',
            'Odor elimination',
            'UV protection application'
          ],
          image: '/photos-before-and-after/after-carpet-treatment.jpg'
        },
        {
          id: 'wax-polish',
          title: 'Wax & Polish',
          description: 'Professional waxing and polishing for showroom-quality shine',
          icon: Droplets,
          color: 'from-orange-500 to-red-500',
          duration: '90-120 min',
          price: '$95',
          originalPrice: '$130',
          rating: 5,
          popular: false,
          features: [
            'Paint correction and polishing',
            'Premium carnauba wax',
            'Buffing and shine enhancement',
            'Paint protection',
            'Scratch and swirl removal',
            'Long-lasting results'
          ],
          image: '/photos-before-and-after/after-leather-treatment.jpg'
        },
        {
          id: 'full-detailing',
          title: 'Full Detailing Package',
          description: 'Complete inside and out transformation package',
          icon: Crown,
          color: 'from-yellow-500 to-orange-500',
          duration: '4-6 hours',
          price: '$199',
          originalPrice: '$299',
          rating: 5,
          popular: true,
          features: [
            'Everything included',
            'Premium products used',
            'Expert craftsmanship',
            'Guaranteed results',
            'Before/after photos',
            'Satisfaction guarantee'
          ],
          image: '/photos-before-and-after/before-car-dirty-2.jpg'
        }
      ]
    },
    {
      id: 'luxury-services',
      title: 'Luxury Services',
      subtitle: 'Ultimate protection and enhancement treatments',
      icon: Gem,
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 via-teal-50 to-emerald-50',
      services: [
        {
          id: 'ceramic-coating',
          title: 'Ceramic Coating',
          description: 'Long-lasting protection with advanced ceramic coating technology',
          icon: Shield,
          color: 'from-emerald-500 to-teal-500',
          duration: '3-4 hours',
          price: '$399',
          originalPrice: '$599',
          rating: 5,
          popular: true,
          features: [
            'Paint correction and preparation',
            'Professional ceramic coating',
            'UV and chemical protection',
            'Easy maintenance for 2+ years',
            'Enhanced gloss and shine',
            'Warranty included'
          ],
          image: '/photos-before-and-after/after-leather-treatment.jpg'
        },
        {
          id: 'paint-correction',
          title: 'Paint Correction',
          description: 'Professional paint restoration and enhancement service',
          icon: Zap,
          color: 'from-indigo-500 to-purple-500',
          duration: '4-6 hours',
          price: '$299',
          originalPrice: '$399',
          rating: 5,
          popular: false,
          features: [
            'Multi-stage paint correction',
            'Swirl and scratch removal',
            'Paint enhancement',
            'Professional polishing',
            'Protection application',
            'Showroom finish'
          ],
          image: '/photos-before-and-after/before-car-dirty-1.jpg'
        },
        {
          id: 'leather-restoration',
          title: 'Leather Restoration',
          description: 'Complete leather cleaning, conditioning, and protection',
          icon: Heart,
          color: 'from-rose-500 to-pink-500',
          duration: '2-3 hours',
          price: '$149',
          originalPrice: '$199',
          rating: 5,
          popular: false,
          features: [
            'Deep leather cleaning',
            'Conditioning treatment',
            'Color restoration',
            'Protection coating',
            'Crack prevention',
            'Luxury finish'
          ],
          image: '/photos-before-and-after/after-carpet-treatment.jpg'
        }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Award className="h-5 w-5 text-cyan-400" />
              <span>Professional Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-display text-white mb-8 leading-tight">
              Our Premium{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              From basic washes to complete transformations, we offer comprehensive car care services 
              that bring your vehicle back to showroom condition.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">6+</div>
                <div className="text-white/70">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">5000+</div>
                <div className="text-white/70">Cars Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">100%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-indigo-400 mb-2">14+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Choose Your Perfect{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Service Package
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From basic maintenance to luxury treatments, we have the perfect service 
              to keep your vehicle looking and feeling its best.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-24">
            {serviceCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-16">
                    <div className={`inline-flex items-center space-x-4 bg-gradient-to-r ${category.color} text-white px-8 py-4 rounded-full mb-6 shadow-lg`}>
                      <CategoryIcon className="h-8 w-8" />
                      <div className="text-left">
                        <h3 className="text-2xl font-black">{category.title}</h3>
                        <p className="text-sm opacity-90">{category.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => {
                      const ServiceIcon = service.icon;
                      return (
                        <div
                          key={service.id}
                          className={`card-premium cursor-interactive group relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
                            service.popular 
                              ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-105' 
                              : 'border-gray-200 hover:border-cyan-300 hover:shadow-xl'
                          }`}
                        >
                          {/* Popular Badge */}
                          {service.popular && (
                            <div className="absolute top-4 right-4 z-10">
                              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                Most Popular
                              </span>
                            </div>
                          )}

                          {/* Service Image */}
                          <div className="image-premium relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                                <ServiceIcon className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                                {renderStars(service.rating)}
                              </div>
                            </div>
                          </div>

                          {/* Service Content */}
                          <div className="p-8">
                            <div className="mb-4">
                              <h4 className="text-xl font-black text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            {/* Pricing */}
                            <div className="mb-6">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="text-3xl font-black text-gray-900">{service.price}</span>
                                {service.originalPrice && (
                                  <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                                )}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span className="font-semibold">{service.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400" />
                                  <span className="font-semibold">{service.rating}.0</span>
                                </div>
                              </div>
                            </div>

                            {/* Features Preview */}
                            <div className="mb-6">
                              <h5 className="font-bold text-gray-900 mb-3 text-sm">What's Included:</h5>
                              <ul className="space-y-2">
                                {service.features.slice(0, 3).map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                                {service.features.length > 3 && (
                                  <li className="text-sm text-cyan-600 font-semibold">
                                    +{service.features.length - 3} more features
                                  </li>
                                )}
                              </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                              <Link
                                href="/contact"
                                className={`btn-premium cursor-interactive w-full text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 ${
                                  service.popular
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700'
                                    : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
                                }`}
                              >
                                <span>Book Now</span>
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                              
                              <Link
                                href="/gallery"
                                className="btn-premium cursor-interactive w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
                              >
                                <Eye className="h-4 w-4" />
                                <span>View Results</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Package Comparison */}
          <div className="mt-24">
            <div className="card-premium bg-gradient-to-br from-slate-900 to-gray-900 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-black mb-6">
                Not Sure Which Service is Right for You?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our experts are here to help you choose the perfect service package 
                based on your vehicle's needs and your budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="/contact"
                  className="btn-premium cursor-interactive bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+14506860016"
                  className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20"
                >
                  Call +1 450-686-0016
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Heart className="h-5 w-5 text-cyan-400" />
            <span>Ready to Transform Your Vehicle?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black font-display text-white mb-8">
            Experience the Lave-Auto Chomedey Difference
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Contact us today to schedule your service and experience the premium car care 
            that has made us Chomedey's most trusted detailing service.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link
              href="/contact"
              className="btn-premium cursor-interactive bg-white hover:bg-gray-50 text-slate-700 px-10 py-5 rounded-full font-bold text-lg"
            >
              Book Your Service
            </Link>
            <a
              href="tel:+14506860016"
              className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg border border-white/20"
            >
              Call +1 450-686-0016
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
