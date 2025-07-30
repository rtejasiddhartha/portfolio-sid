import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your CSS styles

// Import device-specific App components
import AppMobile from './AppMobile';
import AppTablet from './AppTablet';
import AppDesktop from './AppDesktop';

// Define breakpoints for device detection
const BREAKPOINTS = {
  mobile: 767, // Max width for mobile
  tablet: 1023, // Max width for tablet (min-width for tablet is 768px)
};

const AppSelector = () => {
  const [deviceType, setDeviceType] = useState('desktop'); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= BREAKPOINTS.mobile) {
        setDeviceType('mobile');
      } else if (width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    // Set initial device type
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render the appropriate App component based on deviceType
  switch (deviceType) {
    case 'mobile':
      return <AppMobile />;
    case 'tablet':
      return <AppTablet />;
    case 'desktop':
      return <AppDesktop />;
    default:
      return <AppDesktop />; // Fallback
  }
};

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render(<AppSelector />); // Render the AppSelector component to the root.
