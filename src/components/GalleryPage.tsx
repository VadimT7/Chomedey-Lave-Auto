'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Star,
  Award,
  Heart,
  Trophy,
  MoveHorizontal
} from 'lucide-react';

// Before/After Slider Component
const BeforeAfterSlider = ({ before, after, title, description }: { before: string; after: string; title: string; description: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative w-full h-full"
    >
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden rounded-3xl cursor-ew-resize select-none shadow-2xl border-4 border-white/20"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={after}
            alt={`${title} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            AFTER
          </div>
        </div>

        {/* Before Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${title} - Before`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-cyan-500 transition-transform group-hover:scale-110">
            <MoveHorizontal className="h-5 w-5 text-cyan-600" />
          </div>
        </div>

        {/* Info Overlay - Always visible */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
          <h3 className="text-white font-bold text-2xl mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Video Showcase Component
const VideoShowcase = ({ videoSrc, title, isPrimary = false }: { videoSrc: string; title: string; isPrimary?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay Top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Title - At the top with beautiful styling, hide on hover */}
      <div className={`absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-white font-bold text-lg lg:text-xl tracking-tight leading-tight" style={{
          textShadow: '0 6px 16px rgba(0, 0, 0, 0.9), 0 3px 8px rgba(0, 0, 0, 0.7), 0 10px 32px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 1)'
        }}>
          {title}
        </h3>
      </div>

      {/* Premium Badge */}
      {isPrimary && (
        <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
          <Sparkles className="h-3 w-3" />
          <span>PREMIUM</span>
        </div>
      )}
    </motion.div>
  );
};

const GalleryPage = () => {
  // Transformation showcase data - ONLY using actual matching photos
  const transformations = [
    {
      id: 1,
      before: '/photos-before-and-after/before-carpet-treatment.jpg',
      after: '/photos-before-and-after/after-carpet-treatment.jpg',
      title: 'Complete Carpet Restoration',
      description: 'Deep cleaning and restoration bringing carpets back to showroom condition'
    },
    {
      id: 2,
      before: '/photos-before-and-after/before-leather-treatment.jpg',
      after: '/photos-before-and-after/after-leather-treatment.jpg',
      title: 'Leather Seat Rejuvenation',
      description: 'Professional leather treatment restoring the original luster and feel'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Others/polishing-car2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -150, 0],
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full text-base font-semibold mb-8 border border-white/20"
          >
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span>Transformation Gallery</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
          >
            Where Magic
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Happens
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Witness the extraordinary transformations that have made us the premier 
            choice for luxury car care. Every detail, perfected.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          >
            {[
              { icon: Award, number: '5,000+', label: 'Transformations' },
              { icon: Star, number: '5.0', label: 'Perfect Rating' },
              { icon: Trophy, number: '14+', label: 'Years Excellence' },
              { icon: Heart, number: '100%', label: 'Satisfied Clients' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <IconComponent className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center space-y-3"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 text-sm"
            >
              <span>Explore Transformations</span>
            </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
              <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
        </div>
      </motion.section>

      {/* Main Gallery Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 px-4"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Before & After
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Showcase</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Drag the slider to reveal the stunning transformations. Every detail matters.
            </p>
          </motion.div>

          {/* Asymmetric Masonry Layout */}
          <div className="space-y-20 max-w-[1400px] mx-auto px-4 lg:px-6">
            {/* Row 1: Two Large Transformations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Carpet Transformation */}
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.618,
                  type: "spring",
                  bounce: 0.2
                }}
                className="h-[500px] lg:h-[700px]"
              >
                <BeforeAfterSlider
                  before={transformations[0].before}
                  after={transformations[0].after}
                  title={transformations[0].title}
                  description={transformations[0].description}
                />
              </motion.div>

              {/* Leather Transformation */}
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.618,
                  type: "spring",
                  bounce: 0.2,
                  delay: 0.618
                }}
                className="h-[500px] lg:h-[700px]"
              >
                <BeforeAfterSlider
                  before={transformations[1].before}
                  after={transformations[1].after}
                  title={transformations[1].title}
                  description={transformations[1].description}
                />
              </motion.div>
            </div>

            {/* Row 2: EPIC Video Transformation Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.618,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative py-16"
            >
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-emerald-500/10 blur-3xl" />
              
              {/* Title */}
              <div className="text-center mb-12 px-4">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.618
                  }}
                  className="text-4xl lg:text-5xl font-black text-white mb-4"
                >
                  The <span className="bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent">Ultimate</span> Transformation
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.618, delay: 1.236 }}
                  className="text-lg text-white/70"
                >
                  Watch the magic unfold from start to finish
                </motion.p>
        </div>

              {/* Video Transformation Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Before Video */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.618
                  }}
                  className="lg:col-span-5 h-[600px] lg:h-[700px]"
                >
                  <VideoShowcase
                    videoSrc="/photos-before-and-after/Before-polishing-video.mp4"
                    title="Before: Scratched & Dull Surface"
                    isPrimary={true}
                  />
                </motion.div>

                {/* Animated Arrow Section - Minimalistic & Sleek */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 2.236
                  }}
                  className="lg:col-span-2 flex items-center justify-center py-8 lg:py-0"
                >
                  <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">
                    {/* Single Sleek Animated Arrow */}
                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ 
                        duration: 3.236,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Subtle Glow */}
                      <div className="absolute inset-0 bg-cyan-400/30 blur-xl" />
                      
                      {/* Arrow */}
                      <svg
                        className="relative w-16 h-16 lg:w-20 lg:h-20 text-cyan-400 rotate-90 lg:rotate-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* After Video */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.618
                  }}
                  className="lg:col-span-5 h-[600px] lg:h-[700px]"
                >
                  <VideoShowcase
                    videoSrc="/photos-before-and-after/After-polishing-video.mp4"
                    title="After: Mirror-Like Perfection"
                    isPrimary={true}
                  />
                </motion.div>
                </div>
            </motion.div>

            {/* Row 3: Interior Video Transformation Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.618,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative py-16"
            >
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />
              
              {/* Title */}
              <div className="text-center mb-12 px-4">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.618
                  }}
                  className="text-4xl lg:text-5xl font-black text-white mb-4"
                >
                  Interior <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Deep Clean</span> Transformation
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.618, delay: 1.236 }}
                  className="text-lg text-white/70"
                >
                  From neglected to immaculate
                </motion.p>
                  </div>
                  
              {/* Video Transformation Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Before Video */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.618
                  }}
                  className="lg:col-span-5 h-[600px] lg:h-[700px]"
                >
                  <VideoShowcase
                    videoSrc="/photos-before-and-after/Before-video-dirty-car-interior.mp4"
                    title="Before: Heavily Soiled Interior"
                    isPrimary={true}
                  />
                </motion.div>

                {/* Animated Arrow Section - Minimalistic & Sleek */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    delay: 2.236
                  }}
                  className="lg:col-span-2 flex items-center justify-center py-8 lg:py-0"
                >
                  <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">
                    {/* Single Sleek Animated Arrow */}
                    <motion.div
                      animate={{
                        x: [0, 15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3.236,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative"
                    >
                      {/* Subtle Glow */}
                      <div className="absolute inset-0 bg-purple-400/30 blur-xl" />
                      
                      {/* Arrow */}
                      <svg
                        className="relative w-16 h-16 lg:w-20 lg:h-20 text-purple-400 rotate-90 lg:rotate-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* After Video */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.618
                  }}
                  className="lg:col-span-5 h-[600px] lg:h-[700px]"
                >
                  <VideoShowcase
                    videoSrc="/photos-before-and-after/After-video-clean-car.mp4"
                    title="After: Pristine & Fresh Interior"
                    isPrimary={true}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Row 4: Cleaning Process Video - Vertical Format with Sleek Sides */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.618,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative py-16"
            >
              {/* Background Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 blur-3xl" />
              
              {/* Title */}
              <div className="text-center mb-12 px-4">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.618
                  }}
                  className="text-5xl lg:text-7xl font-black text-white mb-6"
                >
                  Behind the <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Scenes</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.618, delay: 1.236 }}
                  className="text-xl lg:text-2xl text-white/70"
                >
                  Watch our meticulous process in action
                </motion.p>
              </div>

              {/* Vertical Video with Sleek Side Elements */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Sleek Panel */}
                <div className="lg:col-span-3 hidden lg:block">
                  <div className="space-y-4">
                    {[
                      { title: 'Deep Clean', subtitle: 'Thorough treatment', color: 'from-emerald-500/40 to-teal-500/40', borderColor: 'border-emerald-400/70' },
                      { title: 'Premium Care', subtitle: 'Professional grade', color: 'from-cyan-500/40 to-blue-500/40', borderColor: 'border-cyan-400/70' },
                      { title: 'Precision', subtitle: 'Attention to detail', color: 'from-teal-500/40 to-emerald-500/40', borderColor: 'border-teal-400/70' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.618,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 1.618 + (idx * 0.618)
                        }}
                        whileHover={{ x: 8 }}
                        className={`bg-gradient-to-br ${item.color} backdrop-blur-xl border-2 ${item.borderColor} p-6 rounded-xl group cursor-default shadow-lg`}
                      >
                        <h4 className="text-white font-bold text-xl mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-white/80 text-sm font-light tracking-wide">{item.subtitle}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Vertical Video - Centered */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.618,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 1.618
                  }}
                  className="lg:col-span-6 flex justify-center"
                >
                  <div className="w-full max-w-md h-[500px] lg:h-[700px]">
                    <VideoShowcase
                      videoSrc="/photos-before-and-after/Cleaning-Process-Video.mp4"
                      title="Our Meticulous Process"
                      isPrimary={true}
                    />
                  </div>
                </motion.div>

                {/* Right Sleek Panel */}
                <div className="lg:col-span-3 hidden lg:block">
                  <div className="space-y-4">
                    {[
                      { title: 'Time Efficient', subtitle: 'Swift excellence', color: 'from-purple-500/40 to-pink-500/40', borderColor: 'border-purple-400/70' },
                      { title: 'Protected', subtitle: 'Safe on surfaces', color: 'from-blue-500/40 to-cyan-500/40', borderColor: 'border-blue-400/70' },
                      { title: 'Luxury Finish', subtitle: 'Showroom quality', color: 'from-amber-500/40 to-orange-500/40', borderColor: 'border-amber-400/70' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.618,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 1.618 + (idx * 0.618)
                        }}
                        whileHover={{ x: -8 }}
                        className={`bg-gradient-to-br ${item.color} backdrop-blur-xl border-2 ${item.borderColor} p-6 rounded-xl group cursor-default shadow-lg`}
                      >
                        <h4 className="text-white font-bold text-xl mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-white/80 text-sm font-light tracking-wide">{item.subtitle}</p>
              </motion.div>
            ))}
                  </div>
          </div>
              </div>
            </motion.div>
            </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Ready for Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Transformation?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto">
              Experience the same level of care and attention to detail. Your car deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 overflow-hidden"
              >
                <span className="relative z-10">Book Your Service</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="/services"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
