import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  Search,
  BarChart3,
  PieChart
} from 'lucide-react'

const Seller = () => {
  const [activeTab, setActiveTab] = useState('products')
  const [searchTerm, setSearchTerm] = useState('')

  const stats = [
    { label: 'Total Sales', value: '$24,580', change: '+12.5%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { label: 'Products Listed', value: '47', change: '+3', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { label: 'Total Orders', value: '156', change: '+8.2%', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { label: 'Active Buyers', value: '89', change: '+5.1%', icon: Users, color: 'from-orange-500 to-red-500' }
  ]

  const products = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 899,
      status: 'active',
      views: 234,
      orders: 12,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      listedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'MacBook Pro M2',
      price: 1499,
      status: 'sold',
      views: 189,
      orders: 1,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      listedDate: '2024-01-10'
    },
    {
      id: 3,
      name: 'iPad Air 5th Gen',
      price: 549,
      status: 'pending',
      views: 67,
      orders: 0,
      rating: 0,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
      listedDate: '2024-01-20'
    }
  ]

  const recentOrders = [
    { id: '#1234', product: 'iPhone 14 Pro', buyer: 'John Doe', amount: 899, status: 'completed', date: '2024-01-18' },
    { id: '#1235', product: 'MacBook Pro M2', buyer: 'Jane Smith', amount: 1499, status: 'shipped', date: '2024-01-17' },
    { id: '#1236', product: 'Sony WH-1000XM4', buyer: 'Mike Johnson', amount: 249, status: 'pending', date: '2024-01-16' }
  ]

  const tabs = [
    { id: 'products', name: 'My Products', icon: Package },
    { id: 'orders', name: 'Orders', icon: TrendingUp },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'settings', name: 'Settings', icon: Settings }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/10 border-green-500/20'
      case 'sold': return 'text-blue-400 bg-blue-500/10 border-blue-500/20'
      case 'pending': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20'
    }
  }

  const getOrderStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/10'
      case 'shipped': return 'text-blue-400 bg-blue-500/10'
      case 'pending': return 'text-yellow-400 bg-yellow-500/10'
      default: return 'text-gray-400 bg-gray-500/10'
    }
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Seller</span> Dashboard
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Manage your products, track sales, and grow your business with OriginTrace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-dark-400 text-sm mb-2">{stat.label}</div>
                  <div className="text-green-400 text-sm font-medium">{stat.change}</div>
                </motion.div>
              )
            })}
          </div>
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
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'products' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 lg:mb-0">My Products</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
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
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors duration-300">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-dark-800/80 rounded-full hover:bg-blue-500/80 transition-colors duration-300">
                          <Edit className="w-4 h-4 text-white" />
                        </button>
                        <button className="p-2 bg-dark-800/80 rounded-full hover:bg-red-500/80 transition-colors duration-300">
                          <Trash2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">${product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white">{product.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-dark-400">
                        <span>{product.views} views</span>
                        <span>{product.orders} orders</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-dark-400">
                        <span>Listed: {product.listedDate}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Recent Orders</h2>
              <div className="card">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-700">
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Order ID</th>
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Product</th>
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Buyer</th>
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Amount</th>
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Status</th>
                        <th className="text-left py-3 px-4 text-dark-400 font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b border-dark-700/50 last:border-b-0">
                          <td className="py-3 px-4 text-white font-mono">{order.id}</td>
                          <td className="py-3 px-4 text-white">{order.product}</td>
                          <td className="py-3 px-4 text-white">{order.buyer}</td>
                          <td className="py-3 px-4 text-white">${order.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getOrderStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-dark-400">{order.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Analytics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-4">Sales Overview</h3>
                  <div className="h-64 bg-dark-800/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                      <p className="text-dark-400">Sales chart will be displayed here</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-4">Product Performance</h3>
                  <div className="h-64 bg-dark-800/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                      <p className="text-dark-400">Product performance chart will be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">Account Settings</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Store Name</label>
                      <input
                        type="text"
                        defaultValue="TechGear Pro"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="seller@techgear.com"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="btn-primary w-full">Update Profile</button>
                  </div>
                </div>
                <div className="card">
                  <h3 className="text-lg font-semibold text-white mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">New Order Notifications</span>
                      <button className="w-12 h-6 bg-primary-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Sales Reports</span>
                      <button className="w-12 h-6 bg-primary-500 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Product Updates</span>
                      <button className="w-12 h-6 bg-dark-600 rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Seller
