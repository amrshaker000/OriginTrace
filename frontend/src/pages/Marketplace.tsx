import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones,
  Camera,
  Monitor,
  Star,
  Shield,
  Eye,
  Heart,
  ShoppingCart,
  ChevronDown,
  SlidersHorizontal,
  Grid3X3,
  List,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { devices as allDevices } from '../data/devices'

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceMax, setPriceMax] = useState(2000)
  const [conditionFilter, setConditionFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const navigate = useNavigate()

  const categories = [
    { id: 'all', name: 'All Devices', icon: Shield },
    { id: 'smartphones', name: 'Smartphones', icon: Smartphone },
    { id: 'laptops', name: 'Laptops', icon: Laptop },
    { id: 'tablets', name: 'Tablets', icon: Tablet },
    { id: 'headphones', name: 'Headphones', icon: Headphones },
    { id: 'cameras', name: 'Cameras', icon: Camera },
    { id: 'monitors', name: 'Monitors', icon: Monitor },
  ]

  const conditions = [
    { value: 'all', label: 'All Conditions' },
    { value: 'excellent', label: 'Excellent' },
    { value: 'very-good', label: 'Very Good' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' }
  ]

  const filteredDevices = allDevices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || device.category === selectedCategory
    const matchesPrice = device.price <= priceMax
    const matchesCondition = conditionFilter === 'all' || (device.condition.toString().toLowerCase() === conditionFilter)
    return matchesSearch && matchesCategory && matchesPrice && matchesCondition
  })

  const sortedDevices = [...filteredDevices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'newest':
      default:
        return (new Date(b.listedDate || '2024-01-01').getTime()) - (new Date(a.listedDate || '2024-01-01').getTime())
    }
  })

  const goToDetails = (id: number) => navigate(`/device/${id}`)

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
              <span className="gradient-text">Certified</span> Device Marketplace
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Browse thousands of blockchain-certified used electronics with guaranteed quality and warranty
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link to="/marketplace/buyer" className="btn-outline">Buyer Dashboard</Link>
              <Link to="/marketplace/seller" className="btn-outline">Seller Dashboard</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-dark-900/50 border-b border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort and View */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="btn-outline flex items-center space-x-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5 pointer-events-none" />
              </div>

              {/* View Mode */}
              <div className="flex items-center space-x-2 bg-dark-800/50 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-dark-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-dark-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 bg-dark-800/50 rounded-xl border border-dark-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-3">Category</label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-white font-medium mb-3">Max Price: ${priceMax}</label>
                  <input type="range" min={0} max={2000} value={priceMax} onChange={(e) => setPriceMax(parseInt(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-3">Condition</label>
                  <select
                    value={conditionFilter}
                    onChange={(e) => setConditionFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {conditions.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedDevices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No devices found</h3>
              <p className="text-dark-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {sortedDevices.map((device, index) => (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card group cursor-pointer hover:scale-105 transition-all duration-300 ${viewMode === 'list' ? 'flex flex-col lg:flex-row lg:items-center' : ''}`}
                  onClick={() => goToDetails(device.id)}
                >
                  <div className={`relative ${viewMode === 'list' ? 'lg:w-48 lg:flex-shrink-0' : 'mb-4'}`}>
                    <img
                      src={device.image}
                      alt={device.name}
                      className={`object-cover rounded-xl ${viewMode === 'list' ? 'w-full h-32 lg:h-48' : 'w-full h-48'}`}
                    />
                    <div className="absolute top-3 left-3">
                      {device.certified && (
                        <div className="flex items-center space-x-1 px-2 py-1 bg-primary-500/90 rounded-full text-xs text-white">
                          <Shield className="w-3 h-3" />
                          <span>Certified</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors duration-300" onClick={(e) => { e.stopPropagation(); goToDetails(device.id) }}>
                        <Eye className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-dark-800/80 rounded-full hover:bg-red-500/80 transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {device.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white">{device.rating}</span>
                      </div>
                      <span className="text-dark-400 text-sm">({device.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">${device.price}</span>
                        <span className="text-dark-400 line-through ml-2">${device.originalPrice}</span>
                      </div>
                      <div className="text-sm text-secondary-400 bg-secondary-500/10 px-2 py-1 rounded-full">
                        {typeof device.condition === 'string' ? device.condition.toString().replace('-', ' ') : device.condition}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-dark-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{device.location}</span>
                      </div>
                      {device.listedDate && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{device.listedDate}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4" />
                        <span>{device.warranty}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>Save ${device.originalPrice - device.price}</span>
                      </div>
                    </div>

                    <button className="w-full btn-primary flex items-center justify-center space-x-2" onClick={(e) => e.stopPropagation()}>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Marketplace
