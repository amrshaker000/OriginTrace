import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Bot, 
  Smartphone,
  Laptop,
  Shield,
  HelpCircle,
  DollarSign,
  CheckCircle,
  ArrowLeft,
  Settings,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Lock
} from 'lucide-react'
import { Link } from 'react-router-dom'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "🎉 **Welcome to OriginTrace AI Assistant!**\n\nI'm your dedicated AI shopping companion, here to help you find the perfect certified device. I can provide detailed analysis, compare products, explain our blockchain verification system, and guide you through every step of your purchase.\n\n**What I can help you with:**\n• 📱 Smartphone analysis and recommendations\n• 💻 Laptop performance comparisons\n• 🛡️ Warranty and security information\n• 💰 Price optimization and deals\n• 🔍 Quality assessment and certification details\n• 🚚 Shipping and return policies\n• 🎮 Gaming device recommendations\n• 💼 Business and productivity solutions\n\nWhat would you like to explore today?",
      timestamp: new Date(),
      suggestions: ['Analyze smartphones', 'Compare laptops', 'Gaming analysis', 'Business devices']
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Enhanced AI response simulation with comprehensive buyer-specific knowledge
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 600))
    
    const lowerMessage = userMessage.toLowerCase()
    let response = ""
    let suggestions: string[] = []

    if (lowerMessage.includes('phone') || lowerMessage.includes('smartphone')) {
      response = "📱 **Certified Smartphones Available:**\n\nWe have verified smartphones from premium brands:\n\n• **Apple iPhone** (12-15 series)\n• **Samsung Galaxy** (S21-S24 series)\n• **Google Pixel** (6-8 series)\n• **OnePlus** (9-12 series)\n\n**Each device includes:**\n✅ Detailed technical report\n✅ Battery health assessment (85%+)\n✅ Screen quality analysis\n✅ 30-day return policy\n✅ Extended warranty options\n✅ Blockchain verification\n\nWould you like me to show you our latest smartphone listings or help you compare specific models?"
      suggestions = ['Show iPhone deals', 'Samsung options', 'Compare prices', 'Check warranties']
    } else if (lowerMessage.includes('laptop') || lowerMessage.includes('computer')) {
      response = "💻 **Certified Laptops & Computers:**\n\nOur laptops undergo comprehensive testing:\n\n**Performance Testing:**\n• CPU/GPU benchmarks\n• RAM and storage verification\n• Battery health assessment\n• Thermal performance\n\n**Quality Assurance:**\n• Hardware integrity checks\n• Software functionality\n• Cosmetic condition grading\n• Port functionality\n\n**Popular Categories:**\n• Gaming laptops (RTX 3060+) \n• Business laptops (ThinkPad, MacBook)\n• Student laptops (Budget-friendly)\n• Creative workstations\n\nWhat's your primary use case?"
      suggestions = ['Gaming laptops', 'Business laptops', 'Student laptops', 'Price comparison']
    } else if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
      response = "🛡️ **OriginTrace Warranty System:**\n\nEvery certified device comes with our blockchain-backed warranty:\n\n**Standard Coverage:**\n✅ 30-day return policy\n✅ 90-day technical support\n✅ Hardware defect coverage\n✅ Battery performance guarantee\n\n**Extended Options:**\n• 6-month extended warranty (+15%)\n• 12-month premium warranty (+25%)\n• 24-month comprehensive (+40%)\n\n**Blockchain Benefits:**\n🔗 Immutable warranty records\n🔗 Transparent terms\n🔗 Instant verification\n🔗 No paperwork needed\n\nWould you like to see our warranty options?"
      suggestions = ['Warranty details', 'Return policy', 'Support info', 'Blockchain verification']
    } else if (lowerMessage.includes('certified') || lowerMessage.includes('certification')) {
      response = "🔍 **OriginTrace Certification Process:**\n\nOur rigorous certification ensures quality:\n\n**Hardware Inspection:**\n• Physical examination of all components\n• Serial number verification\n• Authenticity checks\n• Cosmetic condition assessment\n\n**Performance Testing:**\n• Benchmark tests (3DMark, Cinebench)\n• Stress testing (30+ minutes)\n• Battery capacity verification\n• Temperature monitoring\n\n**Quality Grading:**\n⭐ **Excellent (95%+)**: Like new condition\n⭐ **Very Good (85-94%)**: Minor wear\n⭐ **Good (75-84%)**: Some wear, fully functional\n⭐ **Fair (65-74%)**: More wear, great value\n\n**Blockchain Verification:**\n🔗 Immutable digital certificate\n🔗 Transparent testing records\n🔗 Instant verification\n🔗 Tamper-proof documentation"
      suggestions = ['View certificates', 'Quality grades', 'Testing process', 'Verification guide']
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
      response = "💰 **Transparent Pricing Structure:**\n\nOur pricing is competitive and fair:\n\n**Quality-Based Pricing:**\n• **Excellent (95%+)**: 20-30% off new price\n• **Very Good (85-94%)**: 30-40% off new price\n• **Good (75-84%)**: 40-50% off new price\n• **Fair (65-74%)**: 50-60% off new price\n\n**What's Included:**\n✅ Free shipping worldwide\n✅ 30-day returns\n✅ Technical support\n✅ Warranty coverage\n✅ Blockchain verification\n✅ No hidden fees\n\n**Budget Ranges:**\n• **Budget ($100-500)**: Older models, good condition\n• **Mid-range ($500-1000)**: Recent models, very good condition\n• **Premium ($1000+)**: Latest models, excellent condition\n\nWhat's your budget range?"
      suggestions = ['Under $500', '$500-$1000', '$1000+', 'Best value deals']
    } else if (lowerMessage.includes('help') || lowerMessage.includes('guide')) {
      response = "🤝 **How I Can Help You:**\n\nI'm your dedicated AI shopping assistant:\n\n**Shopping Assistance:**\n🛒 Device recommendations\n🛒 Price comparisons\n🛒 Quality assessments\n🛒 Feature comparisons\n\n**Information & Education:**\n📋 Certification details\n📋 Warranty explanations\n📋 Return policies\n📋 Blockchain technology\n\n**Safety & Security:**\n🔒 Buying guides\n🔒 Fraud prevention tips\n🔒 Secure transaction info\n🔒 Verification processes\n\n**Support:**\n💬 Real-time assistance\n💬 Technical questions\n💬 Order tracking\n💬 After-sales support\n\nWhat specific help do you need today?"
      suggestions = ['Device recommendations', 'Safety tips', 'Payment options', 'Shipping info']
    } else if (lowerMessage.includes('quality') || lowerMessage.includes('condition')) {
      response = "⭐ **Quality Assessment System:**\n\nWe use a comprehensive grading system:\n\n**Excellent (95%+):**\n• Like new condition\n• Minimal to no wear\n• All accessories included\n• Perfect functionality\n• Premium pricing\n\n**Very Good (85-94%):**\n• Minor cosmetic issues\n• Light wear on edges\n• All functions working\n• Great value\n\n**Good (75-84%):**\n• Some visible wear\n• Fully functional\n• May have minor scratches\n• Excellent value\n\n**Fair (65-74%):**\n• More noticeable wear\n• Still fully functional\n• Best budget option\n• Great for secondary use\n\n**Each grade includes:**\n✅ Detailed condition report\n✅ High-quality photos\n✅ Performance benchmarks\n✅ Warranty coverage\n✅ Return guarantee"
      suggestions = ['View condition reports', 'See photos', 'Compare grades', 'Warranty info']
    } else if (lowerMessage.includes('safe') || lowerMessage.includes('secure') || lowerMessage.includes('trust')) {
      response = "🔐 **Your Security is Our Priority:**\n\nOriginTrace uses advanced security measures:\n\n**Blockchain Verification:**\n🔗 All devices verified on-chain\n🔗 Immutable transaction records\n🔗 Transparent ownership history\n🔗 Instant authenticity checks\n\n**Seller Verification:**\n✅ Vetted and verified sellers only\n✅ Background checks\n✅ Performance ratings\n✅ Customer feedback\n\n**Transaction Protection:**\n🛡️ Escrow protection\n🛡️ Funds held until satisfaction\n🛡️ Secure payment processing\n🛡️ Dispute resolution\n\n**Device Authentication:**\n📱 Serial number verification\n📱 IMEI checks (phones)\n📱 Hardware fingerprinting\n📱 Software integrity\n\n**Our Track Record:**\n🎯 99.9% customer satisfaction\n🎯 Zero fraudulent transactions\n🎯 24/7 support available\n🎯 Money-back guarantee"
      suggestions = ['Security features', 'Seller verification', 'Escrow protection', 'Fraud prevention']
    } else if (lowerMessage.includes('blockchain') || lowerMessage.includes('verification')) {
      response = "🔗 **Blockchain Technology at OriginTrace:**\n\nWe use blockchain for complete transparency:\n\n**What Gets Stored on Blockchain:**\n• Device certification records\n• Ownership history\n• Warranty information\n• Transaction details\n• Quality assessments\n• Testing results\n\n**Benefits for Buyers:**\n✅ **Transparency**: See complete device history\n✅ **Security**: Immutable records can't be altered\n✅ **Verification**: Instant authenticity checks\n✅ **Trust**: No hidden information\n✅ **Efficiency**: No paperwork needed\n\n**How It Works:**\n1. Device undergoes certification\n2. All data stored on blockchain\n3. Unique digital certificate created\n4. Buyer can verify anytime\n5. Records are permanent and secure\n\n**Verification Process:**\n• Scan QR code on device\n• View complete history\n• Check warranty status\n• Verify authenticity\n• Access support records"
      suggestions = ['How to verify', 'Blockchain benefits', 'Digital certificates', 'Security features']
    } else if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
      response = "🔄 **Return & Refund Policy:**\n\nWe make returns simple and hassle-free:\n\n**30-Day Return Policy:**\n✅ No questions asked returns\n✅ Free return shipping\n✅ Full refund guarantee\n✅ No restocking fees\n\n**Return Reasons:**\n• Changed your mind\n• Found better deal\n• Device not as described\n• Technical issues\n• Size/color preferences\n\n**Return Process:**\n1. Contact support within 30 days\n2. Get return authorization\n3. Ship device back (free)\n4. Receive refund within 3-5 days\n5. No questions asked\n\n**Refund Options:**\n• Full refund to original payment\n• Store credit (instant)\n• Exchange for different device\n• Partial refund for minor issues\n\n**What's Covered:**\n✅ Return shipping costs\n✅ Original shipping costs\n✅ Processing fees\n✅ Full purchase price"
      suggestions = ['Start return', 'Refund timeline', 'Return shipping', 'Exchange options']
    } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
      response = "🚚 **Shipping & Delivery Information:**\n\nWe offer fast, secure shipping worldwide:\n\n**Shipping Options:**\n• **Standard (3-5 days)**: Free\n• **Express (1-2 days)**: +$15\n• **Overnight**: +$25\n• **International**: Varies by location\n\n**What's Included:**\n✅ Free standard shipping\n✅ Package insurance\n✅ Tracking number\n✅ Signature confirmation\n✅ Secure packaging\n\n**Delivery Process:**\n1. Order placed and verified\n2. Device quality-checked\n3. Securely packaged\n4. Shipped with tracking\n5. Delivered to your door\n\n**International Shipping:**\n🌍 Available to 50+ countries\n🌍 Customs documentation included\n🌍 Import duties calculated\n🌍 Local delivery partners\n\n**Package Protection:**\n🛡️ Insurance up to $2000\n🛡️ Fragile item handling\n🛡️ Climate-controlled shipping\n🛡️ Real-time tracking"
      suggestions = ['Track order', 'Shipping rates', 'International info', 'Delivery times']
    } else if (lowerMessage.includes('analyze') || lowerMessage.includes('analysis') || lowerMessage.includes('compare') || lowerMessage.includes('recommend')) {
      response = "🔍 **AI Product Analysis & Recommendations:**\n\nI can provide detailed analysis and personalized recommendations:\n\n**Device Analysis:**\n• **Performance Comparison**: CPU, GPU, RAM benchmarks\n• **Value Assessment**: Price vs. performance ratio\n• **Condition Analysis**: Detailed wear and functionality reports\n• **Battery Health**: Capacity and longevity predictions\n• **Market Trends**: Price history and future predictions\n\n**Smart Recommendations:**\n• **Usage-Based**: Tailored to your specific needs\n• **Budget Optimization**: Best value within your price range\n• **Future-Proofing**: Devices that will last longer\n• **Compatibility**: Works with your existing setup\n\n**Advanced Features:**\n• **AI-Powered Matching**: Machine learning recommendations\n• **Risk Assessment**: Potential issues and reliability scores\n• **Total Cost Analysis**: Including warranties and accessories\n• **Environmental Impact**: Sustainability ratings\n\nWhat type of device would you like me to analyze for you?"
      suggestions = ['Analyze smartphones', 'Compare laptops', 'Best value devices', 'Recommend for gaming']
    } else if (lowerMessage.includes('gaming') || lowerMessage.includes('game') || lowerMessage.includes('fps')) {
      response = "🎮 **Gaming Device Analysis:**\n\nI'll help you find the perfect gaming setup:\n\n**Gaming Laptops:**\n• **RTX 4070/4080**: Latest AAA games at high settings\n• **RTX 3060/3070**: Great for 1080p gaming\n• **GTX 1660/RTX 3050**: Budget gaming options\n• **CPU Requirements**: Intel i5/i7 or AMD Ryzen 5/7\n\n**Performance Analysis:**\n• **FPS Predictions**: Expected performance in popular games\n• **Thermal Management**: Cooling system effectiveness\n• **Display Quality**: Refresh rate and color accuracy\n• **Upgrade Potential**: Future expansion possibilities\n\n**Gaming Accessories:**\n• **Mechanical Keyboards**: Tactile gaming experience\n• **Gaming Mice**: High DPI and precision\n• **Headsets**: Immersive audio and communication\n• **Monitors**: High refresh rate displays\n\n**Popular Gaming Categories:**\n• **Competitive Gaming**: High FPS, low latency\n• **Content Creation**: Streaming and video editing\n• **VR Gaming**: VR-ready specifications\n• **Portable Gaming**: Gaming on the go\n\nWhat type of gaming are you interested in?"
      suggestions = ['RTX gaming laptops', 'Budget gaming setup', 'VR ready devices', 'Competitive gaming gear']
    } else if (lowerMessage.includes('business') || lowerMessage.includes('work') || lowerMessage.includes('productivity')) {
      response = "💼 **Business & Productivity Analysis:**\n\nOptimize your work setup with the right devices:\n\n**Business Laptops:**\n• **ThinkPad Series**: Legendary reliability and keyboards\n• **MacBook Pro/Air**: Premium build and ecosystem\n• **Dell XPS**: Performance and portability balance\n• **Surface Laptop**: Windows integration and design\n\n**Productivity Features:**\n• **Battery Life**: 8+ hours for all-day work\n• **Display Quality**: Eye-friendly screens for long sessions\n• **Connectivity**: Multiple ports and wireless options\n• **Security**: TPM chips and biometric authentication\n\n**Work-Specific Analysis:**\n• **Video Conferencing**: Camera and microphone quality\n• **Document Processing**: Fast SSD and sufficient RAM\n• **Multitasking**: CPU performance and memory management\n• **Portability**: Weight and size considerations\n\n**Professional Software:**\n• **Office Suite**: Microsoft Office, Google Workspace\n• **Design Software**: Adobe Creative Suite compatibility\n• **Development Tools**: Programming and coding environments\n• **Collaboration**: Team communication and file sharing\n\nWhat's your primary work focus?"
      suggestions = ['Business laptops', 'Remote work setup', 'Creative workstations', 'Budget office devices']
    } else if (lowerMessage.includes('compare') || lowerMessage.includes('vs') || lowerMessage.includes('difference')) {
      response = "⚖️ **Device Comparison Analysis:**\n\nI can help you compare devices across multiple dimensions:\n\n**Performance Metrics:**\n• **CPU Performance**: Benchmark scores and real-world usage\n• **GPU Capabilities**: Graphics performance and gaming potential\n• **Memory & Storage**: Speed, capacity, and upgrade options\n• **Battery Life**: Actual usage time and charging speed\n\n**Quality Assessment:**\n• **Build Quality**: Materials, durability, and design\n• **Display**: Resolution, color accuracy, and refresh rates\n• **Audio**: Speaker quality and microphone performance\n• **Connectivity**: Ports, wireless capabilities, and compatibility\n\n**Value Analysis:**\n• **Price vs. Performance**: Cost-effectiveness ratio\n• **Long-term Value**: Durability and future-proofing\n• **Total Cost**: Including accessories and warranties\n• **Resale Value**: Market demand and depreciation\n\n**Use Case Matching:**\n• **Gaming**: FPS, graphics quality, and thermal performance\n• **Business**: Productivity, security, and reliability\n• **Creative**: Color accuracy, processing power, and storage\n• **Student**: Portability, battery life, and affordability\n\nWhat devices would you like me to compare?"
      suggestions = ['iPhone vs Samsung', 'MacBook vs ThinkPad', 'Gaming laptop comparison', 'Budget vs Premium']
    } else if (lowerMessage.includes('deal') || lowerMessage.includes('discount') || lowerMessage.includes('sale') || lowerMessage.includes('offer')) {
      response = "🎯 **Best Deals & Offers:**\n\nI'll help you find the best value for your money:\n\n**Current Promotions:**\n• **Flash Sales**: Limited-time deep discounts\n• **Bundle Deals**: Device + accessories + warranty\n• **Student Discounts**: Educational pricing available\n• **Trade-in Offers**: Get credit for your old device\n\n**Value Categories:**\n• **Budget Champions**: Best performance under $500\n• **Mid-range Stars**: Great value $500-$1000\n• **Premium Picks**: Top-tier devices with discounts\n• **Hidden Gems**: Underrated devices with great specs\n\n**Deal Factors:**\n• **Seasonal Sales**: Black Friday, Cyber Monday, etc.\n• **New Model Releases**: Previous generation discounts\n• **Inventory Clearance**: Limited stock special pricing\n• **Loyalty Rewards**: Repeat customer benefits\n\n**Smart Shopping Tips:**\n• **Price History**: Track price trends and patterns\n• **Competitor Analysis**: Compare across different sellers\n• **Timing**: Best times to buy specific categories\n• **Negotiation**: Tips for getting better deals\n\nWhat type of deal are you looking for?"
      suggestions = ['Smartphone deals', 'Laptop discounts', 'Bundle offers', 'Student pricing']
    } else {
      response = "🤖 **AI Shopping Assistant at Your Service!**\n\nI'm here to help you with every aspect of your OriginTrace experience:\n\n**What I Can Do:**\n• Find the perfect certified device\n• Explain our quality standards\n• Compare prices and features\n• Guide you through the marketplace\n• Help with warranties and returns\n• Answer technical questions\n• Provide security information\n• Assist with blockchain verification\n\n**Popular Topics:**\n📱 Smartphones and tablets\n💻 Laptops and computers\n🎧 Audio devices\n📷 Cameras and accessories\n🛡️ Warranty information\n🔐 Security features\n💰 Pricing and deals\n🚚 Shipping and delivery\n\nCould you be more specific about what you're looking for? I'm here to make your shopping experience smooth, secure, and enjoyable!"
      suggestions = ['Browse devices', 'Quality standards', 'Safety features', 'Warranty info']
    }

    const botMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: response,
      timestamp: new Date(),
      suggestions
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setShowQuickActions(false)
    
    // Generate AI response
    await generateAIResponse(userMessage.content)
  }

  const quickActions = [
    { text: 'Analyze smartphones', icon: Smartphone, color: 'from-blue-500 to-blue-600' },
    { text: 'Compare laptops', icon: Laptop, color: 'from-green-500 to-green-600' },
    { text: 'Gaming analysis', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { text: 'Business devices', icon: HelpCircle, color: 'from-orange-500 to-orange-600' },
    { text: 'Price comparison', icon: DollarSign, color: 'from-emerald-500 to-emerald-600' },
    { text: 'Best value devices', icon: CheckCircle, color: 'from-indigo-500 to-indigo-600' }
  ]

  const handleQuickAction = (action: string) => {
    setInputValue(action)
    setShowQuickActions(false)
    inputRef.current?.focus()
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <div className="bg-dark-900 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-dark-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <div className="w-px h-6 bg-dark-700"></div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">AI Shopping Assistant</h1>
                  <p className="text-sm text-dark-400">Powered by OriginTrace</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-dark-400">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{messages.length} messages</span>
              </div>
              <button className="p-2 rounded-lg hover:bg-dark-800 transition-colors">
                <Settings className="w-5 h-5 text-dark-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Showcase */}
      <section className="py-8 bg-gradient-to-r from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Shopping Intelligence</h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              Experience the future of smart shopping with our advanced AI assistant. Get instant analysis, 
              personalized recommendations, and expert guidance for every purchase decision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Product Analysis</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Get detailed performance benchmarks, quality assessments, and value analysis for any device. 
                Our AI compares specifications, prices, and real-world performance.
              </p>
            </motion.div>

            {/* Personalized Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Recommendations</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Receive personalized device suggestions based on your usage patterns, budget, and preferences. 
                Our machine learning algorithms find the perfect match for your needs.
              </p>
            </motion.div>

            {/* Price Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Price Optimization</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Find the best deals and discounts with our price tracking and comparison tools. 
                Get alerts for price drops and seasonal sales opportunities.
              </p>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Access detailed condition reports, certification details, and blockchain verification. 
                Every device is thoroughly tested and certified for your peace of mind.
              </p>
            </motion.div>

            {/* Expert Guidance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Get instant answers to technical questions, warranty information, and buying advice. 
                Our AI provides expert-level knowledge 24/7.
              </p>
            </motion.div>

            {/* Blockchain Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Blockchain Security</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Verify device authenticity and ownership history through our blockchain system. 
                Transparent, immutable records ensure complete trust and security.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Access - Common AI Queries */}
      <section className="py-6 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-3">Quick Start - Popular Queries</h3>
            <p className="text-dark-400 text-sm">
              Click any query below to get instant AI assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { text: 'Find best gaming laptop', icon: '🎮', color: 'from-purple-500 to-purple-600' },
              { text: 'Compare iPhone vs Samsung', icon: '📱', color: 'from-blue-500 to-blue-600' },
              { text: 'Best laptop for work', icon: '💼', color: 'from-green-500 to-green-600' },
              { text: 'Check warranty info', icon: '🛡️', color: 'from-yellow-500 to-yellow-600' },
              { text: 'Find budget devices', icon: '💰', color: 'from-emerald-500 to-emerald-600' },
              { text: 'Device certification', icon: '✅', color: 'from-indigo-500 to-indigo-600' },
              { text: 'Shipping & returns', icon: '🚚', color: 'from-orange-500 to-orange-600' },
              { text: 'Security features', icon: '🔐', color: 'from-red-500 to-red-600' }
            ].map((query, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleQuickAction(query.text)}
                className={`bg-gradient-to-r ${query.color} text-white p-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 flex flex-col items-center space-y-2`}
              >
                <span className="text-lg">{query.icon}</span>
                <span className="text-xs leading-tight">{query.text}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-dark-900 rounded-2xl shadow-2xl border border-dark-700 h-[600px] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                      : 'bg-dark-800 text-white border border-dark-700'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm leading-relaxed">{message.content}</div>
                  <p className="text-xs opacity-70 mt-3">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  
                  {/* Suggestions for bot messages */}
                  {message.type === 'bot' && message.suggestions && (
                    <div className="mt-4 space-y-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickAction(suggestion)}
                          className="block w-full text-left px-3 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg text-xs transition-colors duration-200 text-white"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-dark-800 text-white p-4 rounded-2xl border border-dark-700">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {showQuickActions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 border-t border-dark-700"
            >
              <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.text}
                      onClick={() => handleQuickAction(action.text)}
                      className={`flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r ${action.color} text-white hover:opacity-90 transition-all duration-200 text-sm`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{action.text}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-dark-700">
            <div className="flex space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about devices, warranties, or anything else..."
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200 flex items-center space-x-2"
              >
                <Send className="w-4 h-4 text-white" />
                <span className="text-white font-medium">Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
