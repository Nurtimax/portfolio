import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IMainMySkillsProps {
  [key: string]: unknown;
}

const StyledMainMySkills = styled(Box)(() => ({}));

const MainMySkills: FC<IMainMySkillsProps> = () => {
  return <StyledMainMySkills>MainMySkills</StyledMainMySkills>;
};

export default MainMySkills;
