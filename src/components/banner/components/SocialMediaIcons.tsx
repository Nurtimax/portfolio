import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import { SOCIALMEDIA } from '@/utils/constants/social-media';
import Loading from '@/components/loading';

const Card = dynamic(() => import('../../UI/card'), {
  loading: () => <Loading />
});

const StyledSocialMediaIcons = styled(Box)(() => ({
  display: 'flex',
  gap: '.5rem',
  padding: '1rem 0'
}));

const StyledCard = styled(Card)(() => ({
  width: '60px',
  height: '65px',
  cursor: 'pointer'
}));

const SocialMediaIcons: FC = () => {
  return (
    <StyledSocialMediaIcons>
      {SOCIALMEDIA.map(({ SOCIALICON, id, to }) => (
        <a href={to} key={id}>
          <StyledCard key={id}>
            <SOCIALICON />
          </StyledCard>
        </a>
      ))}
    </StyledSocialMediaIcons>
  );
};

export default SocialMediaIcons;