import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

interface ICardProps extends BoxProps {}

const Card: FC<ICardProps> = ({ ...props }) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;

const StyledCard = styled(Box)(() => ({
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  background: 'red',
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
