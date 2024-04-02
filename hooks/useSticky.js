'use client';

import { useEffect, useState } from 'react';

// Custom hook to track the sticky state based on scroll position
const useSticky = (height) => {
  // Initialize the sticky state as false
  const [sticky, setSticky] = useState(false);

  // Function to check the scroll position and update the sticky state
  const stickyElement = () => {
    if (window.scrollY > height) {
      // If scroll position is greater than height pixels, set sticky to true
      setSticky(true);
    } else {
      // Otherwise, set sticky to false
      setSticky(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', stickyElement);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', stickyElement);
    };
  }, []);

  // Return the sticky state
  return {
    sticky,
  };
};

export default useSticky;
