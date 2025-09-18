import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location]);

  useEffect(() => {
    // Core Web Vitals tracking
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          window.gtag && window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_action: 'CLS',
            value: metric.value,
            metric_rating: metric.rating,
          });
        });

        // onFID is deprecated in web-vitals v3, replaced by onINP
        // Commenting out FID tracking for now

        onFCP((metric) => {
          window.gtag && window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_action: 'FCP',
            value: metric.value,
            metric_rating: metric.rating,
          });
        });

        onLCP((metric) => {
          window.gtag && window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_action: 'LCP',
            value: metric.value,
            metric_rating: metric.rating,
          });
        });

        onTTFB((metric) => {
          window.gtag && window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_action: 'TTFB',
            value: metric.value,
            metric_rating: metric.rating,
          });
        });
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: false,
              custom_map: {
                'custom_parameter_1': 'regenerative_medicine_interest'
              }
            });
            
            // Track consultation requests
            function trackConsultation() {
              gtag('event', 'generate_lead', {
                event_category: 'Consultation',
                event_label: 'Stem Cell Consultation Request',
                value: 1
              });
            }
            
            // Track phone calls
            function trackPhoneCall() {
              gtag('event', 'phone_call', {
                event_category: 'Contact',
                event_label: 'Phone Call Click',
                value: 1
              });
            }
            
            window.trackConsultation = trackConsultation;
            window.trackPhoneCall = trackPhoneCall;
          `,
        }}
      />
    </>
  );
};

export default Analytics;