import { useState } from 'react';
import { useInViewEffect } from 'react-hook-inview';

export const useInViewHook = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) observer.unobserve(entry.target);
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );
  return {
    isVisible,
    ref,
  };
};
