'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  User,
  Calendar,
  Sparkles,
  ThumbsUp,
  Award,
  Heart,
  Zap,
  Shield
} from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
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
      name: 'Michael Chen',
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
      name: 'Emily Rodriguez',
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
      name: 'David Thompson',
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
      name: 'Lisa Park',
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
      name: 'Robert Wilson',
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
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-pink-400/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Heart className="h-5 w-5 text-pink-400" />
              <span>Customer Reviews</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-display text-white mb-8 leading-tight">
              What Our{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Don't just take our word for it. Read what our satisfied customers have to say 
              about their experience with Lave-Auto Chomedey.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-yellow-400 mb-2">4.9</div>
                <div className="text-white/70">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl mb-4">
                  <ThumbsUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-green-400 mb-2">500+</div>
                <div className="text-white/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-purple-400 mb-2">14+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="card-premium bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="image-premium relative h-96 lg:h-auto">
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
                </div>

                {/* Content Section */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
                      <Quote className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-2xl text-gray-700 leading-relaxed mb-10 font-medium">
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
                        <div className="text-gray-600">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevTestimonial}
                className="btn-premium cursor-interactive flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full shadow-xl border border-gray-200"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="font-semibold">Previous</span>
              </button>

              {/* Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`btn-premium cursor-interactive w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="btn-premium cursor-interactive flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full shadow-xl border border-gray-200"
              >
                <span className="font-semibold">Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black font-display text-gray-900 mb-6">
              More Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are more testimonials from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={testimonial.id}
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
                    <div className="text-gray-600">
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
              </div>
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
            Ready to Experience the Difference?
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join hundreds of satisfied customers who trust Lave-Auto Chomedey 
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