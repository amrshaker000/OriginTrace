import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Shield, 
  ShoppingCart, 
  FileCheck,
  Info,
  BookOpen,
  LogIn,
  ChevronDown,
  HelpCircle,
  Users,
  MessageCircle
} from 'lucide-react'

interface NavbarProps {
  user: any | null
  onLogout: () => void
}

const Navbar = ({ user, onLogout }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // Group navigation items into logical categories with role-based access control
  const getNavigationGroups = () => {
    const groups = {
      main: [
        { name: 'Home', href: '/', icon: Shield }
      ],
      marketplace: [
        { name: 'Browse All', href: '/marketplace', icon: ShoppingCart }
      ],
      services: [
        { name: 'How to Use', href: '/how-to-use', icon: BookOpen }
      ],
      company: [
        { name: 'About Us', href: '/about', icon: Info },
        { name: 'Help & Support', href: '/how-to-use', icon: HelpCircle }
      ]
    }

    // Role-based marketplace items
    if (!user || user.role === 'buyer') {
      groups.marketplace.push({ name: 'Buyer Portal', href: '/marketplace/buyer', icon: Users })
    }
    if (!user || user.role === 'seller') {
      groups.marketplace.push({ name: 'Seller Portal', href: '/marketplace/seller', icon: ShoppingCart })
    }

    // Role-based services items
             if (!user || user.role === 'buyer') {
           groups.services.unshift({ name: 'ChatBot', href: '/chatbot', icon: MessageCircle })
         }
    if (user && user.role === 'buyer') {
      groups.services.unshift({ name: 'My Certifications', href: '/certification', icon: FileCheck })
    }
    if (!user || user.role === 'seller') {
      groups.services.unshift({ name: 'Device Certification', href: '/certification', icon: FileCheck })
    }

    return groups
  }

  const navigationGroups = getNavigationGroups()

  const isActive = (path: string) => location.pathname === path

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  const DropdownMenu = ({ title, items, icon: Icon }: { title: string, items: any[], icon: any }) => (
    <div className="relative group">
      <button
        onClick={() => toggleDropdown(title.toLowerCase())}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-dark-300 hover:text-white hover:bg-dark-800/50"
      >
        <Icon className="w-4 h-4" />
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          activeDropdown === title.toLowerCase() ? 'rotate-180' : ''
        }`} />
      </button>
      
      {/* Dropdown Content */}
      <div className={`absolute top-full left-0 mt-2 w-56 bg-dark-900/95 backdrop-blur-md rounded-xl border border-dark-700 shadow-2xl transition-all duration-200 transform origin-top ${
        activeDropdown === title.toLowerCase() 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95 pointer-events-none'
      }`}>
                 <div className="py-2">
           {items.map((item) => {
             const ItemIcon = item.icon
             
             
             
             return (
               <Link
                 key={item.name}
                 to={item.href}
                 onClick={closeDropdowns}
                 className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 ${
                   isActive(item.href)
                     ? 'bg-primary-500/20 text-primary-400 border-r-2 border-primary-500'
                     : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                 }`}
               >
                 <ItemIcon className="w-4 h-4" />
                 <span className="text-sm">{item.name}</span>
               </Link>
             )
           })}
         </div>
      </div>
    </div>
  )

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">OriginTrace</span>
          </Link>

          {/* Desktop Navigation - Grouped into dropdowns */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main navigation */}
            {navigationGroups.main.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                      : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}

            {/* Marketplace dropdown */}
            <DropdownMenu 
              title="Marketplace" 
              items={navigationGroups.marketplace} 
              icon={ShoppingCart} 
            />

            {/* Services dropdown */}
            <DropdownMenu 
              title="Services" 
              items={navigationGroups.services} 
              icon={FileCheck} 
            />

            {/* Company dropdown */}
            <DropdownMenu 
              title="Company" 
              items={navigationGroups.company} 
              icon={Info} 
            />
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* User Authentication */}
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-dark-300 hidden md:block">Welcome, {user.name || 'User'}</span>
            <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4 rotate-180" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-primary-500/20 text-primary-400 border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:block">Login</span>
              </Link>
            )}



            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Simplified with grouped sections */}
        {isOpen && (
          <div className="lg:hidden animate-slide-down">
            <div className="py-4 space-y-4">
              {/* Main Navigation */}
              <div className="px-4">
                <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Main</h3>
                {navigationGroups.main.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Marketplace Section */}
              <div className="px-4">
                <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Marketplace</h3>
                {navigationGroups.marketplace.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Services Section */}
              <div className="px-4">
                <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Services</h3>
                {navigationGroups.services.map((item) => {
                  const Icon = item.icon
                  

                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                          : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Company Section */}
              <div className="px-4">
                <h3 className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-2">Company</h3>
                {navigationGroups.company.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                        : 'text-dark-300 hover:text-white hover:bg-dark-800/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
