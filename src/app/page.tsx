'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Star, 
  Shield, 
  Zap, 
  Award, 
  CheckCircle,
  ChevronRight,
  Quote,
  X,
  Eye,
  Car
} from 'lucide-react';
import Image from 'next/image';
import LoadingSpinner from '@/components/LoadingSpinner';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Modal state
  const [selectedTransformation, setSelectedTransformation] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Modal functions
  const openTransformationModal = (index: number) => {
    setSelectedTransformation(index);
    setSliderPosition(50);
  };

  const closeTransformationModal = () => {
    setSelectedTransformation(null);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(parseInt(e.target.value));
  };

  // Testimonials data with Montreal-style names
  const testimonials = [
    {
      name: "Jean-Pierre Dubois",
      car: "BMW M3",
      text: "Service exceptionnel! Mon BMW n'a jamais été aussi propre. L'équipe est professionnelle et attentionnée.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      car: "Mercedes-Benz S-Class",
      text: "Un service de qualité supérieure. Ils ont redonné vie à ma Mercedes. Je recommande vivement!",
      rating: 5
    },
    {
      name: "Carlos Rodriguez",
      car: "Audi RS6",
      text: "Increíble trabajo! Mi Audi se ve como nuevo. El detallado interior es perfecto.",
      rating: 5
    },
    {
      name: "Marie-Claire Tremblay",
      car: "Porsche 911",
      text: "Service de luxe pour ma Porsche. L'attention aux détails est remarquable. Merci!",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      car: "Tesla Model S",
      text: "Excellent service! They understand luxury cars. My Tesla looks brand new.",
      rating: 5
    },
    {
      name: "Isabella Santos",
      car: "Lamborghini Huracán",
      text: "Perfect service for my Lamborghini. They treat every car like a masterpiece.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Detailing",
      description: "Complete interior and exterior detailing with premium products",
      features: ["Paint correction", "Ceramic coating", "Leather treatment"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Protection Services",
      description: "Advanced protection for your vehicle's finish and interior",
      features: ["Paint protection film", "Ceramic coating", "Interior protection"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Express Services",
      description: "Quick and efficient services for busy schedules",
      features: ["Express wash", "Quick detail", "Maintenance cleaning"]
    }
  ];

  const beforeAfterImages = [
    {
      before: "/photos-before-and-after/before-car-dirty-1.jpg",
      after: "/photos-before-and-after/after-carpet-treatment.jpg",
      title: "Interior Transformation"
    },
    {
      before: "/photos-before-and-after/before-car-dirty-2.jpg", 
      after: "/photos-before-and-after/after-leather-treatment.jpg",
      title: "Leather Restoration"
    },
    {
      before: "/photos-before-and-after/before-carpet-treatment.jpg",
      after: "/photos-before-and-after/after-carpet-treatment.jpg",
      title: "Carpet Deep Clean"
    }
  ];

  useEffect(() => {
    // Floating particles animation
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        rotation: 360,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        ease: 'none',
        delay: index * 0.5
      });
    });

    // Text reveal animation
    gsap.utils.toArray('.text-reveal').forEach((element: any) => {
      gsap.fromTo(element, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to main content
      </a>
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        id="main-content"
        className="relative h-[110vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'grid-move 20s linear infinite'
          }}></div>
          
          {/* Enhanced Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
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
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Animated Gradient Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        {/* Enhanced Video Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-10"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/Others/bubblesVideo.mp4" type="video/mp4" />
          </video>
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20"></div>
        </motion.div>

        {/* Enhanced Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            {/* Enhanced Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-2xl rounded-full px-8 py-4 mb-6 border border-white/20 shadow-2xl shadow-cyan-500/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-cyan-400 fill-current" />
              </motion.div>
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Chomedey's Premier Detailing Service
              </span>
            </motion.div>
            
            {/* Enhanced Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight"
            >
              <motion.span 
                className="block bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
              >
                Chomedey
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent"
                style={{ textShadow: '0 0 60px rgba(59, 130, 246, 0.8)' }}
              >
                Lave-Auto
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed font-medium px-4"
            >
              Transform your vehicle with our{' '}
              <span className="font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                premium detailing services
              </span>
              <br />
              Where{' '}
              <span className="font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                luxury meets perfection
              </span>{' '}
              in every detail.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium cursor-interactive group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full font-bold text-xl shadow-2xl shadow-cyan-500/50 flex items-center gap-3 overflow-hidden"
              aria-label="Book your car detailing service - Contact us now"
            >
              <span className="relative z-10">Book Your Service</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a 
              href="/gallery"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium cursor-interactive bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-12 py-6 rounded-full font-bold text-xl border-2 border-white/30 flex items-center gap-3"
              aria-label="View our before and after gallery - See our work"
            >
              <Eye className="w-6 h-6" />
              <span>View Our Work</span>
            </motion.a>
          </motion.div>

          {/* Enhanced Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 mx-auto max-w-5xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5000+', label: 'Cars Transformed', icon: <Car className="h-6 w-6 text-cyan-400" /> },
                { number: '100%', label: 'Satisfaction', icon: <Star className="h-6 w-6 text-cyan-400" /> },
                { number: '14+', label: 'Years Experience', icon: <Award className="h-6 w-6 text-cyan-400" /> },
                { number: '5.0★', label: 'Rating', icon: <Star className="h-6 w-6 text-cyan-400" /> },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="flex items-center justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Enhanced Services Section */}
      <section 
        className="py-32 px-4 relative bg-gradient-to-br from-slate-900 via-gray-900 to-black"
        aria-label="Our premium car detailing services"
      >
        {/* Background Elements */}
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20"
            >
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>Premium Services</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Service Tier
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the ultimate in automotive care with our comprehensive range of luxury services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05, rotateX: -5 }}
                className="card-premium cursor-interactive group relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:border-cyan-300/50 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {/* Service Icon */}
                <div className="p-8">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.2,
                      ease: "backOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg shadow-cyan-500/25"
                  >
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors"
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-300 mb-8 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="font-bold text-white mb-4 text-sm">What's Included:</h5>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.7 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 text-gray-300"
                        >
                          <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Before/After Gallery */}
      <section 
        className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
        aria-label="Before and after transformation gallery"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20"
            >
              <Eye className="h-5 w-5 text-cyan-400" />
              <span>Witness the Transformation</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Our Work{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Speaks
              </span>
              <br />
              for Itself
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See the dramatic before and after results of our premium detailing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.05, rotateX: -5 }}
                className="group relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 border border-white/20 hover:border-cyan-400/50"
                onClick={() => openTransformationModal(index)}
              >
                {/* Enhanced Image Container */}
                <div className="relative h-80 overflow-hidden">
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.before}
                      alt={`Before: ${item.title}`}
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:blur-sm"
                    />
                  </div>
                  
                  {/* After Image - Reveals on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-100">
                    <Image
                      src={item.after}
                      alt={`After: ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Before Badge */}
                  <div className="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-all duration-150">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      BEFORE
                    </span>
                  </div>
                  
                  {/* After Badge - Appears on Hover */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      AFTER
                    </span>
                  </div>
                  
                  {/* Enhanced Hover Instruction */}
                  <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-all duration-300">
                    <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                      Hover to Reveal
                    </div>
                  </div>

                  {/* Click to Expand Button */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </motion.div>
                </div>
                
                {/* Enhanced Content Area */}
                <div className="p-8 bg-gradient-to-br from-white/5 to-transparent relative">
                  <div className="relative z-10">
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500"
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-500"
                    >
                      Complete transformation with our premium detailing process
                    </motion.p>
                    
                    {/* Enhanced Rating */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-yellow-400 text-sm font-semibold">5-star rated</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-24 px-4 relative"
        aria-label="Customer testimonials and reviews"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our satisfied clients about their luxury car care experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium cursor-interactive group relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-purple-500 opacity-30" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.car}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
        aria-label="Call to action - Book your service today"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Geometric Shapes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            >
              <div className={`w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-sm`}></div>
            </div>
          ))}
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Flowing Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-shimmer"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-shimmer" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6 drop-shadow-lg" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Come Ready for the Ultimate
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                Car Care Experience
              </span>
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Book your premium detailing service today and transform your vehicle into a masterpiece
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-premium cursor-interactive px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-bold text-lg text-white shadow-2xl shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.5)',
                    '0 0 20px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Call (514) 555-0123
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before/After Modal */}
      <AnimatePresence>
        {selectedTransformation !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeTransformationModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeTransformationModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {beforeAfterImages[selectedTransformation].title}
                </h3>
                
                {/* Before/After Slider */}
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  {/* Before Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={beforeAfterImages[selectedTransformation].before}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* After Image with Slider */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <Image
                      src={beforeAfterImages[selectedTransformation].after}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Slider Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                  
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
                
                <p className="text-gray-600 text-center mt-4">
                  Drag the slider to compare before and after results
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;