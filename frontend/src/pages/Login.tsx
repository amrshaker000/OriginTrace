import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Shield, User, Store } from 'lucide-react'

interface LoginProps {
  onLogin: (user: any) => void
}

const Login = ({ onLogin }: LoginProps) => {
  const [role, setRole] = useState<'buyer' | 'seller'>('buyer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create user object (in real app, this would come from API)
      const user = {
        id: Date.now(),
        email,
        role,
        name: email.split('@')[0], // Use email prefix as name
        createdAt: new Date().toISOString()
      }
      
      // Call the onLogin callback
      onLogin(user)
      
      // Navigate based on role
      if (role === 'seller') {
        navigate('/marketplace/seller')
      } else {
        navigate('/marketplace/buyer')
      }
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4">
      <div className="w-full max-w-lg card">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to OriginTrace</h1>
          <p className="text-dark-400">Login to continue</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Role</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('buyer')}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  role === 'buyer' ? 'border-primary-500 bg-primary-500/10 text-primary-300' : 'border-dark-700 bg-dark-800 text-dark-300'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Buyer</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('seller')}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  role === 'seller' ? 'border-primary-500 bg-primary-500/10 text-primary-300' : 'border-dark-700 bg-dark-800 text-dark-300'
                }`}
              >
                <Store className="w-5 h-5" />
                <span>Seller</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
