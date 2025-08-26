import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Laptop, 
  Tablet,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Certification',
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

  const deviceTypes = [
    { name: 'Smartphones', icon: Smartphone, count: '2,847' },
    { name: 'Laptops', icon: Laptop, count: '1,234' },
    { name: 'Tablets', icon: Tablet, count: '567' }
  ]

  const stats = [
    { label: 'Certified Devices', value: '4,648', icon: CheckCircle },
    { label: 'Happy Customers', value: '2,341', icon: Users },
    { label: 'Success Rate', value: '98.5%', icon: Star },
    { label: 'Market Growth', value: '+247%', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        {/* Background Pattern */}
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
                Web3 Powered • Blockchain Certified
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Transform</span> Used Electronics
              <br />
              <span className="text-white">From Gamble to</span>
              <br />
              <span className="gradient-text">Secure Investment</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-dark-300 mb-8 max-w-3xl mx-auto"
            >
              OriginTrace certifies used electronic devices through rigorous technical inspection, 
              creating immutable blockchain records with smart contracts and digital warranties.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/marketplace" className="btn-primary">
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/certification" className="btn-outline">
                Certify Your Device
              </Link>
            </motion.div>
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

      {/* Features Section */}
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
              Why Choose <span className="gradient-text">OriginTrace</span>?
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Our platform leverages cutting-edge Web3 technology to ensure every transaction 
              is secure, transparent, and trustworthy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Device Types Section */}
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
              Popular <span className="gradient-text">Device Categories</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Browse through thousands of certified devices across multiple categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => {
              const Icon = device.icon
              return (
                <motion.div
                  key={device.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-secondary-500/10 border border-secondary-500/20">
                      <Icon className="w-8 h-8 text-secondary-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{device.count}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{device.name}</h3>
                  <p className="text-dark-300">Certified devices available</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Secure Your Investment</span>?
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Join thousands of users who trust OriginTrace for their used electronics purchases. 
              Start exploring certified devices today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/marketplace" className="btn-primary">
                Browse Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
