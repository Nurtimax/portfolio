import { FC } from 'react';
import { Box, styled } from '@mui/material';
import Link from 'next/link';

import { Card } from '@/components/UI';
import { IProjectsLinks } from '@/types/porjects';

interface INavigateDemoProps {
  [key: string]: unknown;
  links: IProjectsLinks[];
}

const StyledNavigateDemo = styled(Box)(() => ({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  '& .demo__link': {
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '.4rem',
    fontWeight: '600',
    '& svg': {
      fontSize: '1rem',
      width: '60%',
      height: '60%'
    }
  },
  '& .demo__link:first-of-type svg': {
    width: '35%',
    height: '35%'
  }
}));

const StyledCard = styled(Card)(() => ({
  width: '60px',
  height: '65px',
  cursor: 'pointer'
}));

const NavigateDemo: FC<INavigateDemoProps> = ({ links }) => {
  return (
    <StyledNavigateDemo>
      {links.map((link) => (
        <Link href={link.link} classNameName="demo__link" key={link.id}>
          <StyledCard>
            <link.ICON />
          </StyledCard>
        </Link>
      ))}
    </StyledNavigateDemo>
  );
};

export default NavigateDemo;
