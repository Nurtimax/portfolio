import { FC, ReactNode } from 'react';
import { Grid, Typography, styled } from '@mui/material';
import { ABOUTME_AND_MY_SKILLS } from '@/utils/constants/about';
import Skill from './Skill';
import AboutMe from './AboutMe';

interface IAboutHeadlinesProps {}

const AboutHeadlines: FC<IAboutHeadlinesProps> = ({}) => {
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

const StyledAboutHeadlines = styled(Grid)(() => ({
  display: 'grid'
}));
