interface ErrorInfo {
  errorId: string;
  timestamp: string;
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  userId?: string;
}

interface ErrorHandlerOptions {
  enableLogging?: boolean;
  enableAnalytics?: boolean;
  enableUserNotification?: boolean;
  logLevel?: 'error' | 'warn' | 'info';
}

// Generate unique error ID for tracking
const generateErrorId = (): string => {
  return `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Log error to console and external services
const logError = async (errorInfo: ErrorInfo, options: ErrorHandlerOptions = {}) => {
  const {
    enableLogging = true,
    enableAnalytics = true,
    logLevel = 'error'
  } = options;

  if (enableLogging) {
    console[logLevel](`[${errorInfo.errorId}] ${errorInfo.message}`, {
      timestamp: errorInfo.timestamp,
      url: errorInfo.url,
      userAgent: errorInfo.userAgent,
      stack: errorInfo.stack
    });
  }

  // Send to Google Analytics if available
  if (enableAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: logLevel === 'error',
        error_id: errorInfo.errorId,
        page_url: errorInfo.url
      });
    } catch (e) {
      console.warn('Failed to send error to Analytics:', e);
    }
  }

  // In production, you might want to send errors to a service like Sentry
  // Example: Sentry.captureException(error, { extra: errorInfo });
};

// Show user-friendly error notification
const showUserNotification = (message: string, errorId: string) => {
  // You can integrate with your existing toast/notification system
  if (typeof window !== 'undefined') {
    // Simple fallback notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      max-width: 400px;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    notification.innerHTML = `
      <div style="font-weight: 600; margin-bottom: 8px;">Something went wrong</div>
      <div style="font-size: 14px; margin-bottom: 8px;">${message}</div>
      <div style="font-size: 12px; opacity: 0.8;">Error ID: ${errorId}</div>
      <button onclick="this.parentElement.remove()" style="
        position: absolute;
        top: 8px;
        right: 8px;
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
      ">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 10000);
  }
};

// Main error handler function
export const handleError = async (
  error: Error,
  context: string = 'Unknown',
  options: ErrorHandlerOptions = {}
): Promise<string> => {
  const errorId = generateErrorId();
  const timestamp = new Date().toISOString();
  
  const errorInfo: ErrorInfo = {
    errorId,
    timestamp,
    message: `[${context}] ${error.message}`,
    stack: error.stack,
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
  };

  // Log the error
  await logError(errorInfo, options);

  // Show user notification if enabled
  if (options.enableUserNotification !== false) {
    showUserNotification(
      'We encountered an unexpected error. Our team has been notified.',
      errorId
    );
  }

  return errorId;
};

// Async error wrapper for promises
export const handleAsyncError = async <T>(
  asyncFn: () => Promise<T>,
  context: string = 'Async Operation',
  options: ErrorHandlerOptions = {}
): Promise<T | null> => {
  try {
    return await asyncFn();
  } catch (error) {
    await handleError(error as Error, context, options);
    return null;
  }
};

// Helper to detect if error is from external/third-party scripts
const isExternalScriptError = (filename?: string, message?: string): boolean => {
  if (!filename && !message) return false;
  
  const externalDomains = [
    'leadconnectorhq.com',
    'widgets.leadconnectorhq.com',
    'beta.leadconnectorhq.com',
    'gstatic.com',
    'googleapis.com',
    'googletagmanager.com',
    'analytics.google.com',
  ];
  
  const externalErrorPatterns = [
    'Importing a module script failed',
    'Loading module',
    'Failed to fetch',
  ];
  
  // Check if error is from external domain
  if (filename) {
    const isExternal = externalDomains.some(domain => filename.includes(domain));
    if (isExternal) return true;
  }
  
  // Check if error message matches external script patterns
  if (message) {
    const matchesPattern = externalErrorPatterns.some(pattern => 
      message.includes(pattern)
    );
    if (matchesPattern) return true;
  }
  
  return false;
};

// Global error handler setup
export const setupGlobalErrorHandling = (options: ErrorHandlerOptions = {}) => {
  if (typeof window !== 'undefined') {
    // Handle unhandled JavaScript errors
    window.addEventListener('error', (event) => {
      // Filter out external script errors
      if (isExternalScriptError(event.filename, event.message)) {
        console.warn('[External Script Error]', event.message, event.filename);
        return;
      }
      
      handleError(
        new Error(event.message),
        `Global Error (${event.filename}:${event.lineno})`,
        options
      );
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const errorMessage = event.reason?.message || String(event.reason) || 'Unhandled Promise Rejection';
      
      // Filter out external script errors
      if (isExternalScriptError(undefined, errorMessage)) {
        console.warn('[External Script Promise Rejection]', errorMessage);
        event.preventDefault(); // Prevent default browser handling
        return;
      }
      
      handleError(
        new Error(errorMessage),
        'Promise Rejection',
        options
      );
    });
  }
};

// React Error Boundary helper
export class ErrorBoundaryHelper {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  static async componentDidCatch(error: Error, errorInfo: any, context: string = 'React Component') {
    await handleError(error, context, {
      enableLogging: true,
      enableAnalytics: true,
      enableUserNotification: false // Error boundary will show its own UI
    });
  }
}

// Network error handler
export const handleNetworkError = async (
  error: any,
  url: string,
  options: ErrorHandlerOptions = {}
): Promise<string> => {
  let message = 'Network request failed';
  
  if (error.response) {
    // Server responded with error status
    message = `HTTP ${error.response.status}: ${error.response.statusText}`;
  } else if (error.request) {
    // Request was made but no response received
    message = 'No response from server';
  } else {
    // Something else happened
    message = error.message || 'Unknown network error';
  }

  return handleError(
    new Error(message),
    `Network Request (${url})`,
    options
  );
};

export default {
  handleError,
  handleAsyncError,
  handleNetworkError,
  setupGlobalErrorHandling,
  ErrorBoundaryHelper
};