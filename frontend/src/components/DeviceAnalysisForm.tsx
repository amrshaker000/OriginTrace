import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Brain, AlertCircle, CheckCircle, Loader } from 'lucide-react'
import { analyzeDevice, type AnalyzeInput, type AnalyzeResult } from '../api/devices'

export default function DeviceAnalysisForm() {
  const [formData, setFormData] = useState<AnalyzeInput>({
    device_type: '',
    primary_use: '',
    budget_usd: 0,
    hard_constraints: '',
    soft_preferences: '',
    must_not_have: ''
  })
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalyzeResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)
    setError(null)
    setResult(null)

    try {
      const analysisResult = await analyzeDevice(formData)
      setResult(analysisResult)
    } catch (err: any) {
      setError(err.message || 'Failed to analyze device requirements')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleInputChange = (field: keyof AnalyzeInput, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Device Analysis</h3>
          <p className="text-dark-400 text-sm">AI-powered device recommendations</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white font-medium mb-2">Device Type *</label>
            <input
              type="text"
              value={formData.device_type}
              onChange={(e) => handleInputChange('device_type', e.target.value)}
              placeholder="e.g., laptop, smartphone, tablet"
              className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Primary Use *</label>
            <input
              type="text"
              value={formData.primary_use}
              onChange={(e) => handleInputChange('primary_use', e.target.value)}
              placeholder="e.g., gaming, work, photography"
              className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Budget (USD) *</label>
          <input
            type="number"
            value={formData.budget_usd}
            onChange={(e) => handleInputChange('budget_usd', parseInt(e.target.value) || 0)}
            placeholder="1000"
            min="0"
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Hard Constraints</label>
          <textarea
            value={formData.hard_constraints}
            onChange={(e) => handleInputChange('hard_constraints', e.target.value)}
            placeholder="e.g., must have 16GB RAM, must be portable"
            rows={2}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Soft Preferences</label>
          <textarea
            value={formData.soft_preferences}
            onChange={(e) => handleInputChange('soft_preferences', e.target.value)}
            placeholder="e.g., prefer Apple ecosystem, would like good battery life"
            rows={2}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Must Not Have</label>
          <textarea
            value={formData.must_not_have}
            onChange={(e) => handleInputChange('must_not_have', e.target.value)}
            placeholder="e.g., no Windows, no heavy devices"
            rows={2}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isAnalyzing}
          className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Analyze Requirements</span>
            </>
          )}
        </button>
      </form>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 bg-dark-800/50 rounded-lg border border-dark-700"
        >
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <h4 className="text-white font-semibold">Analysis Results</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-3 bg-dark-900/50 rounded-lg">
              <div className="text-dark-400 text-sm">Device Type</div>
              <div className="text-white font-medium">{result.device_type}</div>
            </div>
            <div className="p-3 bg-dark-900/50 rounded-lg">
              <div className="text-dark-400 text-sm">Primary Use</div>
              <div className="text-white font-medium">{result.primary_use}</div>
            </div>
            <div className="p-3 bg-dark-900/50 rounded-lg">
              <div className="text-dark-400 text-sm">Budget</div>
              <div className="text-white font-medium">${result.budget_usd}</div>
            </div>
          </div>

          {result.matches && result.matches.length > 0 && (
            <div className="mb-4">
              <h5 className="text-white font-medium mb-2">Recommended Devices</h5>
              <div className="space-y-2">
                {result.matches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-dark-900/30 rounded">
                    <span className="text-white">Device {match.device_id}</span>
                    <span className="text-primary-400 font-medium">{match.score}% match</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.notes && (
            <div>
              <h5 className="text-white font-medium mb-2">Notes</h5>
              <p className="text-dark-300 text-sm">{result.notes}</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
