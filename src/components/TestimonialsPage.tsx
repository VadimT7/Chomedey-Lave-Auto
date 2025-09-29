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
  ThumbsUp
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
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg'
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
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg'
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
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg'
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
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg'
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
      beforeImage: '/photos-before-and-after/before-carpet-treatment.jpg'
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
      beforeImage: '/photos-before-and-after/before-leather-treatment.jpg'
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
              <ThumbsUp className="h-4 w-4" />
              <span>Customer Reviews</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              What Our{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Read what our satisfied customers have to say 
              about their experience with Lave-Auto Chomedey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">4.9</div>
              <div className="flex justify-center">
                {renderStars(5)}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">14+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="card-premium bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="image-premium relative h-96 lg:h-auto">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Before/After Indicator */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      AFTER
                    </span>
                  </div>

                  {/* Service Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials[currentTestimonial].service}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-primary-200" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {testimonials[currentTestimonial].location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {renderStars(testimonials[currentTestimonial].rating)}
                        <span className="text-gray-600 text-sm ml-2">
                          {testimonials[currentTestimonial].rating}/5
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{testimonials[currentTestimonial].date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="btn-premium cursor-interactive flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
                <span>Previous</span>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`btn-premium cursor-interactive w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-primary-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="btn-premium cursor-interactive flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full shadow-lg"
              >
                <span>Next</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">
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
                className="card-premium cursor-interactive bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.date}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Join Our Happy Customers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of satisfied customers who trust Lave-Auto Chomedey 
            with their vehicle care needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="/contact"
              className="btn-premium cursor-interactive bg-white hover:bg-gray-50 text-primary-700 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Book Your Service
            </a>
            <a
              href="tel:+14506860016"
              className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20"
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
