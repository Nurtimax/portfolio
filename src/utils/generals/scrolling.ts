import { animateScroll as scroll } from 'react-scroll';

function scrollToElement(elementId: string): void {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    scroll.scrollTo(targetElement.offsetTop - 115);
  }
}

export default scrollToElement;
