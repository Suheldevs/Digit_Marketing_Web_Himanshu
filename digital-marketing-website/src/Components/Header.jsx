import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Search, TrendingUp, ChevronDown, Home, User, Mail, FolderOpen, Award } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
      href: '#home',
      hasDropdown: false
    },
    {
      name: 'About',
      icon: User,
      href: '#about',
      hasDropdown: false
    },
    {
      name: 'Services',
      icon: Award,
      href: '#services',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Web Development',
          icon: Code,
          href: '#web-development',
          description: 'Custom websites & applications'
        },
        {
          name: 'Search Engine Optimization',
          icon: Search,
          href: '#seo',
          description: 'Boost your online visibility'
        },
        {
          name: 'Digital Marketing',
          icon: TrendingUp,
          href: '#digital-marketing',
          description: 'Grow your brand online'
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
      href: '#contact',
      hasDropdown: false
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      style={{
        marginTop: isScrolled ? '0px' : '20px',
        width: isScrolled ? '100%' : 'calc(100% - 40px)',
        marginLeft: isScrolled ? '0px' : '20px',
        marginRight: isScrolled ? '0px' : '20px',
        borderRadius: isScrolled ? '0px' : '16px',
      }}
    >
      <nav className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              DigitalCraft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-all duration-300 font-medium group py-2"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>

                {/* Services Dropdown Menu */}
                {item.hasDropdown && (
                  <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-6 px-6 transform transition-all duration-300 ${
                    hoveredItem === index 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}>
                    <div className="space-y-4">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                            <dropdownItem.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover/item:text-orange-500 transition-colors duration-200">
                              {dropdownItem.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-between text-gray-700 hover:text-orange-500 transition-colors duration-200 py-3 group"
                  onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </a>
                
                {/* Mobile Services Submenu */}
                {item.hasDropdown && (
                  <div className="ml-8 mt-2 space-y-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="flex items-center space-x-3 py-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <dropdownItem.icon className="w-4 h-4" />
                        <span className="text-sm">{dropdownItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;