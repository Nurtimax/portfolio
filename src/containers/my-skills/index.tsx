import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { PAGES } from '@/utils/constants/pages';
import { MainMySkills } from '@/components';

interface IMySkillsProps {
  [key: string]: unknown;
}

const StyledMySkills = styled(Box)(() => ({
  background: '#292929',
  padding: '3rem 0'
}));

const MySkills: FC<IMySkillsProps> = () => {
  return (
    <StyledMySkills>
      <Container>
        <Element name={PAGES.MY_SKILLS} id={PAGES.MY_SKILLS} />
        <MainMySkills />
      </Container>
    </StyledMySkills>
  );
};

export default MySkills;
