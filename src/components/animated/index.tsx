import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface IAnimatedProps {
  [key: string]: unknown;
}

const StyledAnimated = styled(Box)(() => ({
  position: 'relative'
}));

const Animated: FC<IAnimatedProps> = () => {
  return (
    <StyledAnimated>
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          style={{
            borderLeft: '2px solid #FF4500',
            width: '15vh',
            height: '15vh',
            position: 'absolute',
            borderRadius: '50%'
          }}
          animate={{
            borderLeft: [
              '2px solid #FF4500',
              '2px solid #4B0082',
              '2px solid #00CED1',
              'none',
              'none',
              'none'
            ],
            borderRight: [
              'none',
              '2px solid #00CED1',
              'none',
              '2px solid #4B0082',
              'none',
              '2px solid #FF4500'
            ],
            rotateY: [0, -60, -120, -180, -240, -300, -360]
          }}
          transition={{ duration: 1 + item / 10, repeat: Infinity }}
        />
      ))}

      <motion.div
        style={{
          width: '15.2vh',
          height: '15.2vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem'
        }}
        animate={{
          display: ['flex', 'flex', 'flex', 'none', 'none', 'flex'],
          color: [' #FF4500', ' #4B0082', ' #00CED1', 'none', 'none', 'none']
        }}
        transition={{ duration: 1 + 3 / 10, repeat: Infinity }}
      >
        N
      </motion.div>
    </StyledAnimated>
  );
};

export default Animated;
