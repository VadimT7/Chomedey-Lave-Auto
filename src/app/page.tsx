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
  Eye
} from 'lucide-react';
import Image from 'next/image';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Modal state
  const [selectedTransformation, setSelectedTransformation] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Video Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-10"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/Others/bubblesVideo.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
            >
              <Star className="w-6 h-6 text-cyan-300 fill-current animate-pulse" />
              <span className="text-lg font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Luxury Car Care Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-black mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
                Chomedey
              </span>
              <motion.span 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="block text-5xl md:text-7xl bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent"
              >
                Lave-Auto
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl md:text-3xl text-cyan-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
            >
              Transform your vehicle with our{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                premium detailing services
              </span>
              <br />
              Where{' '}
              <span className="font-semibold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                luxury meets perfection
              </span>{' '}
              in every detail.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <a 
              href="/contact"
              className="btn-premium cursor-interactive group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Service
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
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

      {/* Services Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the ultimate in automotive care with our comprehensive range of luxury services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-premium cursor-interactive group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Transformations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the dramatic before and after results of our premium detailing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 border border-gray-700 hover:border-cyan-400/50 hover:scale-105"
              >
                {/* Image Container with Hover Reveal */}
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
                  
                  {/* Animated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Before Badge */}
                  <div className="absolute bottom-4 left-4 transform group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-500">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      BEFORE
                    </span>
                  </div>
                  
                  {/* After Badge - Appears on Hover */}
                  <div className="absolute bottom-4 left-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      AFTER
                    </span>
                  </div>
                  
                  {/* Magic Sparkle Effect */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                  
                  {/* Hover Instruction - Corner */}
                  <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                      Hover to Reveal
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Area */}
                <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-500">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-500">
                      Complete transformation with our premium detailing process
                    </p>
                    
                    <div className="flex items-center justify-end">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 relative">
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
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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