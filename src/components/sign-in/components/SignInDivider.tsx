import { FC } from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';

interface ISignInDividerProps {
  [key: string]: unknown;
}

const StyledSignInDivider = styled(Grid)(() => ({
  textAlign: 'center',
  padding: '2rem 0',
  display: 'flex',
  alignItems: 'center'
}));

const SignInDivider: FC<ISignInDividerProps> = () => {
  return (
    <StyledSignInDivider container>
      <Grid item xs={5.4}>
        <Box sx={{ border: '0.7px solid #f5f5f5', width: '100%' }} />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">или</Typography>
      </Grid>
      <Grid item xs={5.4}>
        <Box sx={{ border: '0.7px solid #f5f5f5', width: '100%' }} />
      </Grid>
    </StyledSignInDivider>
  );
};

export default SignInDivider;
