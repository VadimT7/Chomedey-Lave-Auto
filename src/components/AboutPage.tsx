'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Users, 
  Shield, 
  Leaf, 
  Star,
  Clock,
  CheckCircle,
  Sparkles,
  Heart,
  Target,
  Zap,
  Car,
  Wrench,
  Droplets,
  Crown,
  Gem,
  ArrowRight,
  Phone
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Jean-Pierre Dubois',
      role: 'Founder & Lead Detailer',
      experience: '14+ years',
      specialty: 'Paint Correction & Ceramic Coating',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      description: 'Passionate about perfection, Jean-Pierre founded Chomedey Lave-Auto with a vision to provide the highest quality car care services.',
      achievements: ['5000+ Cars Transformed', 'Certified Detailer', 'Eco-Friendly Pioneer']
    },
    {
      name: 'Marie-Claire Tremblay',
      role: 'Interior Specialist',
      experience: '8+ years',
      specialty: 'Leather Treatment & Interior Detailing',
      image: '/photos-before-and-after/after-leather-treatment.jpg',
      description: 'Marie-Claire brings meticulous attention to detail to every interior transformation, ensuring your car feels like new.',
      achievements: ['Interior Expert', 'Leather Specialist', 'Customer Favorite']
    },
    {
      name: 'Alexandre Moreau',
      role: 'Exterior Specialist',
      experience: '6+ years',
      specialty: 'Waxing & Paint Protection',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      description: 'Alexandre specializes in bringing out the best shine in every vehicle, using premium products and techniques.',
      achievements: ['Paint Expert', 'Wax Specialist', 'Quality Champion']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We love what we do and it shows in every detail of our work. Your satisfaction is our greatest reward.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We\'ve been serving the Chomedey community for over 14 years, building lasting relationships through consistent quality.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Approach',
      description: 'We care about the environment and use only biodegradable, eco-friendly products that are safe for your car and the planet.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Every corner, every surface, every detail matters. We don\'t just clean your car, we perfect it.',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with a small shop and big dreams', icon: Car },
    { year: '2012', title: 'First Expansion', description: 'Added interior detailing services', icon: Wrench },
    { year: '2015', title: 'Ceramic Coating', description: 'Introduced premium ceramic coating services', icon: Droplets },
    { year: '2018', title: 'Team Growth', description: 'Expanded to a team of 5 professionals', icon: Users },
    { year: '2020', title: 'Eco Initiative', description: 'Switched to 100% eco-friendly products', icon: Leaf },
    { year: '2024', title: '5000+ Cars', description: 'Celebrated 5000+ successful transformations', icon: Crown }
  ];

  const stats = [
    { number: '5000+', label: 'Cars Transformed', icon: Car },
    { number: '14+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Satisfaction Rate', icon: Heart },
    { number: '5★', label: 'Average Rating', icon: Star }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Particles */}
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute w-3 h-3 bg-emerald-400/25 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, Math.random() * 20 - 10, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Medium Particles */}
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={`medium-${i}`}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
                x: [0, Math.random() * 15 - 7.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Small Particles */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute w-1 h-1 bg-teal-400/15 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 0.8, 0],
                x: [0, Math.random() * 10 - 5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
          
          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/8 to-emerald-500/8 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Gem className="h-5 w-5 text-emerald-400" />
              <span>Our Story</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-display text-white mb-8 leading-tight">
              From Soap to{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Shine
              </span>
              <br />
              Our Journey
            </h1>
            
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              For over 14 years, we've been transforming vehicles and exceeding expectations 
              in the Laval community. Learn about our story, values, and the team behind your car's transformation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl mb-4 border border-white/20">
                      <IconComponent className="h-8 w-8 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-black text-emerald-400 mb-2">{stat.number}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-gray-900 mb-8 leading-tight">
              From Soap to{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Shine
              </span>
              </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Chomedey's Premier Car Detailing Experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Excellence Award Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 cursor-interactive mb-8 text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Crown className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-bold text-gray-900">Excellence Award</span>
                  </div>
                  <div className="text-2xl font-black text-gray-900">Chomedey's #1</div>
                  <div className="text-sm text-gray-600">Car Detailing Service</div>
                </motion.div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Chomedey Lave-Auto was born from a simple passion: the love of seeing a dirty, 
                  neglected vehicle transform into a gleaming masterpiece. Founded in 2010 by 
                  Jean-Pierre Dubois, we started as a small operation with big dreams.
                </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  What began as a one-man show has grown into a trusted team of professionals 
                  who share the same commitment to excellence. Over the years, we've invested 
                    in the latest equipment, premium products, and continuous training.
                </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we're proud to have served over 5,000 satisfied customers in the 
                  Chomedey and greater Laval area. Our reputation is built on quality, 
                  reliability, and an unwavering commitment to customer satisfaction.
                </p>
              </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-black text-cyan-600 mb-2">5000+</div>
                    <div className="text-sm text-gray-600 font-medium">Cars Transformed</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-black text-blue-600 mb-2">14+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-black text-indigo-600 mb-2">5★</div>
                    <div className="text-sm text-gray-600 font-medium">Rating</div>
                  </motion.div>
              </div>
            </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos-before-and-after/cleaning-process.jpg"
                  alt="Our team at work"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-white relative overflow-hidden"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/3 to-blue-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-black font-display text-gray-900 mb-8">
              What Drives{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape the experience we provide to every customer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="card-premium cursor-interactive bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center group"
                >
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
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 group-hover:shadow-lg`}
                  >
                      <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl font-black text-gray-900 mb-4"
                  >
                        {value.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed text-sm"
                  >
                        {value.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-black font-display text-gray-900 mb-8">
              Meet the{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Masters
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced professionals are passionate about delivering exceptional results 
              and ensuring your complete satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="card-premium cursor-interactive bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                {/* Profile Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6"
                  >
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {member.experience}
                    </span>
                  </motion.div>
                  
                  {/* Specialty Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="absolute bottom-6 left-6"
                  >
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {member.specialty}
                    </span>
                  </motion.div>
                </div>
                
                {/* Profile Content */}
                <div className="p-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black text-gray-900 mb-2"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-cyan-600 font-bold text-lg mb-4"
                  >
                    {member.role}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {member.description}
                  </motion.p>
                  
                  {/* Signature Line */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    className="pt-6 border-t border-gray-100"
                  >
                  <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-500 italic">
                        "Passion drives perfection"
                    </span>
                  </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black font-display text-white mb-8">
              Our Journey
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Key milestones in our growth and evolution as Chomedey's premier car care service.
            </p>
          </div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full origin-top"
            />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                  key={milestone.year}
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? -100 : 100, 
                      scale: 0.8,
                      rotateY: isEven ? -15 : 15
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0, 
                      scale: 1,
                      rotateY: 0
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: isEven ? 5 : -5,
                      transition: { duration: 0.3 }
                    }}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                        }}
                        className="card-premium bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-3xl font-black text-emerald-400">
                        {milestone.year}
                      </div>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3">
                        {milestone.title}
                      </h3>
                        <p className="text-white/80 text-lg">
                        {milestone.description}
                      </p>
                      </motion.div>
                  </div>
                  
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.3 + 0.4,
                        ease: "backOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-lg shadow-emerald-500/50"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.3 + 0.6 }}
                        viewport={{ once: true }}
                        className="w-4 h-4 bg-white rounded-full"
                      />
                    </motion.div>
                  
                  <div className="w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trust Badges Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-black font-display text-white mb-8">
              Why Trust{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Us?
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our certifications, insurance, and commitment to excellence give you peace of mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Fully Insured", description: "Complete liability coverage for your peace of mind", color: "from-green-500 to-emerald-500", iconColor: "text-white" },
              { icon: Award, title: "Certified Professionals", description: "Trained and certified in the latest techniques", color: "from-blue-500 to-cyan-500", iconColor: "text-white" },
              { icon: Leaf, title: "Eco-Friendly", description: "100% biodegradable and environmentally safe products", color: "from-emerald-500 to-teal-500", iconColor: "text-white" },
              { icon: Star, title: "5-Star Rated", description: "Consistently rated 5 stars by our customers", color: "from-yellow-500 to-orange-500", iconColor: "text-white" }
            ].map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center cursor-interactive"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.2,
                      ease: "backOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${badge.color} rounded-3xl mb-6 shadow-lg`}
                  >
                    <IconComponent className={`h-10 w-10 ${badge.iconColor}`} />
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl font-black text-white mb-3"
                  >
                    {badge.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-white/80"
                  >
                    {badge.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-500/30 rounded-full"
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
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeInOut",
              }}
            />
          ))}
          
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl text-slate-800 px-8 py-4 rounded-full text-sm font-medium mb-12 border border-slate-200 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-cyan-600" />
            </motion.div>
            <span className="text-lg">Ready to Experience Excellence?</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-slate-900 mb-8 leading-tight"
          >
            Ready for the{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Ultimate
            </span>
            <br />
            Car Care Experience?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-slate-700 mb-16 leading-relaxed max-w-4xl mx-auto"
          >
            Book your premium detailing service today and transform your vehicle into a masterpiece. 
            Join thousands of satisfied customers who trust us with their most prized possessions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-premium cursor-interactive bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-full font-bold text-xl inline-flex items-center justify-center space-x-3 shadow-2xl"
            >
              <span>Book Your Service</span>
              <ArrowRight className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="tel:+14506860016"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="btn-premium cursor-interactive bg-white/80 hover:bg-white backdrop-blur-md text-slate-900 px-12 py-6 rounded-full font-bold text-xl border border-slate-200 shadow-lg inline-flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call +1 450-686-0016</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;