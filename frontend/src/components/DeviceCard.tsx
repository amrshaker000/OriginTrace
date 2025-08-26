import { motion } from 'framer-motion'
import { 
  Star, 
  Shield, 
  Eye, 
  Heart, 
  ShoppingCart,
  MapPin,
  Clock,
  DollarSign
} from 'lucide-react'

interface DeviceCardProps {
  device: {
    id: number
    name: string
    price: number
    originalPrice: number
    condition: string
    rating: number
    reviews: number
    image: string
    certified: boolean
    warranty: string
    location: string
    seller?: string
    listedDate?: string
  }
  onAddToCart?: () => void
  onViewDetails?: () => void
  onToggleWishlist?: () => void
  inWishlist?: boolean
  className?: string
}

const DeviceCard = ({ 
  device, 
  onAddToCart, 
  onViewDetails, 
  onToggleWishlist, 
  inWishlist = false,
  className = ""
}: DeviceCardProps) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-400 bg-green-500/10'
      case 'very-good': return 'text-blue-400 bg-blue-500/10'
      case 'good': return 'text-yellow-400 bg-yellow-500/10'
      case 'fair': return 'text-orange-400 bg-orange-500/10'
      default: return 'text-gray-400 bg-gray-500/10'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`card group ${className}`}
    >
      <div className="relative mb-4">
        <img
          src={device.image}
          alt={device.name}
          className="w-full h-48 object-cover rounded-xl"
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
          <button 
            onClick={onViewDetails}
            className="p-2 bg-dark-800/80 rounded-full hover:bg-primary-500/80 transition-colors duration-300"
          >
            <Eye className="w-4 h-4 text-white" />
          </button>
          <button 
            onClick={onToggleWishlist}
            className={`p-2 rounded-full transition-colors duration-300 ${
              inWishlist 
                ? 'bg-red-500/80' 
                : 'bg-dark-800/80 hover:bg-red-500/80'
            }`}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-current' : ''} text-white`} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
            {device.name}
          </h3>
          {device.seller && (
            <p className="text-dark-400 text-sm">by {device.seller}</p>
          )}
        </div>
        
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
          <div className={`text-sm px-2 py-1 rounded-full font-medium ${getConditionColor(device.condition)}`}>
            {device.condition.replace('-', ' ')}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-dark-400" />
            <span className="text-dark-400">{device.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-dark-400" />
            <span className="text-dark-400">{device.warranty}</span>
          </div>
          {device.listedDate && (
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-dark-400" />
              <span className="text-dark-400">{device.listedDate}</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-dark-400" />
            <span className="text-dark-400">Save ${device.originalPrice - device.price}</span>
          </div>
        </div>

        <button 
          onClick={onAddToCart}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  )
}

export default DeviceCard
