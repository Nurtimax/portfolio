import { FC } from 'react';
import { Button, Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

interface INavigateButtonProps {
  [key: string]: unknown;
}

const StyledNavigateButton = styled(Grid)(() => ({}));

const StyledButton = styled(Button)(() => ({
  justifySelf: 'flex-start',
  alignSelf: 'center'
}));

const NavigateButton: FC<INavigateButtonProps> = () => {
  return (
    <StyledNavigateButton>
      <motion.div initial={{ x: -500 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <StyledButton variant="contained" color="error">
          Let's talk
        </StyledButton>
      </motion.div>
    </StyledNavigateButton>
  );
};

export default NavigateButton;
