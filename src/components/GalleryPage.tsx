'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
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
  Heart
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>Transformation Gallery</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-display text-white mb-8 leading-tight">
              Before & After{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Witness the incredible transformations we achieve with our professional car detailing services. 
              Every vehicle tells a story of renewal and excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">500+</div>
                <div className="text-white/70">Cars Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">14+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-5 w-5" />
              <span className="font-semibold text-lg">Filter by service:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn-premium cursor-interactive px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl shadow-cyan-500/25`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-premium cursor-interactive group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                {/* Image Container */}
                <div className="image-premium relative h-80 overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 group-hover:from-cyan-500/20 transition-all duration-500"></div>
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
              </div>
            ))}
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