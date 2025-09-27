import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { MdFoodBank } from "react-icons/md";
import foodIcon from "../../assets/icon.png";

const Loader = ({ message = "Loading amazing content...", showProgress = false }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Preparing fresh content...",
    "Connecting generous hearts...",
    "Loading community updates...",
    "Almost ready to serve..."
  ];

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [showProgress]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 flex flex-col items-center justify-center z-50">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-accent-200 rounded-full opacity-30 animate-float animation-delay-400"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary-300 rounded-full opacity-20 animate-float animation-delay-800"></div>
      
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo and brand */}
        <div className="space-y-4">
          <div className="relative">
            {/* Main loading animation */}
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-accent-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <img src={foodIcon} alt="ZeroHunger" className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Floating hearts */}
            <div className="absolute -top-2 -right-2 text-red-400 animate-bounce-gentle">
              <FiHeart className="w-4 h-4" />
            </div>
            <div className="absolute -bottom-2 -left-2 text-red-400 animate-bounce-gentle animation-delay-600">
              <FiHeart className="w-3 h-3" />
            </div>
          </div>

          {/* Brand name */}
          <h1 className="text-3xl font-heading font-bold text-gradient">
            ZeroHunger
          </h1>
        </div>

        {/* Loading message */}
        <div className="space-y-4">
          <p className="text-lg font-medium text-secondary-700 animate-pulse">
            {messages[currentMessage]}
          </p>
          
          {showProgress && (
            <div className="w-64 mx-auto">
              <div className="bg-secondary-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-primary h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-secondary-500 mt-2">
                {Math.round(Math.min(progress, 100))}% complete
              </p>
            </div>
          )}
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-primary-400 rounded-full animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          ))}
        </div>

        {/* Inspirational text */}
        <div className="max-w-md mx-auto space-y-2 animate-fade-in animation-delay-800">
          <p className="text-sm text-secondary-500">
            "Every act of kindness creates a ripple effect"
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-secondary-400">
            <div className="w-1 h-1 bg-secondary-400 rounded-full"></div>
            <span>Connecting hearts, sharing hope</span>
            <div className="w-1 h-1 bg-secondary-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced skeleton loader for specific content
export const SkeletonLoader = ({ type = "card", count = 1 }) => {
  const renderCardSkeleton = () => (
    <div className="card-modern p-6 animate-pulse">
      <div className="h-48 bg-secondary-200 rounded-xl mb-4"></div>
      <div className="space-y-3">
        <div className="h-6 bg-secondary-200 rounded-lg w-3/4"></div>
        <div className="h-4 bg-secondary-200 rounded-lg w-full"></div>
        <div className="h-4 bg-secondary-200 rounded-lg w-2/3"></div>
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="bg-white rounded-xl p-4 shadow-soft animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-secondary-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-secondary-200 rounded-lg w-3/4"></div>
          <div className="h-3 bg-secondary-200 rounded-lg w-1/2"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          {type === "card" ? renderCardSkeleton() : renderListSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default Loader;
