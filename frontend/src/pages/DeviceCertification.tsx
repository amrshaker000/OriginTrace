import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  FileText, 
  Shield, 
  CheckCircle, 

  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Camera,
  Monitor,
  ArrowRight,
  Hash,
  Link as LinkIcon
} from 'lucide-react'

const DeviceCertification = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    deviceType: '',
    brand: '',
    model: '',
    serialNumber: '',
    condition: '',
    description: '',
    images: [] as File[],
    price: '',
    warranty: '12'
  })

  const deviceTypes = [
    { id: 'smartphone', name: 'Smartphone', icon: Smartphone },
    { id: 'laptop', name: 'Laptop', icon: Laptop },
    { id: 'tablet', name: 'Tablet', icon: Tablet },
    { id: 'headphones', name: 'Headphones', icon: Headphones },
    { id: 'camera', name: 'Camera', icon: Camera },
    { id: 'monitor', name: 'Monitor', icon: Monitor },
  ]

  const conditions = [
    { value: 'excellent', label: 'Excellent', description: 'Like new, minimal wear' },
    { value: 'very-good', label: 'Very Good', description: 'Minor cosmetic wear' },
    { value: 'good', label: 'Good', description: 'Some wear, fully functional' },
    { value: 'fair', label: 'Fair', description: 'Visible wear, works well' },
  ]

  const handleInputChange = (field: string, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const generateBlockchainHash = () => {
    // Simulate blockchain hash generation
    return 'a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456'
  }

  const steps = [
    { number: 1, title: 'Device Information', description: 'Enter device details' },
    { number: 2, title: 'Technical Inspection', description: 'Generate blockchain certificate' },
    { number: 3, title: 'Smart Contract', description: 'Create digital warranty' },
  ]

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
              <span className="gradient-text">Device</span> Certification
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Certify your used electronics with blockchain technology for secure, transparent transactions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-dark-900/50 border-b border-dark-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((stepItem, index) => (
              <div key={stepItem.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step >= stepItem.number 
                    ? 'bg-primary-500 border-primary-500 text-white' 
                    : 'border-dark-600 text-dark-400'
                }`}>
                  {step > stepItem.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{stepItem.number}</span>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-white">{stepItem.title}</div>
                  <div className="text-xs text-dark-400">{stepItem.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step > stepItem.number ? 'bg-primary-500' : 'bg-dark-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Device Type */}
                <div>
                  <label className="block text-white font-medium mb-4">Device Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {deviceTypes.map((type) => {
                      const Icon = type.icon
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleInputChange('deviceType', type.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            formData.deviceType === type.id
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-dark-700 hover:border-primary-500/50'
                          }`}
                        >
                          <Icon className="w-8 h-8 mx-auto mb-2 text-primary-400" />
                          <div className="text-sm font-medium text-white">{type.name}</div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Brand</label>
                    <input
                      type="text"
                      value={formData.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., Apple, Samsung"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Model</label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., iPhone 14 Pro"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Serial Number / IMEI</label>
                    <input
                      type="text"
                      value={formData.serialNumber}
                      onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter device serial number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Asking Price ($)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-white font-medium mb-4">Device Condition</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conditions.map((condition) => (
                      <button
                        key={condition.value}
                        type="button"
                        onClick={() => handleInputChange('condition', condition.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                          formData.condition === condition.value
                            ? 'border-primary-500 bg-primary-500/10'
                            : 'border-dark-700 hover:border-primary-500/50'
                        }`}
                      >
                        <div className="font-medium text-white">{condition.label}</div>
                        <div className="text-sm text-dark-400">{condition.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Describe your device's condition, any issues, accessories included..."
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-white font-medium mb-4">Device Images</label>
                  <div className="border-2 border-dashed border-dark-700 rounded-xl p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-dark-400" />
                    <div className="text-white font-medium mb-2">Upload device photos</div>
                    <div className="text-dark-400 text-sm mb-4">
                      Upload clear photos showing the device condition
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="btn-outline cursor-pointer inline-flex items-center"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Choose Files
                    </label>
                  </div>
                  {formData.images.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {formData.images.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Device ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Continue to Inspection
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="card max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Generating Blockchain Certificate</h2>
                <p className="text-dark-300 mb-8">
                  Creating immutable digital identity for your device on the Internet Computer Protocol
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Device Hash</span>
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-primary-400" />
                      <span className="text-primary-400 font-mono text-sm">
                        {generateBlockchainHash().slice(0, 16)}...
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Blockchain Status</span>
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Confirmed</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Transaction Cost</span>
                    <span className="text-green-400">$0.0001</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="btn-primary"
                >
                  Create Smart Contract
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="card max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Smart Contract Created</h2>
                <p className="text-dark-300 mb-8">
                  Your device is now certified and ready for sale with digital warranty
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Contract Address</span>
                    <div className="flex items-center space-x-2">
                      <LinkIcon className="w-4 h-4 text-primary-400" />
                      <span className="text-primary-400 font-mono text-sm">
                        0x1234...5678
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Warranty Period</span>
                    <span className="text-white">12 months</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-dark-800/50 rounded-lg">
                    <span className="text-white">Certification Status</span>
                    <div className="flex items-center space-x-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    View Certificate
                  </button>
                  <button className="btn-outline">
                    List on Marketplace
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default DeviceCertification
