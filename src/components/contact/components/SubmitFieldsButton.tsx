import { FC } from 'react';
import { Button, Grid, GridProps, styled } from '@mui/material';

interface ISubmitFieldsButtonProps extends GridProps {
  [key: string]: unknown;
}

const StyledSubmitFieldsButton = styled(Grid)(() => ({
  display: 'grid'
}));

const SubmitFieldsButton: FC<ISubmitFieldsButtonProps> = (props) => {
  return (
    <StyledSubmitFieldsButton item {...props}>
      <Button variant="outlined" color="error" sx={{ justifySelf: 'flex-end' }}>
        Submit
      </Button>
    </StyledSubmitFieldsButton>
  );
};

export default SubmitFieldsButton;
