import { motion } from 'framer-motion'
import { 
  Shield, 
  ShoppingCart, 
  Package, 
  HelpCircle,
  MessageCircle,
  Mail,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Camera,
  Monitor,
  Database,
  Lock,
  CheckCircle,
  Globe,
  Code
} from 'lucide-react'

const HowToUse = () => {
  const buyerSteps = [
    { title: 'Browse Devices', desc: 'Use filters to find the perfect certified device for you.' },
    { title: 'Review Details', desc: 'Open the device page to view specs, certification, and warranty.' },
    { title: 'Add to Cart', desc: 'Add the device to your cart and proceed to checkout.' },
    { title: 'Track Order', desc: 'Track your shipment and access your digital warranty.' },
  ]

  const sellerSteps = [
    { title: 'Login as Seller', desc: 'Create your seller account from the Login page.' },
    { title: 'List a Device', desc: 'Provide specs, condition, and upload images for certification.' },
    { title: 'Get Certified', desc: 'We generate blockchain certification and warranty terms.' },
    { title: 'Manage Orders', desc: 'Monitor views, orders, messages, and analytics.' },
  ]

  const features = [
    { icon: Shield, title: 'Blockchain Certification', description: 'Every device is certified with immutable blockchain records ensuring authenticity and condition.' },
    { icon: ShoppingCart, title: 'Instant Verification', description: 'Verify device authenticity and warranty status instantly through our blockchain system.' },
    { icon: Package, title: 'Global Marketplace', description: 'Access certified devices from sellers worldwide with secure shipping.' },
  ]

  const blockchainFeatures = [
    {
      icon: Database,
      title: 'Decentralized Storage',
      description: 'All device data is stored on the Internet Computer blockchain, ensuring immutability and transparency.',
      benefits: ['Immutable records', 'No single point of failure', 'Global accessibility', 'Tamper-proof data']
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'Military-grade encryption and blockchain verification protect every transaction and device record.',
      benefits: ['End-to-end encryption', 'Multi-factor authentication', 'Secure key management', 'Fraud prevention']
    },
    {
      icon: CheckCircle,
      title: 'Smart Contracts',
      description: 'Automated warranty and escrow contracts execute based on predefined conditions and verification.',
      benefits: ['Automated payments', 'Conditional releases', 'Dispute resolution', 'Transparent terms']
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Built on the Internet Computer, providing global reach with local performance and compliance.',
      benefits: ['Worldwide access', 'Low latency', 'Regulatory compliance', 'Scalable infrastructure']
    }
  ]

  const technicalSpecs = [
    {
      category: 'Blockchain Technology',
      specs: [
        'Internet Computer (ICP) blockchain',
        'Canister-based smart contracts',
        'Subnet architecture for scalability',
        'Cycles-based computation model'
      ]
    },
    {
      category: 'Security Features',
      specs: [
        '256-bit AES encryption',
        'Multi-signature wallets',
        'Hardware security modules',
        'Zero-knowledge proofs'
      ]
    },
    {
      category: 'Performance',
      specs: [
        'Sub-second transaction finality',
        'Unlimited scalability',
        '99.9% uptime guarantee',
        'Global CDN integration'
      ]
    },
    {
      category: 'Integration',
      specs: [
        'RESTful API endpoints',
        'WebSocket real-time updates',
        'Mobile SDK support',
        'Third-party integrations'
      ]
    }
  ]

  const deviceTypes = [
    { name: 'Smartphones', icon: Smartphone, count: '456 devices' },
    { name: 'Laptops', icon: Laptop, count: '234 devices' },
    { name: 'Tablets', icon: Tablet, count: '189 devices' },
    { name: 'Headphones', icon: Headphones, count: '156 devices' },
    { name: 'Cameras', icon: Camera, count: '98 devices' },
    { name: 'Monitors', icon: Monitor, count: '114 devices' }
  ]

  const tips = [
    { title: 'Always Check Certification', description: 'Look for the blockchain certification badge to ensure device authenticity.' },
    { title: 'Read Reviews Carefully', description: 'Check seller ratings and read detailed customer reviews before purchasing.' },
    { title: 'Contact Sellers', description: 'Ask sellers questions about device condition and history.' },
    { title: 'Verify Warranty', description: 'Confirm warranty terms and the coverage period.' }
  ]

  const faqs = [
    { 
      question: 'How does blockchain certification work?', 
      answer: 'Each device undergoes comprehensive inspection and testing. The results, including photos, specifications, and condition reports, are stored as immutable records on the Internet Computer blockchain. This creates a tamper-proof digital certificate that can be verified instantly.' 
    },
    { 
      question: 'What if I receive a damaged device?', 
      answer: 'All certified devices come with a comprehensive warranty. If you receive a damaged device, file a claim through our platform. Our smart contracts will automatically process your claim and initiate the return/refund process within 24 hours.' 
    },
    { 
      question: 'How do I verify a device certification?', 
      answer: 'Every device comes with a unique QR code. Simply scan it with your phone to instantly view the complete certification report, including inspection photos, test results, and warranty information stored on the blockchain.' 
    },
    { 
      question: 'Is my data secure on the blockchain?', 
      answer: 'Yes, absolutely. We use advanced encryption and the Internet Computer\'s secure infrastructure. Your personal data is encrypted and only device certification data is stored publicly on the blockchain for verification purposes.' 
    },
    { 
      question: 'What makes OriginTrace different from other marketplaces?', 
      answer: 'OriginTrace combines blockchain technology with comprehensive device certification. Unlike traditional marketplaces, we provide immutable proof of device condition, automated warranty enforcement, and instant verification capabilities.' 
    }
  ]

  return (
    <div className="min-h-screen bg-dark-950">
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-4">
            How to Use <span className="gradient-text">OriginTrace</span>
          </motion.h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">Complete guide to buying and selling certified devices with blockchain technology</p>
        </div>
      </section>

      {/* Buyer Guide */}
      <section className="py-16 bg-dark-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8"><span className="gradient-text">Buyer</span> Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {buyerSteps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="card">
                <div className="text-3xl font-bold text-primary-400 mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-dark-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Guide */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8"><span className="gradient-text">Seller</span> Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {sellerSteps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="card">
                <div className="text-3xl font-bold text-secondary-400 mb-3">{i + 1}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                <p className="text-dark-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Technology Section */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="gradient-text">Blockchain</span> Technology
          </h2>
          <p className="text-xl text-dark-300 text-center mb-12 max-w-3xl mx-auto">
            Built on the Internet Computer blockchain for maximum security, transparency, and scalability
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {blockchainFeatures.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-dark-300 mb-4">{feature.description}</p>
                <ul className="text-sm text-dark-400 space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications */}
          <div className="bg-dark-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSpecs.map((spec) => (
                <div key={spec.category} className="space-y-3">
                  <h4 className="text-lg font-semibold text-primary-400 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    {spec.category}
                  </h4>
                  <ul className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="text-sm text-dark-300 flex items-start">
                        <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Platform <span className="gradient-text">Features</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card text-center">
                <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
                <p className="text-dark-300">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Available <span className="gradient-text">Device Categories</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {deviceTypes.map((d) => (
              <div key={d.name} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <d.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{d.name}</h3>
                <p className="text-xs text-dark-400">{d.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Tips & <span className="gradient-text">Best Practices</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((t) => (
              <div key={t.title} className="card">
                <h3 className="text-lg font-semibold text-white mb-2">{t.title}</h3>
                <p className="text-dark-300">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }} 
                viewport={{ once: true }} 
                className="card"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-dark-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help */}
      <section className="py-20 bg-gradient-to-r from-primary-600/10 to-secondary-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need <span className="gradient-text">Help</span>?</h2>
          <p className="text-xl text-dark-300 mb-8">Our support team is here to help you with any questions or concerns</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <HelpCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Help Center</h3>
              <button className="btn-outline">Visit Help Center</button>
            </div>
            <div className="card text-center">
              <MessageCircle className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <button className="btn-outline">Start Chat</button>
            </div>
            <div className="card text-center">
              <Mail className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <button className="btn-outline">Send Email</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToUse
