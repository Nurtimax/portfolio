import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';

interface LoadingProps {
  children?: ReactNode;
}

const StyledLoading = styled(Box)(() => ({}));

const Loading: FC<LoadingProps> = ({ children, ...props }) => {
  return <StyledLoading {...props}>{children}</StyledLoading>;
};

export default Loading;
