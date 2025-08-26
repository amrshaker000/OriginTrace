import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Shield, 
  Truck,
  Package,
  Clock,
  CheckCircle,
  Search,
  Filter,
  ChevronDown,
  Plus,
  Minus,
  Trash2,
  Eye,
  ShoppingBag,
  CreditCard
} from 'lucide-react'

const Buyer = () => {
  const [activeTab, setActiveTab] = useState('browse')
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 899,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Sony WH-1000XM4',
      price: 249,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    }
  ])

  const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 899,
      originalPrice: 1199,
      condition: 'Excellent',
      rating: 4.8,
      reviews: 127,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      certified: true,
      warranty: '12 months',
      location: 'New York, NY',
      inCart: false,
      inWishlist: false
    },
    {
      id: 2,
      name: 'MacBook Pro M2',
      price: 1499,
      originalPrice: 1999,
      condition: 'Very Good',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      certified: true,
      warranty: '18 months',
      location: 'San Francisco, CA',
      inCart: false,
      inWishlist: true
    },
    {
      id: 3,
      name: 'iPad Air 5th Gen',
      price: 549,
      originalPrice: 699,
      condition: 'Excellent',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      certified: true,
      warranty: '12 months',
      location: 'Chicago, IL',
      inCart: false,
      inWishlist: false
    },
    {
      id: 4,
      name: 'Sony WH-1000XM4',
      price: 249,
      originalPrice: 349,
      condition: 'Good',
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      certified: true,
      warranty: '6 months',
      location: 'Los Angeles, CA',
      inCart: false,
      inWishlist: false
    }
  ]

  const orders = [
    {
      id: '#1234',
      product: 'iPhone 14 Pro',
      amount: 899,
      status: 'delivered',
      date: '2024-01-18',
      tracking: '1Z999AA1234567890'
    },
    {
      id: '#1235',
      product: 'MacBook Pro M2',
      amount: 1499,
      status: 'shipped',
      date: '2024-01-17',
      tracking: '1Z999AA1234567891'
    },
    {
      id: '#1236',
      product: 'Sony WH-1000XM4',
      amount: 249,
      status: 'processing',
      date: '2024-01-16',
      tracking: null
    }
  ]

  const tabs = [
    { id: 'browse', name: 'Browse Products', icon: ShoppingBag },
    { id: 'cart', name: 'Shopping Cart', icon: ShoppingCart },
    { id: 'orders', name: 'My Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart }
  ]

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-400 bg-green-500/10'
      case 'shipped': return 'text-blue-400 bg-blue-500/10'
      case 'processing': return 'text-yellow-400 bg-yellow-500/10'
      default: return 'text-gray-400 bg-gray-500/10'
    }
  }

  const getOrderStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return CheckCircle
      case 'shipped': return Truck
      case 'processing': return Clock
      default: return Package
    }
  }

  const addToCart = (productId: number) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === productId)
      if (existingItem) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        const product = products.find(p => p.id === productId)
        return [...prev, { ...product!, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Buyer</span> Dashboard
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Browse certified devices, manage your cart, and track your orders
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot Shortcut */}
      <section className="py-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-b border-primary-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-dark-800 to-dark-900 rounded-2xl p-6 border border-primary-500/30 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">AI Shopping Assistant</h2>
                  <p className="text-dark-300 max-w-lg">
                    Get instant help with device analysis, price comparisons, warranty information, and personalized recommendations. Our AI is here to guide you to the perfect certified device.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/chatbot"
                  className="btn-primary flex items-center space-x-2 px-6 py-3 text-lg font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Open AI Chat</span>
                </a>
                <button className="btn-outline flex items-center space-x-2 px-6 py-3 text-lg font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 border-b border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                  {tab.id === 'cart' && cartItems.length > 0 && (
                    <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'browse' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0">Certified Devices</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search devices..."
                      className="pl-10 pr-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button className="btn-outline flex items-center space-x-2">
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card group"
                  >
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="absolute top-3 left-3">
                        {product.certified && (
                          <div className="flex items-center space-x-1 px-2 py-1 bg-primary-500/90 rounded-full text-xs text-white">
                            <Shield className="w-3 h-3" />
                            <span>Certified</span>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <button className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors duration-300">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button className={`p-2 rounded-full transition-colors duration-300 ${
                          product.inWishlist 
                            ? 'bg-red-500/80' 
                            : 'bg-dark-800/80 hover:bg-red-500/80'
                        }`}>
                          <Heart className={`w-4 h-4 ${product.inWishlist ? 'fill-current' : ''} text-white`} />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white">{product.rating}</span>
                        </div>
                        <span className="text-dark-400 text-sm">({product.reviews} reviews)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-white">${product.price}</span>
                          <span className="text-dark-400 line-through ml-2">${product.originalPrice}</span>
                        </div>
                        <div className="text-sm text-secondary-400 bg-secondary-500/10 px-2 py-1 rounded-full">
                          {product.condition}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-dark-400">
                        <span>Warranty: {product.warranty}</span>
                        <span>{product.location}</span>
                      </div>

                      <button 
                        onClick={() => addToCart(product.id)}
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'cart' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Shopping Cart</h2>
              {cartItems.length === 0 ? (
                <div className="card text-center py-16">
                  <ShoppingCart className="w-16 h-16 text-dark-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-dark-400 mb-6">Start shopping for certified devices</p>
                  <button 
                    onClick={() => setActiveTab('browse')}
                    className="btn-primary"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="card">
                      <h3 className="text-lg font-semibold text-white mb-6">Cart Items</h3>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4 p-4 bg-dark-800/50 rounded-lg">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="text-white font-medium">{item.name}</h4>
                              <p className="text-dark-400 text-sm">${item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors duration-300"
                              >
                                <Minus className="w-4 h-4 text-white" />
                              </button>
                              <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors duration-300"
                              >
                                <Plus className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-medium">${item.price * item.quantity}</p>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-300 transition-colors duration-300"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="card">
                      <h3 className="text-lg font-semibold text-white mb-6">Order Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-dark-400">Subtotal</span>
                          <span className="text-white">${cartTotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Shipping</span>
                          <span className="text-white">Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-400">Tax</span>
                          <span className="text-white">${(cartTotal * 0.08).toFixed(2)}</span>
                        </div>
                        <div className="border-t border-dark-700 pt-4">
                          <div className="flex justify-between">
                            <span className="text-white font-semibold">Total</span>
                            <span className="text-white font-semibold">${(cartTotal * 1.08).toFixed(2)}</span>
                          </div>
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center space-x-2">
                          <CreditCard className="w-4 h-4" />
                          <span>Proceed to Checkout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">My Orders</h2>
              <div className="space-y-6">
                {orders.map((order, index) => {
                  const StatusIcon = getOrderStatusIcon(order.status)
                  return (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center">
                            <StatusIcon className="w-6 h-6 text-primary-400" />
                          </div>
                          <div>
                            <h3 className="text-white font-medium">{order.product}</h3>
                            <p className="text-dark-400 text-sm">Order {order.id}</p>
                            <p className="text-dark-400 text-sm">{order.date}</p>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-2">
                          <div className="text-right">
                            <p className="text-white font-medium">${order.amount}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </div>
                          {order.tracking && (
                            <p className="text-primary-400 text-sm font-mono">{order.tracking}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'wishlist' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Wishlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.filter(p => p.inWishlist).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card group"
                  >
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-red-500/80 rounded-full hover:bg-red-600/80 transition-colors duration-300">
                          <Heart className="w-4 h-4 fill-current text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        <span className="text-dark-400 line-through">${product.originalPrice}</span>
                      </div>
                      <button className="w-full btn-primary">Add to Cart</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Floating Chatbot Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="/chatbot"
          className="group relative block"
        >
          {/* Main Button */}
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-primary-500/25">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-dark-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span>AI Shopping Assistant</span>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-900"></div>
          </div>
        </a>
      </motion.div>
    </div>
  )
}

export default Buyer
