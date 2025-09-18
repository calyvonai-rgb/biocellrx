/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    trackConsultation?: () => void;
    trackPhoneCall?: () => void;
  }
}

export {};