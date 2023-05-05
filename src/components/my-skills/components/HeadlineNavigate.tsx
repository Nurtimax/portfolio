import { FC } from 'react';
import { Box, Button, styled } from '@mui/material';
import { Link } from 'react-scroll';

import { PAGES } from '@/utils/constants/pages';

interface IHeadlineNavigateProps {
  [key: string]: unknown;
}

const StyledHeadlineNavigate = styled(Box)(({ theme }) => ({
  alignSelf: 'flex-end',
  [theme.breakpoints.down('md')]: {
    padding: '0 0 2rem',
    borderBottom: '1px solid #706c6c'
  }
}));

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary
// }));

const HeadlineNavigate: FC<IHeadlineNavigateProps> = () => {
  return (
    <StyledHeadlineNavigate>
      <Link to={PAGES.PROJECTS} spy={true} smooth={true} offset={-70} duration={500}>
        <Button variant="contained">Projects</Button>
      </Link>
    </StyledHeadlineNavigate>
  );
};

export default HeadlineNavigate;
