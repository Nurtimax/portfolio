import { FC, ReactNode } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

const StyledCard = styled(Box)(() => ({
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  background: 'red',
  width: '100px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

interface ICardProps extends BoxProps {
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

export default Card;
