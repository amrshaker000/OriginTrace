import { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Star, ShoppingCart, ArrowLeft } from 'lucide-react'
import { getDeviceById } from '../data/devices'

const DeviceDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const deviceId = Number(id)
  const device = useMemo(() => getDeviceById(deviceId), [deviceId])

  if (!device) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Device not found</h1>
          <button onClick={() => navigate(-1)} className="btn-outline inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="btn-outline mb-6 inline-flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <img src={device.image} alt={device.name} className="w-full h-[420px] object-cover rounded-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-3xl font-bold mb-2">{device.name}</h1>
              <div className="flex items-center space-x-3 mb-4">
                {device.certified && (
                  <span className="inline-flex items-center space-x-1 px-2 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Certified</span>
                  </span>
                )}
                <span className="inline-flex items-center space-x-1 text-yellow-400 text-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{device.rating} ({device.reviews} reviews)</span>
                </span>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold">${device.price}</span>
                <span className="text-dark-400 line-through">${device.originalPrice}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="card">
                  <div className="text-dark-400 text-sm">Warranty</div>
                  <div className="text-white font-medium">{device.warranty}</div>
                </div>
                <div className="card">
                  <div className="text-dark-400 text-sm">Location</div>
                  <div className="text-white font-medium">{device.location}</div>
                </div>
              </div>
              {device.specs && (
                <div className="card mb-6">
                  <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(device.specs).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-dark-400 capitalize">{key.replace('-', ' ')}</span>
                        <span className="text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <button className="btn-primary inline-flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeviceDetails
