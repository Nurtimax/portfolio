import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import Skill from './Skill';
import AboutMe from './AboutMe';

import { ABOUTME_AND_MY_SKILLS } from '@/utils/constants/about';

const StyledAboutHeadlines = styled(Grid)(() => ({
  display: 'grid'
}));

const AboutHeadlines: FC = () => {
  return (
    <StyledAboutHeadlines item md={6} xs={12}>
      <AboutMe />
      {ABOUTME_AND_MY_SKILLS.map((skills) => (
        <Skill key={skills.id} {...skills} />
      ))}
    </StyledAboutHeadlines>
  );
};

export default AboutHeadlines;
