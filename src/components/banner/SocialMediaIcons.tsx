import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('../UI/card'), {
  loading: () => <p>Loading...</p>
});

import { SOCIALMEDIA } from '@/utils/constants/social-media';

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
