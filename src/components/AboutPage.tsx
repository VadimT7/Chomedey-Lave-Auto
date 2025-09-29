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
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Jean-Pierre Dubois',
      role: 'Founder & Lead Detailer',
      experience: '14+ years',
      specialty: 'Paint Correction & Ceramic Coating',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      description: 'Passionate about perfection, Jean-Pierre founded Lave-Auto Chomedey with a vision to provide the highest quality car care services.'
    },
    {
      name: 'Marie-Claire Tremblay',
      role: 'Interior Specialist',
      experience: '8+ years',
      specialty: 'Leather Treatment & Interior Detailing',
      image: '/photos-before-and-after/after-leather-treatment.jpg',
      description: 'Marie-Claire brings meticulous attention to detail to every interior transformation, ensuring your car feels like new.'
    },
    {
      name: 'Alexandre Moreau',
      role: 'Exterior Specialist',
      experience: '6+ years',
      specialty: 'Waxing & Paint Protection',
      image: '/photos-before-and-after/after-carpet-treatment.jpg',
      description: 'Alexandre specializes in bringing out the best shine in every vehicle, using premium products and techniques.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We love what we do and it shows in every detail of our work. Your satisfaction is our greatest reward.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'We\'ve been serving the Chomedey community for over 14 years, building lasting relationships through consistent quality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Approach',
      description: 'We care about the environment and use only biodegradable, eco-friendly products that are safe for your car and the planet.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Attention to Detail',
      description: 'Every corner, every surface, every detail matters. We don\'t just clean your car, we perfect it.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with a small shop and big dreams' },
    { year: '2012', title: 'First Expansion', description: 'Added interior detailing services' },
    { year: '2015', title: 'Ceramic Coating', description: 'Introduced premium ceramic coating services' },
    { year: '2018', title: 'Team Growth', description: 'Expanded to a team of 5 professionals' },
    { year: '2020', title: 'Eco Initiative', description: 'Switched to 100% eco-friendly products' },
    { year: '2024', title: '5000+ Cars', description: 'Celebrated 5000+ successful transformations' }
  ];

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
              <Users className="h-4 w-4" />
              <span>Our Story</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              From Soap to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Shine
              </span>
              <br />
              Our Journey
            </h1>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              For over 14 years, we've been transforming vehicles and exceeding expectations 
              in the Chomedey community. Learn about our story, values, and the team behind your car's transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
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
              <div className="image-premium relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos-before-and-after/cleaning-process.jpg"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    Our Team in Action
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
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
                  className="card-premium cursor-interactive bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
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
                className="card-premium cursor-interactive bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="image-premium relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                      {member.experience}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">
                      Specializes in: {member.specialty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Key milestones in our growth and evolution as Chomedey's premier car care service.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-premium bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="text-2xl font-bold text-primary-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-white/80">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 mb-6">
              Why Trust Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certifications, insurance, and commitment to excellence give you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">Complete liability coverage for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600 text-sm">Trained and certified in the latest techniques</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">100% biodegradable and environmentally safe products</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600 text-sm">Consistently rated 5 stars by our customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Ready to Experience Excellence?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            Join Our Family of Satisfied Customers
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience the Lave-Auto Chomedey difference. Let us transform your vehicle 
            with the same care and attention to detail we've been providing for over 14 years.
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

export default AboutPage;
