declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found. Analytics disabled.');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    console.log('GA Event (not tracked):', eventName, eventParams);
    return;
  }
  
  window.gtag('event', eventName, eventParams);
};

export const trackConversion = (
  conversionType: 'lead_capture' | 'quote_request' | 'whatsapp_click' | 'tripwire_interest',
  value?: number,
  additionalParams?: Record<string, any>
) => {
  trackEvent(conversionType, {
    value,
    currency: 'INR',
    ...additionalParams,
  });
};

export const trackPageView = (path: string, title?: string) => {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
};
