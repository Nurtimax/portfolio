import { FC } from 'react';
import { Box, styled } from '@mui/material';
import Image from 'next/image';

import ReactHookFormImage from '../images/images.png';

interface IReactHookFormProps {
  [key: string]: unknown;
}

const StyledReactHookForm = styled(Box)(() => ({
  width: '50px',
  height: '50px',
  '& img': {
    width: '100%',
    height: '100%',
    mixBlendMode: 'color'
  }
}));

const ReactHookForm: FC<IReactHookFormProps> = (props) => {
  return (
    <StyledReactHookForm {...props}>
      <Image src={ReactHookFormImage} alt="React hook form" />
    </StyledReactHookForm>
  );
};

export default ReactHookForm;
