import { FC, ReactNode } from 'react';
import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Card } from '../UI';

import { MyPhoto } from '@/assets';

interface IProfilePicture extends GridProps {
  children?: ReactNode;
}

const StyledProfilePicture = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  mixBlendMode: 'darken'
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: '#eaf6fe',
  [theme.breakpoints.down('sm')]: {
    width: '55% !important',
    height: '80% !important'
  },
  [theme.breakpoints.down('md')]: {
    width: '45%',
    height: '70%'
  }
}));

const ProfilePicture: FC<IProfilePicture> = ({ ...props }) => {
  return (
    <StyledProfilePicture item md={6} xs={12} {...props}>
      <motion.div
        style={{ width: '70%', height: '60%' }}
        animate={{ translateY: [0, 20] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2, repeatType: 'reverse' }}
      >
        <motion.div
          style={{ width: '100%', height: '100%' }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 10, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <StyledCard>
            <StyledImage src={MyPhoto.src} alt="nurtilek" width="100" height="100" />
          </StyledCard>
        </motion.div>
      </motion.div>
    </StyledProfilePicture>
  );
};

export default ProfilePicture;
