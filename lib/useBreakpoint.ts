import { useWindowDimensions } from 'react-native';

const BREAKPOINTS = { phone: 600, tablet: 900 };

export function useBreakpoint() {
  const { width } = useWindowDimensions();
  const isPhone = width < BREAKPOINTS.phone;
  const isTablet = width >= BREAKPOINTS.phone && width < BREAKPOINTS.tablet;
  const isLargeTablet = width >= BREAKPOINTS.tablet;
  return {
    isPhone,
    isTablet,
    isLargeTablet,
    deviceType: isPhone ? 'phone' : isTablet ? 'tablet' : 'large' as 'phone' | 'tablet' | 'large',
    width,
    breakpoints: BREAKPOINTS,
  };
}
