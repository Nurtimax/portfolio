import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

const StyledFrontendDeveloperInfo = styled(Box)(() => ({}));

const FrontendDeveloperInfo: FC = () => {
  return (
    <StyledFrontendDeveloperInfo>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography component="h3" variant="h5">
          Frontend Developer
        </Typography>
        <Typography component="p" variant="subtitle1">
          Опытный frontend-разработчик, специализирующийся на HTML, CSS и JavaScript, работавший с
          React.
        </Typography>
      </motion.div>
    </StyledFrontendDeveloperInfo>
  );
};

export default FrontendDeveloperInfo;
