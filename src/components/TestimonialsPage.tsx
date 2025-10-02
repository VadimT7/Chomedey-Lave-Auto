'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  User,
  Users,
  Calendar,
  Sparkles,
  ThumbsUp,
  Award,
  Heart,
  Zap,
  Shield,
  Phone
} from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '4px']);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      car: 'BMW X5 2021',
      location: 'Chomedey, Laval',
      rating: 5,
      date: '2 weeks ago',
      service: 'Full Detailing Package',
      text: 'Absolutely amazing service! My car looks brand new after their full detailing package. The attention to detail is incredible, and the staff is so professional. I will definitely be coming back!',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg',
      verified: true
    },
    {
      id: 2,
      name: 'Michael',
      car: 'Mercedes C-Class 2020',
      location: 'Laval',
      rating: 5,
      date: '1 month ago',
      service: 'Ceramic Coating',
      text: 'The ceramic coating service exceeded my expectations. My car has never looked this good, and the protection is outstanding. The team explained everything clearly and delivered exactly what they promised.',
      image: '/photos-before-and-after/after-leather-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg',
      verified: true
    },
    {
      id: 3,
      name: 'Emily',
      car: 'Audi A4 2019',
      location: 'Chomedey',
      rating: 5,
      date: '3 weeks ago',
      service: 'Interior Detailing',
      text: 'I was skeptical about interior detailing, but wow! They removed stains I thought were permanent and made my car smell amazing. The leather treatment made my seats look like new. Highly recommend!',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg',
      verified: true
    },
    {
      id: 4,
      name: 'David',
      car: 'Toyota Camry 2022',
      location: 'Laval',
      rating: 5,
      date: '1 week ago',
      service: 'Exterior Wash & Wax',
      text: 'Fast, efficient, and thorough. My car was filthy from winter driving, and they made it look showroom ready. The wax job is still holding up perfectly after weeks of driving.',
      image: '/photos-before-and-after/after-leather-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa',
      car: 'Honda Civic 2020',
      location: 'Chomedey, Laval',
      rating: 5,
      date: '2 months ago',
      service: 'Engine Bay Cleaning',
      text: 'I never thought to clean my engine bay, but they convinced me to try it. The difference is incredible! My engine looks brand new, and they were so careful with all the electrical components.',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg',
      verified: true
    },
    {
      id: 6,
      name: 'Robert',
      car: 'Lexus RX 2021',
      location: 'Laval',
      rating: 5,
      date: '3 weeks ago',
      service: 'Full Detailing Package',
      text: 'Best car detailing service in the area! Professional, reliable, and the results speak for themselves. My car looks better than when I first bought it. Worth every penny!',
      image: '/photos-before-and-after/after-leather-treatment.jpg',
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg',
      verified: true
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section with Video Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0 top-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Others/brushing-car-interior.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/30 via-transparent to-purple-900/30"></div>
        </div>

        {/* Floating Bubbles Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-white/20"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                bottom: '-10%',
              }}
              animate={{
                y: [0, -1200],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-white/20"
          >
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-pink-400" />
            <span>Verified Customer Reviews</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-6 leading-tight px-4"
          >
            Real Stories,{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Real
            </span>
            <br />
            Transformations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Don't just take our word for it. Hear directly from hundreds of satisfied customers 
            who have experienced the Chomedey Lave-Auto difference.
          </motion.p>

          {/* Star Rating Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center justify-center space-x-2 sm:space-x-3 mb-10 px-4"
          >
            <div className="flex space-x-1 sm:space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                >
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">5.0</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#testimonials"
                className="btn-premium cursor-interactive bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg shadow-2xl shadow-pink-500/50 flex items-center space-x-3"
              >
                <span>Read Reviews</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.div>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 flex items-center space-x-3"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Book Your Service</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 sm:mt-12 mb-16 sm:mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4"
          >
            {[
              { icon: ThumbsUp, number: '100+', label: '5-Star Reviews' },
              { icon: Award, number: '100%', label: 'Verified' },
              { icon: Users, number: '5000+', label: 'Happy Customers' },
              { icon: Heart, number: '14+', label: 'Years Trusted' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6"
                >
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-pink-400 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-xs sm:text-sm flex flex-col items-center space-y-1 sm:space-y-2"
          >
            <span className="hidden sm:inline">See what they say</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main Testimonials Section */}
      <motion.section 
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Testimonial Slider */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-premium bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-[600px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="image-premium relative h-96 lg:h-full group">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Before/After Indicator */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      AFTER
                    </span>
                  </div>

                  {/* Service Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {testimonials[currentTestimonial].service}
                    </span>
                  </div>

                  {/* Verified Badge */}
                  {testimonials[currentTestimonial].verified && (
                    <div className="absolute top-6 right-6">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Shield className="h-3 w-3" />
                        <span>Verified</span>
                      </div>
                    </div>
                  )}

                  {/* Image Navigation Arrows */}
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-12 lg:p-16 flex flex-col justify-center h-full relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-15">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
                      <Quote className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-10 font-medium h-32 flex items-center mt-8">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center">
                        <User className="h-8 w-8 text-pink-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-xl">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {testimonials[currentTestimonial].car}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonials[currentTestimonial].location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {renderStars(testimonials[currentTestimonial].rating)}
                        <span className="text-gray-600 font-semibold">
                          {testimonials[currentTestimonial].rating}/5
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{testimonials[currentTestimonial].date}</span>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <button
                        onClick={prevTestimonial}
                        className="btn-premium cursor-interactive flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="font-semibold text-sm">Previous</span>
                      </button>

                      {/* Dots */}
                      <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`btn-premium cursor-interactive w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial
                                ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextTestimonial}
                        className="btn-premium cursor-interactive flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-6 py-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300"
                      >
                        <span className="font-semibold text-sm">Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Additional Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black font-display text-gray-900 mb-6">
              More Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are more testimonials from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-premium cursor-interactive bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center space-x-2 mb-6">
                  {renderStars(testimonial.rating)}
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      <Shield className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {testimonial.car}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.date}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-pink-400" />
            <span>Join Our Happy Customers</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black font-display text-white mb-8">
            Get Ready to Experience the Difference
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust Chomedey Lave-Auto 
            with their vehicle care needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="/contact"
              className="btn-premium cursor-interactive bg-white hover:bg-gray-50 text-indigo-700 px-10 py-5 rounded-full font-bold text-lg"
            >
              Book Your Service
            </a>
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

export default TestimonialsPage;