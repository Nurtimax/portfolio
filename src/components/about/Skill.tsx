import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

import findSkillsAndChangeToReactElement from '@/utils/generals/findSkills';

interface ISkillProps {
  description: string;
  skills: string[];
}

const StyledSkill = styled(Box)(() => ({
  padding: '.5rem 0',
  alignSelf: 'center',
  '& span': {
    color: 'red'
  }
}));

const Skill: FC<ISkillProps> = ({ description, skills }) => {
  return (
    <StyledSkill>
      <Typography variant="subtitle1">
        {findSkillsAndChangeToReactElement(description, skills, 'span')}
      </Typography>
    </StyledSkill>
  );
};

export default Skill;
