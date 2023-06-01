import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import SkillLists from './SkillLists';

interface ISkillContentProps extends GridProps {
  [key: string]: unknown;
}

const StyledSkillContent = styled(Grid)(() => ({
  height: '65vh',
  overflow: 'auto'
}));

const SkillContent: FC<ISkillContentProps> = () => {
  return (
    <StyledSkillContent item md={7.5} xs={12}>
      <SkillLists />
    </StyledSkillContent>
  );
};

export default SkillContent;
