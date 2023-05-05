import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import SkillItem from './SkillItem';

import { MY_SKILLS_DATA } from '@/utils/constants';

interface ISkillListsProps {
  [key: string]: unknown;
}

const StyledSkillLists = styled(Grid)(() => ({}));

const SkillLists: FC<ISkillListsProps> = () => {
  return (
    <StyledSkillLists container spacing={1}>
      {MY_SKILLS_DATA.map((skill, index) => (
        <SkillItem key={skill.id} title={skill.title} index={index} ICON={skill.ICON} />
      ))}
    </StyledSkillLists>
  );
};

export default SkillLists;
