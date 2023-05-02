import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

const StyledFrontendDeveloperInfo = styled(Box)(() => ({}));

const FrontendDeveloperInfo: FC = () => {
  return (
    <StyledFrontendDeveloperInfo>
      <Typography component="h3" variant="h5">
        Frontend Developer
      </Typography>
      <Typography component="p" variant="subtitle1">
        Опытный frontend-разработчик, специализирующийся на HTML, CSS и JavaScript, работавший с
        React.
      </Typography>
    </StyledFrontendDeveloperInfo>
  );
};

export default FrontendDeveloperInfo;
