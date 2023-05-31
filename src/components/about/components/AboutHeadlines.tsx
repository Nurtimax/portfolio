import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import { motion } from 'framer-motion';

import Skill from './Skill';
import AboutMe from './AboutMe';

import { ABOUTME_AND_MY_SKILLS } from '@/utils/constants/about';

const StyledAboutHeadlines = styled(Grid)(() => ({
  display: 'grid'
}));

const AboutHeadlines: FC = () => {
  return (
    <StyledAboutHeadlines item md={6} xs={12}>
      <motion.div
        layoutScroll
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutMe />
      </motion.div>
      {ABOUTME_AND_MY_SKILLS.map((skills) => (
        <motion.div
          key={skills.id}
          layoutScroll
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Skill {...skills} />
        </motion.div>
      ))}
    </StyledAboutHeadlines>
  );
};

export default AboutHeadlines;
