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
  Sparkles
} from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Transformations', count: 12 },
    { id: 'exterior', label: 'Exterior', count: 4 },
    { id: 'interior', label: 'Interior', count: 4 },
    { id: 'ceramic', label: 'Ceramic Coating', count: 2 },
    { id: 'engine', label: 'Engine Bay', count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Complete Interior Transformation',
      category: 'interior',
      service: 'Interior Detailing',
      description: 'From dirty and stained to pristine and fresh'
    },
    {
      id: 2,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Leather Restoration',
      category: 'interior',
      service: 'Leather Treatment',
      description: 'Professional leather cleaning and conditioning'
    },
    {
      id: 3,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Carpet Deep Clean',
      category: 'interior',
      service: 'Carpet Cleaning',
      description: 'Removing years of dirt and stains'
    },
    {
      id: 4,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Leather Seat Restoration',
      category: 'interior',
      service: 'Leather Treatment',
      description: 'Bringing leather seats back to life'
    },
    {
      id: 5,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Exterior Wash & Wax',
      category: 'exterior',
      service: 'Exterior Wash',
      description: 'Complete exterior transformation'
    },
    {
      id: 6,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Paint Correction',
      category: 'exterior',
      service: 'Wax & Polish',
      description: 'Removing scratches and restoring shine'
    },
    {
      id: 7,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Ceramic Coating Application',
      category: 'ceramic',
      service: 'Ceramic Coating',
      description: 'Long-lasting protection and shine'
    },
    {
      id: 8,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Premium Ceramic Coating',
      category: 'ceramic',
      service: 'Ceramic Coating',
      description: 'Showroom-quality protection'
    },
    {
      id: 9,
      before: '/photos-before-and-after/before-car-dirty-1.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Engine Bay Cleaning',
      category: 'engine',
      service: 'Engine Bay',
      description: 'Complete engine bay restoration'
    },
    {
      id: 10,
      before: '/photos-before-and-after/before-car-dirty-2.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Engine Bay Detailing',
      category: 'engine',
      service: 'Engine Bay',
      description: 'Professional engine bay cleaning'
    },
    {
      id: 11,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Full Detailing Package',
      category: 'exterior',
      service: 'Full Detailing',
      description: 'Complete inside and out transformation'
    },
    {
      id: 12,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Premium Full Service',
      category: 'exterior',
      service: 'Full Detailing',
      description: 'Showroom-quality results'
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
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
              <Eye className="h-4 w-4" />
              <span>Transformation Gallery</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Before & After{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Witness the incredible transformations we achieve with our professional car detailing services. 
              Every vehicle tells a story of renewal and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter by service:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn-premium cursor-interactive px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="card-premium cursor-interactive group bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Image Container */}
                <div className="image-premium relative h-64 overflow-hidden">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        AFTER
                      </span>
                      <button
                        onClick={() => openLightbox(item.after, index)}
                        className="btn-premium cursor-interactive bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-white/80 text-xs">{item.service}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-600">{item.service}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Transformation #{item.id}</span>
                    <button
                      onClick={() => openLightbox(item.after, index)}
                      className="link-premium cursor-interactive text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1"
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
            <div className="text-center py-20">
              <Sparkles className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No transformations found</h3>
              <p className="text-gray-500">Try selecting a different category to see more results.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="btn-premium cursor-interactive absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="btn-premium cursor-interactive absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="btn-premium cursor-interactive absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={lightboxImage}
                alt={filteredItems[lightboxIndex]?.title || 'Gallery image'}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
                <p className="text-white/80 text-sm mb-2">
                  {filteredItems[lightboxIndex]?.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">
                    {filteredItems[lightboxIndex]?.service}
                  </span>
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
