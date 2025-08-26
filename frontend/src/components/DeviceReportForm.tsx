import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Plus, AlertCircle, CheckCircle } from 'lucide-react'
import { useDeviceReport } from '../hooks/useDeviceReport'

interface DeviceReportFormProps {
  deviceId: bigint
  onSuccess?: () => void
}

export default function DeviceReportForm({ deviceId, onSuccess }: DeviceReportFormProps) {
  const [status, setStatus] = useState('OK')
  const [temperature, setTemperature] = useState('37')
  const [hash, setHash] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const { data: existingReport, loading, error, addReport } = useDeviceReport(deviceId)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const report = {
        status,
        temperature: BigInt(temperature),
        hash: hash ? [hash] : []
      }

      await addReport(report)
      setSubmitSuccess(true)
      onSuccess?.()
      
      // Reset form
      setStatus('OK')
      setTemperature('37')
      setHash('')
    } catch (err: any) {
      setSubmitError(err.message || 'Failed to add device report')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="card p-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
          <span className="text-dark-300">Loading device report...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card p-6 border border-red-500/20">
        <div className="flex items-center space-x-2 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>Error loading device report: {error.message}</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Device Report</h3>
          <p className="text-dark-400 text-sm">Device ID: {deviceId.toString()}</p>
        </div>
      </div>

      {existingReport && (
        <div className="mb-6 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
          <h4 className="text-white font-medium mb-2">Current Report</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-dark-400">Status:</span>
              <span className="text-white ml-2">{existingReport.status}</span>
            </div>
            <div>
              <span className="text-dark-400">Temperature:</span>
              <span className="text-white ml-2">{existingReport.temperature.toString()}</span>
            </div>
            <div>
              <span className="text-dark-400">Hash:</span>
              <span className="text-white ml-2">
                {existingReport.hash.length > 0 ? existingReport.hash[0] : 'None'}
              </span>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white font-medium mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          >
            <option value="OK">OK</option>
            <option value="WARNING">Warning</option>
            <option value="ERROR">Error</option>
            <option value="MAINTENANCE">Maintenance Required</option>
          </select>
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Temperature (°C)</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="37"
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Hash (Optional)</label>
          <input
            type="text"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            placeholder="Enter device hash..."
            className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{submitError}</span>
          </motion.div>
        )}

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Device report added successfully!</span>
          </motion.div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Adding Report...</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Add Device Report</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 p-4 bg-dark-800/30 rounded-lg border border-dark-700">
                        <h4 className="text-white font-medium mb-2">Blockchain Integration Info</h4>
        <div className="text-sm text-dark-400 space-y-1">
          <p>• Reports are stored on the Internet Computer blockchain</p>
          <p>• Temperature values use BigInt for precision</p>
          <p>• Hash values are stored as string arrays</p>
          <p>• All data is immutable and tamper-proof</p>
        </div>
      </div>
    </motion.div>
  )
}
