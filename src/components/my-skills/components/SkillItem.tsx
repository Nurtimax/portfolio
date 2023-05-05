import { FC, SVGProps } from 'react';
import { Grid, GridProps, IconButton, styled } from '@mui/material';

import SkillItemHeadTitle from './SkillItemHeadTitle';

interface ISkillItemProps extends GridProps {
  [key: string]: unknown;
  title: string;
  index: number;
  ICON: FC<SVGProps<SVGSVGElement>> | FC;
}

const StyledSkillItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3px',
  padding: '0 .6rem 0',
  borderBottom: '1px solid',
  [theme.breakpoints.up('md')]: {
    '&:last-child': {
      borderBottom: '0'
    }
  }
}));

const SkillItem: FC<ISkillItemProps> = ({ title, index, ICON, ...rest }) => {
  return (
    <StyledSkillItem item md={4} xs={6} {...rest}>
      <SkillItemHeadTitle title={title} index={index} />
      <IconButton>
        <ICON width={35} height={35} />
      </IconButton>
    </StyledSkillItem>
  );
};

export default SkillItem;
