import { FC } from 'react';
import { Box, styled } from '@mui/material';

import { About, Contact, MySkills, Projects, Services } from '@/containers';

const StyledMainLayout = styled(Box)(() => ({}));

const MainLayout: FC = () => {
  return (
    <StyledMainLayout>
      <About />
      <MySkills />
      <Services />
      <Projects />
      <Contact />
    </StyledMainLayout>
  );
};

export default MainLayout;
