import React, { useState, forwardRef } from 'react';
import { FiEye, FiEyeOff, FiAlertCircle, FiCheck } from 'react-icons/fi';

const Input = forwardRef(({ 
  label,
  type = 'text',
  error,
  success,
  helperText,
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const inputType = type === 'password' && showPasswordToggle 
    ? (showPassword ? 'text' : 'password') 
    : type;
  
  const baseInputClasses = `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none
    placeholder:text-secondary-400 
    disabled:bg-secondary-50 disabled:cursor-not-allowed
    ${leftIcon ? 'pl-12' : ''}
    ${rightIcon || (type === 'password' && showPasswordToggle) ? 'pr-12' : ''}
  `;
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
    : success
    ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100'
    : 'border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100';
  
  const inputClasses = `${baseInputClasses} ${stateClasses} ${className}`;
  
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          className={inputClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {rightIcon && !showPasswordToggle && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-400">
            {rightIcon}
          </div>
        )}
        
        {type === 'password' && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600 transition-colors"
          >
            {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
          </button>
        )}
        
        {error && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500">
            <FiAlertCircle className="w-5 h-5" />
          </div>
        )}
        
        {success && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-500">
            <FiCheck className="w-5 h-5" />
          </div>
        )}
      </div>
      
      {(error || success || helperText) && (
        <div className="flex items-center gap-2 text-sm">
          {error && (
            <>
              <FiAlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-red-600">{error}</span>
            </>
          )}
          {success && (
            <>
              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-green-600">{success}</span>
            </>
          )}
          {helperText && !error && !success && (
            <span className="text-secondary-500">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Textarea component
export const Textarea = forwardRef(({ 
  label,
  error,
  success,
  helperText,
  rows = 4,
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  const baseTextareaClasses = `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none resize-none
    placeholder:text-secondary-400 
    disabled:bg-secondary-50 disabled:cursor-not-allowed
  `;
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
    : success
    ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100'
    : 'border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100';
  
  const textareaClasses = `${baseTextareaClasses} ${stateClasses} ${className}`;
  
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        <textarea
          ref={ref}
          rows={rows}
          className={textareaClasses}
          {...props}
        />
        
        {error && (
          <div className="absolute right-4 top-4 text-red-500">
            <FiAlertCircle className="w-5 h-5" />
          </div>
        )}
        
        {success && (
          <div className="absolute right-4 top-4 text-green-500">
            <FiCheck className="w-5 h-5" />
          </div>
        )}
      </div>
      
      {(error || success || helperText) && (
        <div className="flex items-center gap-2 text-sm">
          {error && (
            <>
              <FiAlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-red-600">{error}</span>
            </>
          )}
          {success && (
            <>
              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-green-600">{success}</span>
            </>
          )}
          {helperText && !error && !success && (
            <span className="text-secondary-500">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// Select component
export const Select = forwardRef(({ 
  label,
  options = [],
  error,
  success,
  helperText,
  placeholder = 'Select an option',
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  const baseSelectClasses = `
    w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 outline-none
    bg-white appearance-none cursor-pointer
    disabled:bg-secondary-50 disabled:cursor-not-allowed
  `;
  
  const stateClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
    : success
    ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100'
    : 'border-secondary-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100';
  
  const selectClasses = `${baseSelectClasses} ${stateClasses} ${className}`;
  
  return (
    <div className={`space-y-2 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          ref={ref}
          className={selectClasses}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {error && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-red-500">
            <FiAlertCircle className="w-5 h-5" />
          </div>
        )}
        
        {success && (
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-green-500">
            <FiCheck className="w-5 h-5" />
          </div>
        )}
      </div>
      
      {(error || success || helperText) && (
        <div className="flex items-center gap-2 text-sm">
          {error && (
            <>
              <FiAlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span className="text-red-600">{error}</span>
            </>
          )}
          {success && (
            <>
              <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-green-600">{success}</span>
            </>
          )}
          {helperText && !error && !success && (
            <span className="text-secondary-500">{helperText}</span>
          )}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Input;