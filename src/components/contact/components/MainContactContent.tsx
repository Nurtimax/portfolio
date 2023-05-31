import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Headlines from './Headlines';
import FormContent from './FormContent';

import SocialMediaIcons from '@/components/social-media-icons';

interface IMainContactContentProps {
  [key: string]: unknown;
  isWork?: boolean;
}

const StyledMainContactContent = styled(Box)(() => ({
  display: 'grid',
  height: '50%'
}));

const MainContactContent: FC<IMainContactContentProps> = ({ isWork }) => {
  return (
    <StyledMainContactContent>
      <Headlines />
      {isWork ? <FormContent /> : null}

      <SocialMediaIcons sx={{ justifySelf: 'center' }} />
    </StyledMainContactContent>
  );
};

export default MainContactContent;
