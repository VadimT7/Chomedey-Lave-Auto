'use client';

import Image from 'next/image';
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
  Gem
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Jean-Pierre Dubois',
      role: 'Founder & Lead Detailer',
      experience: '14+ years',
      specialty: 'Paint Correction & Ceramic Coating',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      description: 'Passionate about perfection, Jean-Pierre founded Lave-Auto Chomedey with a vision to provide the highest quality car care services.',
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
      <section className="py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }}></div>
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
              in the Chomedey community. Learn about our story, values, and the team behind your car's transformation.
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
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black font-display text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
                <p>
                  Lave-Auto Chomedey was born from a simple passion: the love of seeing a dirty, 
                  neglected vehicle transform into a gleaming masterpiece. Founded in 2010 by 
                  Jean-Pierre Dubois, we started as a small operation with big dreams.
                </p>
                <p>
                  What began as a one-man show has grown into a trusted team of professionals 
                  who share the same commitment to excellence. Over the years, we've invested 
                  in the latest equipment, premium products, and continuous training to ensure 
                  we deliver the best possible results.
                </p>
                <p>
                  Today, we're proud to have served over 5,000 satisfied customers in the 
                  Chomedey and greater Laval area. Our reputation is built on quality, 
                  reliability, and an unwavering commitment to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="image-premium relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos-before-and-after/cleaning-process.jpg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-bold">
                    Our Team in Action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black font-display text-gray-900 mb-8">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape the experience we provide to every customer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-premium cursor-interactive bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
                >
                  <div className="flex items-start space-x-8">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black font-display text-gray-900 mb-8">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are passionate about delivering exceptional results 
              and ensuring your complete satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="card-premium cursor-interactive bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="image-premium relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold">
                      {member.experience}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-bold text-lg mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        Specializes in: {member.specialty}
                      </span>
                    </div>
                    
                    <div className="mt-4 space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
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
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={milestone.year}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="card-premium bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
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
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white flex items-center justify-center z-10">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black font-display text-gray-900 mb-8">
              Why Trust Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications, insurance, and commitment to excellence give you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Fully Insured</h3>
              <p className="text-gray-600">Complete liability coverage for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl mb-6">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Certified Professionals</h3>
              <p className="text-gray-600">Trained and certified in the latest techniques</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-3xl mb-6">
                <Leaf className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">100% biodegradable and environmentally safe products</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl mb-6">
                <Star className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">5-Star Rated</h3>
              <p className="text-gray-600">Consistently rated 5 stars by our customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span>Ready to Experience Excellence?</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black font-display text-white mb-8">
            Join Our Family of Satisfied Customers
          </h2>
          
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Experience the Lave-Auto Chomedey difference. Let us transform your vehicle 
            with the same care and attention to detail we've been providing for over 14 years.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="/contact"
              className="btn-premium cursor-interactive bg-white hover:bg-gray-50 text-emerald-700 px-10 py-5 rounded-full font-bold text-lg"
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

export default AboutPage;