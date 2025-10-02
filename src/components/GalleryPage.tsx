'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Filter,
  Star,
  Sparkles,
  Zap,
  Award,
  Heart,
  Car,
  Clock,
  MapPin,
  Trophy
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '4px']);

  // Scroll detection for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header disappears when scrolling down past 200px
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 200) {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = [
    { id: 'all', label: 'All Transformations', count: 12, color: 'from-cyan-500 to-blue-600' },
    { id: 'exterior', label: 'Exterior', count: 4, color: 'from-emerald-500 to-teal-600' },
    { id: 'interior', label: 'Interior', count: 4, color: 'from-purple-500 to-pink-600' },
    { id: 'ceramic', label: 'Ceramic Coating', count: 2, color: 'from-orange-500 to-red-600' },
    { id: 'engine', label: 'Engine Bay', count: 2, color: 'from-indigo-500 to-purple-600' }
  ];

  const galleryItems = [
    {
      id: 1,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Complete Interior Transformation',
      category: 'interior',
      service: 'Interior Detailing',
      description: 'From dirty and stained to pristine and fresh',
      rating: 5,
      time: '2 hours'
    },
    {
      id: 2,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Leather Restoration',
      category: 'interior',
      service: 'Leather Treatment',
      description: 'Professional leather cleaning and conditioning',
      rating: 5,
      time: '1.5 hours'
    },
    {
      id: 3,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Carpet Deep Clean',
      category: 'interior',
      service: 'Carpet Cleaning',
      description: 'Removing years of dirt and stains',
      rating: 5,
      time: '1 hour'
    },
    {
      id: 4,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Leather Seat Restoration',
      category: 'interior',
      service: 'Leather Treatment',
      description: 'Bringing leather seats back to life',
      rating: 5,
      time: '1.5 hours'
    },
    {
      id: 5,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Exterior Wash & Wax',
      category: 'exterior',
      service: 'Exterior Wash',
      description: 'Complete exterior transformation',
      rating: 5,
      time: '45 min'
    },
    {
      id: 6,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Paint Correction',
      category: 'exterior',
      service: 'Wax & Polish',
      description: 'Removing scratches and restoring shine',
      rating: 5,
      time: '2 hours'
    },
    {
      id: 7,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Ceramic Coating Application',
      category: 'ceramic',
      service: 'Ceramic Coating',
      description: 'Long-lasting protection and shine',
      rating: 5,
      time: '4 hours'
    },
    {
      id: 8,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Premium Ceramic Coating',
      category: 'ceramic',
      service: 'Ceramic Coating',
      description: 'Showroom-quality protection',
      rating: 5,
      time: '5 hours'
    },
    {
      id: 9,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Engine Bay Cleaning',
      category: 'engine',
      service: 'Engine Bay',
      description: 'Complete engine bay restoration',
      rating: 5,
      time: '1 hour'
    },
    {
      id: 10,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Engine Bay Detailing',
      category: 'engine',
      service: 'Engine Bay',
      description: 'Professional engine bay cleaning',
      rating: 5,
      time: '1.5 hours'
    },
    {
      id: 11,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Full Detailing Package',
      category: 'exterior',
      service: 'Full Detailing',
      description: 'Complete inside and out transformation',
      rating: 5,
      time: '6 hours'
    },
    {
      id: 12,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Premium Full Service',
      category: 'exterior',
      service: 'Full Detailing',
      description: 'Showroom-quality results',
      rating: 5,
      time: '8 hours'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredItems[nextIndex].after);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredItems[prevIndex].after);
  };

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
            <source src="/Others/polishing-car2.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-transparent to-blue-900/30"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium mb-6 sm:mb-8 border border-white/20"
          >
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            <span>Witness the Transformation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-6 leading-tight px-4"
          >
            Our Work{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Speaks
            </span>
            <br />
            for Itself
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg lg:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Explore our portfolio of stunning transformations. From dirty to dazzling, 
            see how we turn every vehicle into a masterpiece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#gallery"
              className="btn-premium cursor-interactive bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg shadow-2xl shadow-cyan-500/50 flex items-center space-x-2 sm:space-x-3"
            >
              <span>View Gallery</span>
              <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="/contact"
              className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg border-2 border-white/30"
            >
              Book Your Service
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 sm:mt-12 mb-16 sm:mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 px-4"
          >
            {[
              { icon: Award, number: '5000+', label: 'Cars Transformed' },
              { icon: Star, number: '5.0', label: 'Average Rating' },
              { icon: Trophy, number: '14+', label: 'Years Experience' },
              { icon: Heart, number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
                >
                  <IconComponent className="h-7 w-7 sm:h-9 sm:w-9 text-cyan-400 mx-auto mb-2 sm:mb-3" />
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
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-xs sm:text-sm flex flex-col items-center space-y-1 sm:space-y-2"
          >
            <span className="hidden sm:inline">Scroll to explore</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Filter Section */}
      <motion.section 
        id="gallery"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`py-16 bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky z-30 transition-all duration-500 ease-out ${
          isHeaderVisible ? 'top-20' : 'top-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Filter Our{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Transformations
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our work by service type to see specific results
            </p>
          </motion.div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-4 sm:mb-0">
              <Filter className="h-5 w-5" />
              <span className="font-semibold text-lg">Filter by service:</span>
            </div>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn-premium cursor-interactive px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl shadow-cyan-500/25`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-lg'
                }`}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-premium cursor-interactive group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                {/* Image Container */}
                <div className="image-premium relative h-80 overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AFTER
                      </span>
                      <button
                        onClick={() => openLightbox(item.after, index)}
                        className="btn-premium cursor-interactive bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.service}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {renderStars(item.rating)}
                      <span className="text-sm font-semibold text-gray-600">{item.service}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Zap className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">Transformation #{item.id}</span>
                    <button
                      onClick={() => openLightbox(item.after, index)}
                      className="link-premium cursor-interactive text-cyan-600 hover:text-cyan-700 text-sm font-semibold flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <Eye className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
                <Sparkles className="h-12 w-12 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No transformations found</h3>
              <p className="text-gray-500 text-lg">Try selecting a different category to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="btn-premium cursor-interactive absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="btn-premium cursor-interactive absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="btn-premium cursor-interactive absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={lightboxImage}
                alt={filteredItems[lightboxIndex]?.title || 'Gallery image'}
                width={1000}
                height={750}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
                <h3 className="text-white font-bold text-2xl mb-2">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
                <p className="text-white/80 text-lg mb-4">
                  {filteredItems[lightboxIndex]?.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-white/60 text-sm">
                      {filteredItems[lightboxIndex]?.service}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(filteredItems[lightboxIndex]?.rating || 5)}
                    </div>
                  </div>
                  <span className="text-white/60 text-sm">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;