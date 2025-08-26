import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Every device gets a unique digital identity with immutable technical reports stored on the blockchain.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated agreements with electronic warranties and digital invoices for complete transparency.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
              title: 'Blockchain Technology',
      description: 'Built on Internet Computer Protocol for ultra-low costs and lightning-fast transactions.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'Blockchain expert with 10+ years in Web3 development'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      bio: 'Former senior engineer at major tech companies'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Product leader with expertise in marketplace platforms'
    }
  ]

  const stats = [
    { label: 'Devices Certified', value: '4,648', icon: Shield },
    { label: 'Happy Customers', value: '2,341', icon: Users },
    { label: 'Success Rate', value: '98.5%', icon: Target },
    { label: 'Market Growth', value: '+247%', icon: Award },
  ]

  const technologies = [
            'Internet Computer Protocol',
    'Rust Canisters',
    'Bitcoin Integration',
    'HTTP Outcalls',
    'Chain Key Cryptography',
    'IPFS Storage',
    'React & TypeScript',
    'Tailwind CSS'
  ]

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                About OriginTrace
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Revolutionizing</span>
              <br />
              <span className="text-white">Used Electronics</span>
              <br />
              <span className="gradient-text">Market</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-dark-300 mb-8 max-w-3xl mx-auto"
            >
              We're building the future of trusted commerce by leveraging blockchain technology 
              to eliminate fraud and create transparent, secure transactions for used electronics.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-dark-400 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-dark-300 mb-6">
                To transform the used electronics market from a gamble into a secure investment 
                by providing blockchain-certified devices with guaranteed quality and transparent history.
              </p>
              <p className="text-lg text-dark-300 mb-8">
                We believe that every consumer deserves to know exactly what they're buying, 
                and every seller deserves to get fair value for their devices. Our platform 
                makes this possible through cutting-edge Web3 technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="btn-outline">
                  Contact Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Problems We Solve</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">78% of buyers fear fraud</div>
                      <div className="text-dark-400 text-sm">Our blockchain certification eliminates this risk</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">42% of devices hide defects</div>
                      <div className="text-dark-400 text-sm">Rigorous technical inspection reveals all issues</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium">Lack of transparency</div>
                      <div className="text-dark-400 text-sm">Complete device history on the blockchain</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by <span className="gradient-text">Cutting-Edge</span> Technology
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Built on the Internet Computer Protocol with advanced Web3 features for maximum security and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-dark-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center space-x-2 p-3 bg-dark-800/50 rounded-lg border border-dark-700"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-white text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Experienced professionals passionate about revolutionizing the used electronics market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-500/20 group-hover:border-primary-500/40 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <div className="text-primary-400 font-medium mb-3">{member.role}</div>
                <p className="text-dark-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Join the Revolution</span>?
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Get in touch with us to learn more about our platform or to discuss partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@origintrace.com" className="btn-primary">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </a>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
