import { useState, useEffect, Suspense, lazy, createContext, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BuyerChatbot from './components/BuyerChatbot'
import FloatingChatButton from './components/FloatingChatButton'

// Create context for app state
interface AppContextType {
  user: any | null
  login: (user: any) => void
  logout: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const Marketplace = lazy(() => import('./pages/Marketplace'))
const Buyer = lazy(() => import('./pages/Buyer'))
const Seller = lazy(() => import('./pages/Seller'))
const DeviceCertification = lazy(() => import('./pages/DeviceCertification'))
const HowToUse = lazy(() => import('./pages/HowToUse'))
const DeviceDetails = lazy(() => import('./pages/DeviceDetails'))
const Login = lazy(() => import('./pages/Login'))
const About = lazy(() => import('./pages/About'))
const Chatbot = lazy(() => import('./pages/Chatbot'))


// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-dark-950 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading OriginTrace...</p>
    </div>
  </div>
)

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <div className="text-red-400 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-dark-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(() => {
    // Get user from localStorage if available
    const savedUser = localStorage.getItem('origintrace-user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [notifications, setNotifications] = useState<Array<{
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    duration?: number
  }>>([])
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false)

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Always set dark theme
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }, [])

  useEffect(() => {
    // Persist user data
    if (user) {
      localStorage.setItem('origintrace-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('origintrace-user')
    }
  }, [user])



  // Handle user login
  const handleLogin = (userData: any) => {
    setUser(userData)
    addNotification('success', `Welcome back, ${userData.name || 'User'}!`)
  }

  // Handle user logout
  const handleLogout = () => {
    setUser(null)
    addNotification('info', 'You have been logged out successfully.')
  }

  // Add notification
  const addNotification = (type: 'success' | 'error' | 'info' | 'warning', message: string, duration = 5000) => {
    const id = Date.now().toString()
    const notification = { id, type, message, duration }
    setNotifications(prev => [...prev, notification])
    
    // Auto-remove notification
    setTimeout(() => {
      removeNotification(id)
    }, duration)
  }

  // Remove notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  // Protected route wrapper
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    // Add your authentication logic here
    const isAuthenticated = user !== null
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
  }

  // Notification component
  const NotificationDisplay = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`px-4 py-3 rounded-lg shadow-lg border-l-4 transition-all duration-300 transform ${
            notification.type === 'success' 
              ? 'bg-green-500/90 border-green-600 text-white'
              : notification.type === 'error'
              ? 'bg-red-500/90 border-red-600 text-white'
              : notification.type === 'warning'
              ? 'bg-yellow-500/90 border-yellow-600 text-white'
              : 'bg-blue-500/90 border-blue-600 text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{notification.message}</span>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-4 text-white/80 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <AppContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen bg-dark-950 text-white">
          <NotificationDisplay />
          <Navbar 
            user={user}
            onLogout={handleLogout}
          />
          
          <main className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/device/:id" element={<DeviceDetails />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                
                {/* Buyer-only routes */}
                <Route 
                  path="/marketplace/buyer" 
                  element={
                    <ProtectedRoute>
                      <Buyer />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Chatbot route - buyers only */}
                <Route 
                  path="/chatbot" 
                  element={
                    user && user.role === 'buyer' ? (
                      <Chatbot />
                    ) : (
                      <Navigate to="/login" replace />
                    )
                  } 
                />
                
                {/* Seller-only routes */}
                <Route 
                  path="/marketplace/seller" 
                  element={
                    <ProtectedRoute>
                      <Seller />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Protected routes */}
                <Route 
                  path="/certification" 
                  element={
                    <ProtectedRoute>
                      <DeviceCertification />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-dark-950">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold mb-4 text-white">404 - Page Not Found</h1>
                      <p className="text-lg mb-6 text-dark-300">The page you're looking for doesn't exist.</p>
                      <a 
                        href="/" 
                        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </ErrorBoundary>
      
      {/* AI Chatbot for Buyers Only */}
      {user && user.role === 'buyer' && (
        <>
          <BuyerChatbot 
            isOpen={isChatbotOpen} 
            onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
            onUnreadMessagesChange={setHasUnreadMessages}
          />
          <FloatingChatButton
            isOpen={isChatbotOpen}
            onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
            hasUnreadMessages={hasUnreadMessages}
          />
        </>
      )}
    </AppContext.Provider>
  )
}

export default App
