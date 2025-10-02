'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  Heart,
  Phone
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
          image: '/Others/chomedey-washing-rolls-royce.jpeg'
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
          image: '/Others/interior-cleaning.jpeg'
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
          image: '/Others/Engine-Bay-Cleaning.jpeg'
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
          image: '/Others/interior-detailing.jpg'
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
          image: '/Others/wax-and-polish.jpeg'
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
          image: '/Others/full-car-detailing.jpeg'
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
          image: '/Others/ceramic-coating.jpeg'
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
          image: '/Others/paint-correction.jpeg'
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
          image: '/Others/leather-restoration.jpeg'
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
      {/* Epic Hero Section with Single Video Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen pb-16 flex items-center overflow-hidden pt-20"
      >
        {/* Single Video Background */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Others/washing-bentley.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20"></div>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-3 rounded-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </motion.div>
              <span className="text-white font-bold text-sm uppercase tracking-wider">Chomedey's Premier Detailing</span>
            </div>
          </motion.div>

          {/* Main Headline with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
              >
                Elevate Your
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ textShadow: '0 0 60px rgba(59, 130, 246, 0.8)' }}
              >
                Car Care
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium px-4"
            >
              Experience professional detailing that transforms your vehicle from ordinary to extraordinary
            </motion.p>
          </motion.div>


          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#services"
                className="btn-premium cursor-interactive bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl shadow-cyan-500/50 flex items-center space-x-3 group"
              >
                <span>Explore Services</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-12 py-6 rounded-full font-bold text-xl border-2 border-white/30 flex items-center space-x-3"
              >
                <Phone className="h-6 w-6" />
                <span>Book Now</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 mx-auto max-w-5xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: '5000+', label: 'Cars Detailed', icon: Car },
                { number: '100%', label: 'Satisfaction', icon: Heart },
                { number: '14+', label: 'Years', icon: Award },
                { number: '5.0★', label: 'Rating', icon: Star },
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.1 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-5 w-5 text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer"
          >
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Services Categories */}
      <section id="services" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Service Tier
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From essential maintenance to luxury treatments, select the perfect service tier 
              that matches your vehicle's needs and your expectations.
            </p>
          </motion.div>
                      
          {/* Service Categories */}
          <div className="space-y-32">
            {serviceCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
                return (
                <motion.div 
                  key={category.id}
                  id={category.id}
                  className="relative scroll-mt-20"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Luxury Category Header */}
                  <div className="relative mb-20">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10 blur-3xl rounded-3xl`}></div>
                    
                    {/* Main Category Card */}
                    <motion.div 
                      className={`relative bg-gradient-to-r ${category.color} rounded-3xl p-12 shadow-2xl border border-white/10 backdrop-blur-xl`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <CategoryIcon className="h-12 w-12 text-white/30" />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <motion.div 
                            className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CategoryIcon className="h-10 w-10 text-white" />
                          </motion.div>
                          
                          <div>
                            <motion.h3 
                              className="text-4xl font-black text-white mb-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              {category.title}
                            </motion.h3>
                            <motion.p 
                              className="text-white/80 text-lg font-light"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                            >
                              {category.subtitle}
                            </motion.p>
                          </div>
                        </div>
                        
                        {/* Luxury Badge */}
                        <motion.div 
                          className="hidden lg:flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7, duration: 0.6 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white font-medium text-sm uppercase tracking-wider">
                            {categoryIndex === 0 ? 'Essential' : categoryIndex === 1 ? 'Premium' : 'Luxury'}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => {
                      const ServiceIcon = service.icon;
                      return (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: serviceIndex * 0.15,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          viewport={{ once: true }}
                          whileHover={{ y: -15, scale: 1.05, rotateX: -5 }}
                          className={`card-premium cursor-interactive group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 ${
                            service.popular 
                              ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/30 scale-105' 
                              : 'hover:border-cyan-300/50 hover:shadow-xl hover:shadow-cyan-500/20'
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
                    className={`object-cover ${
                      service.id === 'exterior-wash' 
                        ? 'object-[center_65%]' 
                        : service.id === 'engine-bay'
                        ? 'object-[bottom_10%]'
                        : service.id === 'interior-basic'
                        ? 'object-top'
                        : service.id === 'leather-restoration'
                        ? 'object-[left_20%]'
                        : ''
                    }`}
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
                            <div className="mb-6">
                              <h4 className="text-xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>

                            {/* Pricing */}
                            <div className="mb-6">
                              <div className="flex items-center space-x-3 mb-2">
                                <span className="text-3xl font-black text-white">{service.price}</span>
                                {service.originalPrice && (
                                  <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                                )}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                              <h5 className="font-bold text-white mb-3 text-sm">What's Included:</h5>
                              <ul className="space-y-2">
                                {service.features.slice(0, 3).map((feature, index) => (
                                  <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                                {service.features.length > 3 && (
                                  <li className="text-sm text-cyan-400 font-semibold">
                                    +{service.features.length - 3} more features
                                  </li>
                                )}
                              </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                              <Link
                                href="/contact"
                                className={`btn-premium cursor-interactive w-full text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-300 ${
                                  service.popular
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25'
                                    : 'bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20'
                                }`}
                              >
                                <span>Book Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                              <Link
                                href="/gallery"
                                className="btn-premium cursor-interactive w-full bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 border border-white/20 transition-all duration-300"
                              >
                                <Eye className="h-4 w-4" />
                                <span>View Results</span>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Package Comparison */}
          <div className="mt-24">
            <div className="card-premium bg-gradient-to-br from-slate-900 to-gray-900 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-black mb-6">
                Want To Know Which Service Is Best For You?
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
            Experience the Chomedey Lave-Auto Difference
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
