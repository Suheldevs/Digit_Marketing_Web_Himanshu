import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, TrendingUp, Search, Palette, ChevronDown, Home, User, Mail, FolderOpen, Award } from 'lucide-react';
import Modal from './Modal';
import { Link } from 'react-router-dom';


// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Home',
      icon: Home,
      href: '/',
      hasDropdown: false
    },
    {
      name: 'About',
      icon: User,
      href: '/about',
      hasDropdown: false
    },
    {
      name: 'Services',
      icon: Award,
      href: '/service',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Web Development',
          icon: Code,
          href: '/service/web-development',
          description: 'Custom websites & web apps'
        },
        {
          name: 'App Development',
          icon: Smartphone,
          href: '/service/app-development',
          description: 'iOS & Android applications'
        },
        {
          name: 'Digital Marketing',
          icon: TrendingUp,
          href: '/service/digital-marketing',
          description: 'Grow your brand online'
        },
        {
          name: 'SEO',
          icon: Search,
          href: '/service/seo',
          description: 'Boost online visibility'
        },
        {
          name: 'Graphic Design',
          icon: Palette,
          href: '/service/graphic-design',
          description: 'Creative visual solutions'
        }
      ]
    },
    {
      name: 'Portfolio',
      icon: FolderOpen,
      href: '#portfolio',
      hasDropdown: false
    },
    {
      name: 'Contact',
      icon: Mail,
      href: '/contact',
      hasDropdown: false
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm '
          : 'bg-white/80 backdrop-blur-md py-4'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img
                src="/bg-fav.png"
                alt="Logo"
                className='h-16 object-contain p-1'
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className={`absolute top-full left-0 mt-0 w-64 bg-white rounded-xl shadow-lg border border-gray-100  transform transition-all duration-200 ${hoveredItem === index
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <dropdownItem.icon className="w-8 h-8 rounded-full text-white bg-orange-600 p-1 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">
                              {dropdownItem.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}>
          <div className="px-6 py-4 bg-white border-t border-gray-100">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-gray-700 hover:text-gray-900 py-3 font-medium"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>

                  {item.hasDropdown && (
                    <div className="ml-8 space-y-1 mb-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 py-2 text-gray-600 hover:text-gray-900 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <dropdownItem.icon className="w-4 h-4" />
                          <span>{dropdownItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gray-900 text-white py-3 rounded-full font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;