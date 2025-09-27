import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'shadow-soft',
    elevated: 'shadow-medium',
    bordered: 'border border-secondary-200 shadow-soft',
    glass: 'glass shadow-soft',
  };
  
  const hoverClasses = hover ? 'hover:shadow-medium hover:-translate-y-1' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Card Header
export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-secondary-100 ${className}`}>
    {children}
  </div>
);

// Card Content
export const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

// Card Footer
export const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-secondary-100 ${className}`}>
    {children}
  </div>
);

// Feature Card for showcasing features
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color = 'primary',
  className = '' 
}) => {
  const colorVariants = {
    primary: 'from-primary-500 to-primary-600',
    accent: 'from-accent-500 to-accent-600',
    success: 'from-green-500 to-green-600',
    warning: 'from-yellow-500 to-yellow-600',
    danger: 'from-red-500 to-red-600',
  };
  
  return (
    <Card hover className={`p-6 text-center group ${className}`}>
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorVariants[color]} rounded-2xl mb-4 group-hover:shadow-colored transition-all duration-300 transform group-hover:scale-110`}>
        <div className="text-white text-xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-2">
        {title}
      </h3>
      <p className="text-secondary-600 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

// Stats Card
export const StatsCard = ({ 
  value, 
  label, 
  icon, 
  trend,
  trendValue,
  color = 'primary',
  className = '' 
}) => {
  const colorVariants = {
    primary: 'text-primary-600',
    accent: 'text-accent-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
  };
  
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-secondary-900">{value}</p>
          <p className="text-secondary-600 text-sm">{label}</p>
          {trend && (
            <div className={`flex items-center gap-1 text-sm mt-1 ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span>{trend === 'up' ? '↗' : '↘'}</span>
              <span>{trendValue}</span>
            </div>
          )}
        </div>
        <div className={`text-3xl ${colorVariants[color]}`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

// Food Card for food items
export const FoodCard = ({ 
  image, 
  title, 
  description, 
  location,
  donor,
  expiryDate,
  quantity,
  onAction,
  actionLabel = 'Request',
  className = '' 
}) => (
  <Card hover className={`overflow-hidden group ${className}`}>
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-3 right-3">
        <span className="bg-white/90 backdrop-blur-sm text-secondary-800 text-xs font-medium px-3 py-1 rounded-full">
          {quantity}
        </span>
      </div>
    </div>
    
    <CardContent className="space-y-3">
      <h3 className="text-lg font-semibold text-secondary-800 line-clamp-1">
        {title}
      </h3>
      <p className="text-secondary-600 text-sm line-clamp-2">
        {description}
      </p>
      
      <div className="space-y-2 text-sm text-secondary-500">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>👤</span>
          <span>{donor}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⏰</span>
          <span>Expires: {expiryDate}</span>
        </div>
      </div>
    </CardContent>
    
    <CardFooter>
      <button
        onClick={onAction}
        className="w-full btn-primary py-2 text-sm"
      >
        {actionLabel}
      </button>
    </CardFooter>
  </Card>
);

// Profile Card
export const ProfileCard = ({ 
  avatar, 
  name, 
  role, 
  email, 
  stats,
  onEdit,
  className = '' 
}) => (
  <Card className={`p-6 text-center ${className}`}>
    <div className="relative inline-block mb-4">
      <img 
        src={avatar} 
        alt={name}
        className="w-20 h-20 rounded-full ring-4 ring-primary-100"
      />
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></div>
    </div>
    
    <h3 className="text-xl font-semibold text-secondary-800">{name}</h3>
    <p className="text-primary-600 font-medium capitalize">{role}</p>
    <p className="text-secondary-500 text-sm">{email}</p>
    
    {stats && (
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-secondary-100">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl font-bold text-secondary-800">{stat.value}</p>
            <p className="text-xs text-secondary-500">{stat.label}</p>
          </div>
        ))}
      </div>
    )}
    
    {onEdit && (
      <button
        onClick={onEdit}
        className="btn-outline w-full mt-6"
      >
        Edit Profile
      </button>
    )}
  </Card>
);

export default Card;