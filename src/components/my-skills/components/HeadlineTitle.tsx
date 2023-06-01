import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface IHeadlineTitleProps {
  [key: string]: unknown;
}

const StyledHeadlineTitle = styled(Box)(() => ({}));

const HeadlineTitle: FC<IHeadlineTitleProps> = () => {
  return (
    <StyledHeadlineTitle>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h1">
          My Skills
        </Typography>
      </motion.div>
      <Typography variant="subtitle1" component="h3">
        Полностью увидеть, какие навыки я имею и выполнять для разработки проектов для вас
      </Typography>
    </StyledHeadlineTitle>
  );
};

export default HeadlineTitle;
