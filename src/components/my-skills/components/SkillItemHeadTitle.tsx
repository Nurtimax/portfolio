import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface ISkillItemHeadTitleProps {
  [key: string]: unknown;
  index: number;
  title: string;
}

const StyledSkillItemHeadTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '80%'
}));

const SkillItemHeadTitle: FC<ISkillItemHeadTitleProps> = ({ index, title }) => {
  return (
    <StyledSkillItemHeadTitle>
      <Typography variant="caption">{index + 1}.</Typography>
      <Typography variant="caption">{title}</Typography>
    </StyledSkillItemHeadTitle>
  );
};

export default SkillItemHeadTitle;
