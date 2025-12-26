import { useState, useEffect } from 'react';
import { LOADING_DURATION } from '../utils/constants';

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOADING_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return loading;
};