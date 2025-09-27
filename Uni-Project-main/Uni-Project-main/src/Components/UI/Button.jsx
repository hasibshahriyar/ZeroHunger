import React from 'react';
import { FiLoader } from 'react-icons/fi';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-primary text-white hover:shadow-colored focus:ring-primary-200',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-200',
    outline: 'bg-transparent text-secondary-700 border-2 border-secondary-300 hover:bg-secondary-50 hover:border-secondary-400 focus:ring-secondary-200',
    ghost: 'bg-transparent text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-200',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-200',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-200',
  };
  
  const sizes = {
    xs: 'px-3 py-1.5 text-xs rounded-lg',
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  };
  
  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();
  
  return (
    <button 
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <FiLoader className="w-4 h-4 animate-spin mr-2" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

// Specific button variants for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const WarningButton = (props) => <Button variant="warning" {...props} />;

// Icon button component
export const IconButton = ({ 
  icon, 
  size = 'md', 
  variant = 'ghost', 
  className = '',
  ...props 
}) => {
  const iconSizes = {
    xs: 'w-6 h-6 p-1',
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5',
    xl: 'w-14 h-14 p-3',
  };
  
  return (
    <Button
      variant={variant}
      size={size}
      className={`${iconSizes[size]} ${className}`}
      {...props}
    >
      {icon}
    </Button>
  );
};

// Floating Action Button
export const FAB = ({ 
  icon, 
  position = 'bottom-right',
  size = 'lg',
  className = '',
  ...props 
}) => {
  const positions = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-20 right-6',
    'top-left': 'fixed top-20 left-6',
  };
  
  return (
    <Button
      variant="primary"
      size={size}
      className={`${positions[position]} rounded-full shadow-strong hover:shadow-colored z-50 ${className}`}
      {...props}
    >
      {icon}
    </Button>
  );
};

export default Button;