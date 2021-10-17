import { useMediaQuery as useMediaQueryLibrary } from 'react-responsive';

export const useMediaQuery = () => {
  const isDesktop = useMediaQueryLibrary({
    query: '(min-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQueryLibrary({
    query: '(max-width: 1224px)',
  });
  const isBigScreen = useMediaQueryLibrary({
    query: '(min-device-width: 1824px)',
  });
  const isPortrait = useMediaQueryLibrary({ query: '(orientation: portrait)' });
  const isRetina = useMediaQueryLibrary({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQueryLibrary({ query: '(max-width: 768px)' });
  const isTablet = useMediaQueryLibrary({ minWidth: 768, maxWidth: 991 })

  return {
    isDesktop,
    isTabletOrMobile,
    isBigScreen,
    isPortrait,
    isRetina,
    isMobile,
    isTablet
  };
};
