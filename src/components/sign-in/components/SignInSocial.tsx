import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import { Card } from '@/components/UI';
import { SIGNIN_PROVIDERS } from '@/utils/constants/sign-in';

interface ISignInSocialProps {
  [key: string]: unknown;
}

const StyledSignInSocial = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

const SignInSocial: FC<ISignInSocialProps> = () => {
  return (
    <StyledSignInSocial container>
      {SIGNIN_PROVIDERS.map(({ id, ICON, ...rest }) => (
        <Grid key={id} item xs={1.5}>
          <Card sx={{ width: '50px', height: '50px', background: '#f5f5f5' }} title="Provider">
            <ICON {...rest} />
          </Card>
        </Grid>
      ))}
    </StyledSignInSocial>
  );
};

export default SignInSocial;
