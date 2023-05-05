import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import Headerline from './components/Headerline';
import SkillContent from './components/SkillContent';

interface IMainMySkillsProps {
  [key: string]: unknown;
}

const StyledMainMySkills = styled(Grid)(() => ({}));

const MainMySkills: FC<IMainMySkillsProps> = () => {
  return (
    <StyledMainMySkills container>
      <Headerline />
      <SkillContent />
    </StyledMainMySkills>
  );
};

export default MainMySkills;
