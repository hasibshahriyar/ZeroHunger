import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FiCheck, FiX, FiInfo, FiAlertTriangle } from 'react-icons/fi';

// Custom notification components
const SuccessNotification = ({ message, t }) => (
  <div className={`${t.visible ? 'animate-slide-down' : 'animate-slide-up'} card-modern max-w-md w-full bg-white shadow-strong border-l-4 border-green-500`}>
    <div className="flex items-center p-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <FiCheck className="w-5 h-5 text-green-600" />
        </div>
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-secondary-900">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-3 flex-shrink-0 text-secondary-400 hover:text-secondary-600 transition-colors"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const ErrorNotification = ({ message, t }) => (
  <div className={`${t.visible ? 'animate-slide-down' : 'animate-slide-up'} card-modern max-w-md w-full bg-white shadow-strong border-l-4 border-red-500`}>
    <div className="flex items-center p-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <FiX className="w-5 h-5 text-red-600" />
        </div>
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-secondary-900">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-3 flex-shrink-0 text-secondary-400 hover:text-secondary-600 transition-colors"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const InfoNotification = ({ message, t }) => (
  <div className={`${t.visible ? 'animate-slide-down' : 'animate-slide-up'} card-modern max-w-md w-full bg-white shadow-strong border-l-4 border-blue-500`}>
    <div className="flex items-center p-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <FiInfo className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-secondary-900">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-3 flex-shrink-0 text-secondary-400 hover:text-secondary-600 transition-colors"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const WarningNotification = ({ message, t }) => (
  <div className={`${t.visible ? 'animate-slide-down' : 'animate-slide-up'} card-modern max-w-md w-full bg-white shadow-strong border-l-4 border-yellow-500`}>
    <div className="flex items-center p-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
          <FiAlertTriangle className="w-5 h-5 text-yellow-600" />
        </div>
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium text-secondary-900">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-3 flex-shrink-0 text-secondary-400 hover:text-secondary-600 transition-colors"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// Enhanced notification functions
export const notify = {
  success: (message) => {
    toast.custom((t) => <SuccessNotification message={message} t={t} />, {
      duration: 4000,
    });
  },
  
  error: (message) => {
    toast.custom((t) => <ErrorNotification message={message} t={t} />, {
      duration: 5000,
    });
  },
  
  info: (message) => {
    toast.custom((t) => <InfoNotification message={message} t={t} />, {
      duration: 4000,
    });
  },
  
  warning: (message) => {
    toast.custom((t) => <WarningNotification message={message} t={t} />, {
      duration: 4000,
    });
  },
  
  promise: (promise, messages) => {
    return toast.promise(promise, {
      loading: messages.loading || 'Loading...',
      success: messages.success || 'Success!',
      error: messages.error || 'Something went wrong',
    }, {
      style: {
        minWidth: '250px',
      },
      success: {
        duration: 4000,
        icon: '🎉',
      },
      error: {
        duration: 5000,
        icon: '❌',
      },
    });
  }
};

// Modern Toaster component
export const ModernToaster = () => (
  <Toaster
    position="top-right"
    gutter={12}
    containerStyle={{
      top: 80,
      right: 20,
    }}
    toastOptions={{
      duration: 4000,
      style: {
        background: 'transparent',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
      },
    }}
  />
);

export default ModernToaster;