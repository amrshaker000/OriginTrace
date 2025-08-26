import { 
  Shield, 
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/about' },
        { name: 'Team', href: '/about' },
        { name: 'Careers', href: '/about' }
      ]
    },
    marketplace: {
      title: 'Marketplace',
      links: [
        { name: 'Browse Devices', href: '/marketplace' },
        { name: 'Buyer Portal', href: '/marketplace/buyer' },
        { name: 'Seller Portal', href: '/marketplace/seller' },
        { name: 'Device Categories', href: '/marketplace' }
      ]
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Device Certification', href: '/certification' },
        { name: 'Quality Assurance', href: '/how-to-use' },
        { name: 'AI Analysis', href: '/how-to-use' }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/how-to-use' },
        { name: 'Contact Us', href: '/about' },
        { name: 'FAQ', href: '/how-to-use' },
        { name: 'Live Chat', href: '/about' }
      ]
    }
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: ExternalLink },
    { name: 'LinkedIn', href: '#', icon: ExternalLink },
    { name: 'GitHub', href: '#', icon: ExternalLink },
    { name: 'Discord', href: '#', icon: ExternalLink }
  ]

  return (
    <footer className="border-t bg-dark-900/50 border-dark-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">OriginTrace</span>
            </div>
            <p className="text-sm mb-4 text-dark-300">
              The trusted marketplace for blockchain-certified used electronics. 
              Quality, transparency, and security guaranteed.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg transition-colors duration-200 bg-dark-800/50 text-dark-300 hover:bg-primary-500/20 hover:text-primary-400"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 text-dark-300 hover:text-primary-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Additional Info */}
        <div className="border-t pt-8 border-dark-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-dark-300">
                    support@origintrace.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-dark-300">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-dark-300">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="font-semibold mb-4 text-white">
                Platform Stats
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-dark-300">
                    Certified Devices
                  </span>
                  <span className="font-semibold text-white">
                    10,000+
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-dark-300">
                    Happy Customers
                  </span>
                  <span className="font-semibold text-white">
                    5,000+
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-dark-300">
                    Success Rate
                  </span>
                  <span className="font-semibold text-white">
                    99.8%
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4 text-white">
                Stay Updated
              </h4>
              <p className="text-sm mb-4 text-dark-300">
                Get the latest updates on new devices and features.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg border bg-dark-800/50 border-dark-600 text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
                <button className="px-4 py-2 text-sm rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 border-dark-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-dark-400">
              © {currentYear} OriginTrace. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer