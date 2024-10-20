'use client';
import { useState, useEffect } from 'react';
import { SCREEN_WIDTH } from '@/constants';

export default function useResize() {
  const isClient = typeof window === 'object';

  const getSize = () => (isClient ? window.innerWidth : 0);

  const [width, setWidth] = useState<number>(getSize());

  useEffect(() => {
    const handleResize = () => setWidth(getSize());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    desktopScreen: width > SCREEN_WIDTH.DESKTOP_SCREEN,
    tabletScreen:
      width < SCREEN_WIDTH.DESKTOP_SCREEN && width > SCREEN_WIDTH.MOBILE_SCREEN,
    mobileScreen: width <= SCREEN_WIDTH.MOBILE_SCREEN,
  };
}
