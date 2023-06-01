import { FC, useEffect, useMemo, useState } from 'react';
import { Box, styled } from '@mui/material';

interface IScrollProgessProps {
  [key: string]: unknown;
}

const StyledScrollProgress = styled(Box)(() => ({
  color: 'white',
  height: '10px',
  background: 'red',
  position: 'fixed',
  zIndex: 100000
}));

const ScrollProgress: FC<IScrollProgessProps> = () => {
  const [scrollSize, setScrollSize] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollSize = () => {
      const bodyScrollHeight = document.body.scrollHeight;

      setScrollSize(bodyScrollHeight);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY) {
        setScrollPosition(scrollY);
      } else {
        setScrollPosition(0);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    window.addEventListener('scroll', handleScrollSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);

      //
      window.removeEventListener('scroll', handleScrollSize);
    };
  }, []);

  const widthPercent = useMemo(() => {
    if (scrollPosition === 0) {
      return 0;
    }
    if (scrollPosition < 1000) {
      return ((scrollPosition + 400) / scrollSize) * 100;
    }
    return ((scrollPosition + 900) / scrollSize) * 100;
  }, [scrollPosition, scrollSize]);

  return <StyledScrollProgress sx={{ width: `${widthPercent}%` }} />;
};

export default ScrollProgress;
