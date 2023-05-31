import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadDescriptionProps {
  [key: string]: unknown;
  description: string[];
}

const StyledHeadDescription = styled(Box)(() => ({
  display: 'grid',
  gap: '.5rem',
  '& .list': {
    color: 'red'
  }
}));

const HeadDescription: FC<IHeadDescriptionProps> = ({ description }) => {
  return (
    <StyledHeadDescription>
      {description.map((item, index) => (
        <Typography variant="subtitle2" component="span" key={item}>
          <span className="list">{String(index + 1).padStart(2, '0')}.</span> {item}{' '}
        </Typography>
      ))}
    </StyledHeadDescription>
  );
};

export default HeadDescription;
