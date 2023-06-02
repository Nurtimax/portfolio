import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

const StyledProfileName = styled(Box)(() => ({
  alignSelf: 'flex-end',
  '& h2': {
    color: 'red'
  }
}));

const ProfileName: FC = () => {
  return (
    <StyledProfileName>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography component="h2" variant="h4">
          Нуртилек Максатбек
        </Typography>
      </motion.div>
    </StyledProfileName>
  );
};

export default ProfileName;
