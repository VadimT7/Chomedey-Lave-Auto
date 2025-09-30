'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  Send,
  CheckCircle,
  Navigation,
  MessageCircle,
  Calendar,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import LamborghiniModel from './LamborghiniModel';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredContact: 'phone',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const services = [
    'Basic Car Wash',
    'Premium Detailing',
    'Ceramic Coating',
    'Interior Cleaning',
    'Paint Correction',
    'Full Service Package'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          scale: { duration: 1.5, ease: "easeOut" }
        }}
        className="min-h-screen relative overflow-hidden flex items-center"
      >
        {/* Video Background */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/Others/washing-porsche.mp4" type="video/mp4" />
          </video>
          {/* Animated Top Shadow Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/20 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center -mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="inline-flex items-center space-x-3 bg-black/40 backdrop-blur-xl text-white px-8 py-3 rounded-none text-xs font-bold mb-8 border border-white/20 uppercase tracking-[0.25em]"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Get In Touch
              </motion.span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black font-display text-white mb-8 leading-tight tracking-tight uppercase"
            >
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Contact
              </motion.span>{' '}
              <motion.span 
                className="text-white/95"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                Us Today
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-light tracking-wide"
            >
              Ready to transform your vehicle? Get in touch with us today. We're here to answer 
              your questions and help you choose the perfect service for your car.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 1.4,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="flex justify-center mt-20"
            >
              <motion.a
                href="tel:+14506860016"
                initial={{ rotateX: 45, scale: 0.8 }}
                animate={{ rotateX: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.6,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateX: -5,
                  boxShadow: "0 30px 60px -12px rgba(255, 0, 0, 0.6)"
                }}
                whileTap={{ scale: 0.95, rotateX: 5 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4), 0 0 60px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)",
                    "0 0 30px rgba(255, 0, 0, 0.8), 0 0 50px rgba(255, 0, 0, 0.6), 0 0 70px rgba(255, 0, 0, 0.4), inset 0 0 25px rgba(255, 255, 255, 0.15)",
                    "0 0 20px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4), 0 0 60px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)"
                  ],
                  y: [0, -3, 0],
                  rotateX: [0, -2, 0]
                }}
                transition={{
                  hover: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
                  tap: { duration: 0.1 },
                  animate: { 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className="btn-premium cursor-interactive bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white px-12 py-6 rounded-full font-bold text-lg inline-flex items-center justify-center space-x-3 shadow-2xl border-2 border-red-400/30 relative overflow-hidden"
                style={{
                  boxShadow: "0 0 20px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4), 0 0 60px rgba(255, 0, 0, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Phone className="h-6 w-6 relative z-10" />
                </motion.div>
                <motion.span 
                  className="relative z-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                >
                  Call +1 450-686-0016
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Call Us Now Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
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
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
          </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateX: { duration: 1.5, ease: "easeOut" }
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl mb-8"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Phone className="h-12 w-12 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Call Us
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Now
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Ready to transform your vehicle? Get in touch with us today for immediate assistance.
            </motion.p>
            
            <motion.a
              href="tel:+14506860016"
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: 30 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateX: -5,
                boxShadow: "0 30px 60px -12px rgba(6, 182, 212, 0.6)"
              }}
              whileTap={{ scale: 0.95, rotateX: 5 }}
              className="btn-premium cursor-interactive inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-12 py-6 rounded-full font-bold text-xl shadow-2xl relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.0, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Phone className="h-6 w-6 relative z-10" />
              </motion.div>
              <motion.span 
                className="relative z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                +1 450-686-0016
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-cyan-200 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateX: { duration: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-3xl mb-8"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 10,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Clock className="h-12 w-12 text-cyan-600" />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Operating
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Hours
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              We're here to serve you with premium car care services
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateY: { duration: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="card-premium bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 5:00 PM" },
                  { day: "Sunday", time: "9:00 AM - 5:00 PM" }
                ].map((schedule, index) => (
                  <motion.div 
                    key={schedule.day}
                    className="flex items-center justify-between py-4 border-b border-gray-100"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <span className="text-lg font-semibold text-gray-900">{schedule.day}</span>
                    <motion.span 
                      className="text-lg font-bold text-cyan-600"
                      whileHover={{ scale: 1.1, color: "#0891b2" }}
                    >
                      {schedule.time}
                    </motion.span>
                  </motion.div>
                    ))}
                  </div>
              
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <div className="text-center flex flex-col items-center justify-center h-full">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 10,
                      boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(34, 197, 94, 0.3)",
                        "0 0 20px rgba(34, 197, 94, 0.4)",
                        "0 0 0 rgba(34, 197, 94, 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1.0, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <Clock className="h-10 w-10 text-green-600" />
                    </motion.div>
                  </motion.div>
                  <motion.p 
                    className="text-lg font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    Currently Open
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    We respond quickly to all inquiries
                  </motion.p>
                </div>
              </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border border-cyan-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
              </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.0, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateX: { duration: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Find Us
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              >
                Here
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Interactive Map
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.0, 
              delay: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateY: { duration: 1.2, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative"
          >
            {/* Map Container */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: "rgba(6, 182, 212, 0.3)"
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.1234567890!2d-73.7123456!3d45.6123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a1234567890%3A0x1234567890abcdef!2s3987%20Av.%20de%20la%20Renaissance%2C%20Laval%2C%20QC%20H7L%203X2%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px]"
                title="Chomedey Lave-Auto Location"
              />
              
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 pointer-events-none"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
                    </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 70, rotateX: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              rotateX: { duration: 1.5, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                What Our
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                Customers Say
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Real experiences from our valued customers across Quebec
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marie-Claire",
                text: "Service exceptionnel! Mon BMW n'a jamais été aussi propre. L'équipe est professionnelle et attentionnée.",
                rating: 5,
                background: "from-cyan-500 to-blue-600"
              },
              {
                name: "Ahmed",
                text: "Amazing work on my Mercedes! The ceramic coating is incredible. Highly recommend to everyone.",
                rating: 5,
                background: "from-purple-500 to-pink-600"
              },
              {
                name: "Priya",
                text: "Best car wash in Laval! My Honda looks brand new. The interior detailing is outstanding.",
                rating: 5,
                background: "from-emerald-500 to-teal-600"
              },
              {
                name: "Jean-François",
                text: "Service de qualité supérieure! Mon Audi brille comme jamais. Je reviendrai certainement.",
                rating: 5,
                background: "from-orange-500 to-red-600"
              },
              {
                name: "Sarah",
                text: "Professional, fast, and thorough. My Tesla has never looked better. Worth every penny!",
                rating: 5,
                background: "from-indigo-500 to-purple-600"
              },
              {
                name: "Hassan",
                text: "Excellent service! My Lexus is spotless. The team is very friendly and professional.",
                rating: 5,
                background: "from-pink-500 to-rose-600"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  rotateX: { duration: 1.0, ease: "easeOut" }
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05, 
                  rotateX: -5,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)"
                }}
                className="card-premium cursor-interactive bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 text-center relative overflow-hidden"
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${testimonial.background} rounded-full mb-6 relative z-10`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <motion.span 
                    className="text-white font-bold text-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.span>
                </motion.div>
                
                <motion.div 
                  className="flex justify-center mb-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.6 + index * 0.1 + i * 0.1, 
                        duration: 0.4,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed mb-6 relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.text}"
                </motion.p>
                
                <motion.p 
                  className="text-white font-semibold text-lg relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {testimonial.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;