import { FC } from 'react';
import { Typography, TypographyProps, styled } from '@mui/material';

interface IAboutMeProps {}

interface IStyledAboutMeProps extends TypographyProps {}

const AboutMe: FC<IAboutMeProps> = ({}) => {
  return <StyledAboutMe variant="h4">About Me</StyledAboutMe>;
};

export default AboutMe;

const StyledAboutMe = styled(Typography)<IStyledAboutMeProps>(({}) => ({
  alignSelf: 'flex-end'
}));
