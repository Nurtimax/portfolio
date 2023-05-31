import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

import { SOCIALMEDIA } from '@/utils/constants/social-media';
import Loading from '@/components/loading';

interface ISocialMediaIcons extends BoxProps {
  [key: string]: unknown;
}

const Card = dynamic(() => import('../UI/card'), {
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

const SocialMediaIcons: FC<ISocialMediaIcons> = (props) => {
  return (
    <StyledSocialMediaIcons {...props}>
      {SOCIALMEDIA.map(({ SOCIALICON, id, to }, index) => (
        <a href={to} key={id}>
          <motion.div
            initial={{ x: 100 * index }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: index * 0.3 }}
          >
            <StyledCard key={id} title={to}>
              <SOCIALICON />
            </StyledCard>
          </motion.div>
        </a>
      ))}
    </StyledSocialMediaIcons>
  );
};

export default SocialMediaIcons;
