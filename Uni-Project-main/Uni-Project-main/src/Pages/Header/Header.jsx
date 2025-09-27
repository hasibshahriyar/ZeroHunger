import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiMessageCircle, FiHome, FiGrid } from "react-icons/fi";
import { MdFoodBank } from "react-icons/md";
import logo from "../../assets/logo.png";
import Container from "../../Components/Container";
import useAuth from "../../hooks/useAuth";
import HeaderModal from "../../Components/Modal/HeaderModal/HeaderModal";
import useRole from "../../hooks/useRole";
import "../../Components/Dashboard/dashboard.css";

const Header = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: FiHome },
    { to: "/available", label: "Available Foods", icon: MdFoodBank },
    { 
      to: user && role === "user" ? "/dashboard/user-profile" : 
          user && role === "donor" ? "/dashboard/donor-profile" : 
          user && role === "admin" ? "/dashboard/admin-profile" : "/",
      label: "Dashboard", 
      icon: FiGrid,
      show: !!user
    },
    { to: "/chatbot", label: "Chatbot", icon: FiMessageCircle },
  ];

  const NavLink_Modern = ({ to, children, icon: Icon, mobile = false }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
          mobile 
            ? `text-secondary-700 hover:text-primary-600 hover:bg-primary-50 ${isActive ? 'bg-primary-100 text-primary-700' : ''}` 
            : `text-secondary-700 hover:text-primary-600 ${isActive ? 'text-primary-600' : ''}`
        }`
      }
      onClick={() => mobile && setIsMobileMenuOpen(false)}
    >
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      <div className={`absolute bottom-0 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${mobile ? 'group-hover:w-full' : 'w-0 group-hover:w-full'}`}></div>
    </NavLink>
  );

  return (
    <header className={`navbar-modern transition-all duration-300 ${isScrolled ? 'shadow-medium' : 'shadow-soft'}`}>
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                src={logo} 
                alt="ZeroHunger logo" 
              />
              <div className="absolute inset-0 bg-primary-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-heading font-bold text-gradient">
                Zero<span className="text-secondary-800">Hunger</span>
              </h1>
              <span className="text-xs text-secondary-500 -mt-1">Food Donation Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              (item.show !== false) && (
                <NavLink_Modern key={item.to} to={item.to} icon={item.icon}>
                  {item.label}
                </NavLink_Modern>
              )
            ))}
          </div>

          {/* Right side - Auth */}
          <div className="flex items-center gap-4">
            {!user ? (
              <Link to="/login">
                <button className="btn-primary px-6 py-2 rounded-xl font-medium flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col text-right">
                  <span className="text-sm font-medium text-secondary-700">Welcome back!</span>
                  <span className="text-xs text-secondary-500 capitalize">{role || 'User'}</span>
                </div>
                {user?.userImage ? (
                  <div className="relative group">
                    <img
                      onClick={() => setIsOpen(true)}
                      className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-primary-200 hover:ring-primary-400 transition-all duration-300 transform hover:scale-105"
                      src={user?.userImage}
                      alt="User avatar"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                ) : (
                  <div 
                    onClick={() => setIsOpen(true)}
                    className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center cursor-pointer hover:shadow-colored transition-all duration-300 transform hover:scale-105"
                  >
                    <FiUser className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-secondary-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-secondary-700" />
              ) : (
                <FiMenu className="w-6 h-6 text-secondary-700" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 border-t border-secondary-100">
            {navItems.map((item, index) => (
              (item.show !== false) && (
                <div 
                  key={item.to} 
                  className="animate-slide-down"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <NavLink_Modern to={item.to} icon={item.icon} mobile>
                    {item.label}
                  </NavLink_Modern>
                </div>
              )
            ))}
          </div>
        </div>

        <HeaderModal isOpen={isOpen} closeModal={closeModal} />
      </Container>
    </header>
  );
};

export default Header;
